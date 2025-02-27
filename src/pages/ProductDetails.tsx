import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Typography, Spin, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../slices/cartSlice";
import { RootState } from "../store/store";
import { fetcher } from "../network/fetcher";
import { ShoppingCart, XCircle } from "lucide-react";

const { Title, Paragraph } = Typography;

export default function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
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
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6 py-20">
      <Card className="relative max-w-2xl shadow-lg rounded-lg p-4 bg-white">
        <button
          onClick={handleCartAction}
          className="absolute top-4 right-4 text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-full shadow-md transition-all"
        >
          {isInCart ? <XCircle size={24} /> : <ShoppingCart size={24} />}
        </button>
        <img
          src={product.image}
          alt={product.title}
          className="w-64 mx-auto mb-4 object-contain"
        />
        <Title level={3} className="text-center">
          {product.title}
        </Title>
        <Paragraph className="text-gray-600">{product.description}</Paragraph>
        <Title level={4} className="text-primary">
          ${product.price}
        </Title>
        <Paragraph className="text-gray-500">
          Category: {product.category}
        </Paragraph>
        <Paragraph className="text-yellow-500">
          ⭐ {product.rating.rate} ({product.rating.count} reviews)
        </Paragraph>
      </Card>
    </div>
  );
}
