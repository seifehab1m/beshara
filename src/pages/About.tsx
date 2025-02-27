import { Card, Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
      <Card className="max-w-3xl w-full shadow-lg p-6 rounded-2xl bg-white">
        <Title level={2} className="text-center text-primary">
          About Beshara Group
        </Title>
        <Paragraph className="text-gray-700 text-lg">
          Founded in Kuwait in 1995, Beshara Group is a leading technology solutions provider specializing in business software, enterprise portals, and application management. With a paid-up capital of $7 million USD, the company has grown internationally, helping businesses implement cutting-edge technologies for digital transformation.
        </Paragraph>

        <Title level={3} className="mt-4 text-primary">Our Services</Title>
        <ul className="list-disc pl-5 text-gray-700 text-lg">
          <li>Enterprise Portals & Custom Development</li>
          <li>Application Management & Integration</li>
          <li>Business Process Automation</li>
          <li>Data Analytics & Cloud Solutions</li>
        </ul>

        <Title level={3} className="mt-4 text-primary">Why Choose Us?</Title>
        <Paragraph className="text-gray-700 text-lg">
          Beshara Group is committed to delivering innovative and scalable solutions tailored to the needs of modern enterprises. With a strong presence in the Middle East and beyond, we strive to enhance operational efficiency and digital excellence.
        </Paragraph>
      </Card>
    </div>
  );
}
