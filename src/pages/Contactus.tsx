import { Form, Input, Button, Card, message } from "antd";
import { Mail, MapPin, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ContactUs() {
  const navigate = useNavigate();

  const onFinish = () => {
    message.success("Message sent! ✅");
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-lg shadow-lg p-6 bg-white rounded-2xl">
        <h2 className="text-2xl font-semibold text-center mb-4">Contact Us</h2>
        <p className="text-center text-gray-600 mb-6">
          We'd love to hear from you! Fill out the form below.
        </p>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Enter a valid email" },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Message"
            name="message"
            rules={[{ required: true, message: "Please enter your message" }]}
          >
            <Input.TextArea placeholder="Enter your message" rows={4} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Send Message
            </Button>
          </Form.Item>
        </Form>

        <div className="text-center mt-6 text-gray-600 space-y-2">
          <p className="flex items-center justify-center gap-2">
            <MapPin size={18} /> 123 Beshara St, Cairo, Egypt
          </p>
          <p className="flex items-center justify-center gap-2">
            <Phone size={18} /> +20 123 456 7890
          </p>
          <p className="flex items-center justify-center gap-2">
            <Mail size={18} /> contact@besharagroup.com
          </p>
        </div>
      </Card>
    </div>
  );
}
