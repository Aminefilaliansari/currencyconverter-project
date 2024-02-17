import { Tabs, Skeleton } from "antd";
import Convertir from "./elements/convertir";
import {
  DollarOutlined,
  LineChartOutlined,
  SendOutlined,
  BellOutlined,
} from "@ant-design/icons";

const items = [
  {
    key: "1",
    label: "Convertir",
    icon: <DollarOutlined />,
    children: <Convertir />,
  },
  {
    key: "2",
    label: "Envoyer",
    icon: <SendOutlined />,
    children: "Tab Envoyer",
  },
  {
    key: "3",
    label: "Graphique",
    icon: <LineChartOutlined />,
    children: "Tab Graphique",
  },
  {
    key: "4",
    label: "Alertes",
    icon: <BellOutlined />,
    children: "Tabs Alertes",
  },
];

export default function DemoTabs() {
  return (
    <>
      <Tabs
        id="DemoTabs"
        defaultActiveKey="1"
        items={items}
        type="card"
        size="middle"
        className="bg-white rounded-md drop-shadow-md "
      />
    </>
  );
}
