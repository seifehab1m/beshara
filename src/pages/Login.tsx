import { Form, Input, Button, Card, message } from "antd";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = (values: any) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const user = users.find(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (u: any) => u.email === values.email && u.password === values.password
    );

    if (!user) {
      message.error("Invalid email or password! ❌");
      return;
    }

    localStorage.setItem("activeUser", JSON.stringify(user));
    message.success("Login successful! ✅");
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card className="w-full max-w-md shadow-lg p-6 bg-white rounded-2xl">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Email is required" }]}
          >
            <Input placeholder="Enter Email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Password is required" },
              {
                pattern:
                  /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Must be at least 8 chars, include 1 uppercase, 1 number, 1 special character",
              },
            ]}
          >
            <Input.Password placeholder="Enter Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>

          <p className="text-center text-sm">
            Don't have an account?{" "}
            <Link to="/sign-up" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </Form>
      </Card>
    </div>
  );
}
