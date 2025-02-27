import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Typography, Spin, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../slices/cartSlice";
import { RootState } from "../store/store";
import { fetcher } from "../network/fetcher";
import { ShoppingCart, X } from "lucide-react";

const { Title, Paragraph } = Typography;

export default function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const isInCart = cartItems.some((item) => item.id === Number(id));

  useEffect(() => {
    if (!id) return;

    fetcher(`/products/${id}`)
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        message.error("Error fetching product details! ");
        setLoading(false);
      });
  }, [id]);

  const handleCartAction = () => {
    if (isInCart) {
      dispatch(removeFromCart(Number(id)));
      message.warning("Product removed from cart! ❌");
    } else {
      dispatch(addToCart(product));
      message.success("Product added to cart! 🛒");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gray-100 p-6 py-20">
      <Card className="max-w-2xl shadow-lg rounded-lg p-4 bg-white">
        <button
          onClick={handleCartAction}
          className="absolute top-2 right-2 bg-slate-100 hover:bg-slate-200 shadow-md rounded-full p-2  transition"
        >
          {isInCart ? (
            <X className="text-red-500" size={24} />
          ) : (
            <ShoppingCart className="text-blue-500" size={24} />
          )}
        </button>
        <img
          src={product?.image}
          alt={product?.title}
          className="w-64 mx-auto mb-4 object-contain"
        />
        <Title level={3} className="text-center">
          {product?.title}
        </Title>
        <Paragraph className="text-gray-600">{product?.description}</Paragraph>
        <Title level={4} className="text-primary">
          ${product?.price}
        </Title>
        <Paragraph className="text-gray-500">
          Category: {product?.category}
        </Paragraph>
        <Paragraph className="text-yellow-500">
          ⭐ {product?.rating.rate} ({product?.rating?.count} reviews)
        </Paragraph>

        <Button
          type={isInCart ? "default" : "primary"}
          className="w-full mt-4"
          size="large"
          danger={isInCart}
          onClick={handleCartAction}
        >
          {isInCart ? "Remove from Cart" : "Add to My Cart"}
        </Button>
      </Card>
    </div>
  );
}
