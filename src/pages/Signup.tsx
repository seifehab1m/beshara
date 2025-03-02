import { Form, Input, Button, Card, message } from "antd";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = (values: any) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (users.some((user: any) => user.email === values.email)) {
      message.error("Email already registered!");
      return;
    }

    users.push(values);
    localStorage.setItem("users", JSON.stringify(users));
    message.success("Registration successful! ✅");
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen h-full bg-gray-100">
      <Card className="w-full max-w-md shadow-lg p-6 bg-white rounded-2xl">
        <h2 className="text-2xl font-semibold text-center py-7 mb-4">Sign Up</h2>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              { required: true, message: "First Name is required" },
              { min: 4, message: "First Name must be at least 4 characters" },
            ]}
          >
            <Input placeholder="Enter First Name" />
          </Form.Item>

          <Form.Item label="Last Name" name="lastName">
            <Input placeholder="Enter Last Name" />
          </Form.Item>

          <Form.Item
            label="Username"
            name="username"
            rules={[
              { required: true, message: "Username is required" },
              { min: 4, message: "Username must be at least 4 characters" },
            ]}
          >
            <Input placeholder="Enter Username" />
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

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { type: "email", required: true, message: "Enter a valid Email" },
            ]}
          >
            <Input placeholder="Enter Email" />
          </Form.Item>

          <Form.Item label="Address" name="address">
            <Input.TextArea placeholder="Enter Address" rows={3} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Register
            </Button>
          </Form.Item>

          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </Form>
      </Card>
    </div>
  );
}
