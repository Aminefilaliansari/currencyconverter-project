import { Tabs, Skeleton } from "antd";
import TabConvertir from "./elements/tabconvertir";
import TabGraphic from "./elements/tabgraphic";
import {
  DollarOutlined,
  LineChartOutlined,
  SendOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";

const items = [
  {
    key: "1",
    label: "Convertir",
    icon: <DollarOutlined />,
    children: (
      <motion.div
        initial={{ opacity: 0, height: 100 }}
        whileInView={{ opacity: 1, height: "auto" }}
        transition={{ duration: 0.7 }}
      >
        <TabConvertir />
      </motion.div>
    ),
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
    children: (
      <motion.div
        initial={{ opacity: 0, height: 100 }}
        whileInView={{ opacity: 1, height: "auto" }}
        transition={{ duration: 0.7 }}
      >
        <TabGraphic />
      </motion.div>
    ),
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
        className="bg-white rounded-md drop-shadow-md"
      />
    </>
  );
}
