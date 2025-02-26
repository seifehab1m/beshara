import { Form, Input, Button, Card } from "antd";

export default function Signup() {
  const [form] = Form.useForm();

  
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card className="w-full max-w-md shadow-lg p-6 bg-white rounded-2xl">
        <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[{ required: true, message: "First Name is required" }]}
          >
            <Input placeholder="Enter First Name" />
          </Form.Item>

          <Form.Item label="Last Name" name="lastName">
            <Input placeholder="Enter Last Name" />
          </Form.Item>

          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Username is required" }]}
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
                  "Password must be at least 8 characters, include 1 uppercase letter, 1 number, and 1 special character",
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
        </Form>
      </Card>
    </div>
  );
}
