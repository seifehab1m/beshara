import { useEffect, useState } from "react";
import { Collapse, Spin, Card, Typography, message } from "antd";
import { Link } from "react-router-dom";
import { fetcher } from "../network/fetcher";

const { Title } = Typography;

export default function Home() {
  const [categories, setCategories] = useState<string[]>([]);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [products, setProducts] = useState<{ [key: string]: any[] }>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetcher("/products/categories")
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch(() => {
        message.error("Error fetching categories! ");
      });
  }, []);

  const fetchProducts = (category: string) => {
    if (!products[category]) {
      fetcher(`/products/category/${category}`)
        .then((data) => {
          setProducts((prev) => ({ ...prev, [category]: data }));
          setLoading(false);
        })
        .catch(() => {
          message.error(`Error fetching products for ${category}! `);
          setLoading(false);
        });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8  container ">
      <Title level={2} className="text-center text-gray-800 pt-14 pb-5">
        🛍️ Product Categories
      </Title>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <Spin size="large" />
        </div>
      ) : (
        <Collapse
          accordion
          className="bg-white rounded-lg shadow-lg"
          onChange={(key) => {
            fetchProducts(key?.[0]);
          }}
          items={categories.map((category) => ({
            key: category,
            label: (
              <Title level={4} className="!mb-0 text-gray-700">
                {category.toUpperCase()}
              </Title>
            ),
            children: products[category] ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 p-2">
                {products[category].map((product) => (
                  <Card
                    key={product.id}
                    hoverable
                    className="shadow-md rounded-lg transition-transform duration-200 hover:scale-105 hover:shadow-xl"
                    cover={
                      <Link to={`/product/${product.id}`}>
                        <img
                          src={product.image}
                          alt={product.title}
                          className="h-52 object-contain mx-auto p-4 w-full"
                        />
                      </Link>
                    }
                  >
                    <Title level={5} className="truncate">
                      <Link
                        to={`/product/${product.id}`}
                        className="text-gray-800 hover:text-blue-600"
                      >
                        {product.title}
                      </Link>
                    </Title>
                    <p className="text-gray-500 truncate">
                      {product.description.substring(0, 80)}...
                    </p>
                    <p className="font-semibold mt-2 text-lg text-primary">
                      ${product.price}
                    </p>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-4">
                <Spin />
              </div>
            ),
          }))}
        />
      )}
    </div>
  );
}
