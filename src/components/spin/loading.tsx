import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
export const Loading: React.FC<{}> = ({}) => {
  return (
    <div className="flex justify-center items-center h-full">
      <Spin style={{ padding: 100, width: "100%" }} indicator={antIcon} />{" "}
    </div>
  )
}