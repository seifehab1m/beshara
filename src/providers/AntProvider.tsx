import { ConfigProvider } from "antd";

export default function AntProvider({ children }: React.PropsWithChildren) {
  return <ConfigProvider>{children}</ConfigProvider>;
}
