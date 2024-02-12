import DemoChart from "./demochart";
import { SendOutlined } from "@ant-design/icons";
import { Table, Button } from "antd";

const columns = [
  {
    title: "",
    dataIndex: "I",
  },
  {
    title: "Montant",
    dataIndex: "M",
  },
  {
    title: "Fluctuation (sur 24 h)",
    dataIndex: "F",
  },
  {
    title: "Graphique (sur 24 h)",
    dataIndex: "G",
  },
  {
    title: "",
    dataIndex: "A",
  },
];
const data = [
  {
    key: "1",
    I: "🇺🇸 USD - Dollar",
    M: "1,2632",
    F: <span className="text-red-600">-0,89%</span>,
    G: <DemoChart color={"red"} />,
    A: (
      <Button className="bg-blue-600	text-gray-100" icon={<SendOutlined />}>
        Envoyer
      </Button>
    ),
  },
  {
    key: "2",
    I: "🇪🇺 EURO - Europe",
    M: "1,2632",
    F: <span className="text-emerald-600">+0,89%</span>,
    G: <DemoChart color={"green"} />,
    A: (
      <Button className="bg-blue-600	text-gray-100" icon={<SendOutlined />}>
        Envoyer
      </Button>
    ),
  },
  {
    key: "3",
    I: "🇲🇦 DH - Dirham",
    M: "1,2632",
    F: <span className="text-emerald-600">+0,89%</span>,
    G: <DemoChart color={"green"} />,
    A: (
      <Button className="bg-blue-600	text-gray-100" icon={<SendOutlined />}>
        Envoyer
      </Button>
    ),
  },
];

export default function DemoTable() {
  return (
    <div id="DemoTab" className="my-12 w-full">
      <Table
        columns={columns}
        dataSource={data}
        size="large"
        pagination={{
          position: ["none", "none"],
        }}
      />
    </div>
  );
}
