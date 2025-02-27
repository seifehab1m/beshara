import { useEffect, useState, lazy, Suspense } from "react";
import { Collapse, Spin, Typography, message } from "antd";
import { fetcher } from "../network/fetcher";

const { Title } = Typography;
const ProductCard = lazy(() => import("../components/pages/home/ProductCard"));

export default function Home() {
  const [categories, setCategories] = useState<string[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-explicit-any
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
    <div className="bg-gray-50 min-h-screen py-8 ">
      <div className="container">
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
                  {category?.toUpperCase()}
                </Title>
              ),
              children: products[category] ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 p-2 w-full overflow-hidden">
                  {products[category]?.map((product) => (
                    <Suspense key={product?.id} fallback={<Spin />}>
                      <ProductCard product={product} />
                    </Suspense>
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
    </div>
  );
}
