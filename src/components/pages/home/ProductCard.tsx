import { Card, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card
      key={product?.id}
      hoverable
      className="shadow-md rounded-lg transition-transform duration-200 hover:scale-105 hover:shadow-xl w-full max-w-xs sm:max-w-sm mx-auto"
      cover={
        <Link to={`/product/${product?.id}`}>
          <img
            src={product?.image}
            alt={product?.title}
            className="h-52 object-contain mx-auto p-4 w-full"
          />
        </Link>
      }
    >
      <Title level={5} className="truncate">
        <Link
          to={`/product/${product?.id}`}
          className="text-gray-800 hover:text-blue-600"
        >
          {product?.title}
        </Link>
      </Title>
      <p className="text-gray-500 truncate">
        {product?.description.substring(0, 80)}...
      </p>
      <p className="font-semibold mt-2 text-lg text-primary">
        ${product?.price}
      </p>
    </Card>
  );
}
