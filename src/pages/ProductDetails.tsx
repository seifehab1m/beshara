import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Typography, Spin, message } from "antd";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

const { Title, Paragraph } = Typography;

export default function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  const handleAddToCart = (product: any) => {
    console.log(product);
    
    dispatch(addToCart(product));
    message.success("Product added to cart! 🛒");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <Card className="max-w-2xl shadow-lg rounded-lg p-4 bg-white">
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

        <Button
          type="primary"
          className="w-full mt-4"
          size="large"
          onClick={() => handleAddToCart(product)}  
        >
          Add to My Cart
        </Button>
      </Card>
    </div>
  );
}
