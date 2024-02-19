import { SendOutlined, CaretDownFilled } from "@ant-design/icons";
import { Table, Button, Switch } from "antd";
import { useState } from "react";
import dynamic from "next/dynamic";
const DemoChart = dynamic(() => import("./DemoChart"), { ssr: false });

const columns = [
  {
    title: (
      <>
        Inverser : <Switch />
      </>
    ),
    dataIndex: "I",
  },
  {
    title: "Montant",
    dataIndex: "M",
    render: (text, record, index) => {
      if (index === 0) {
        return (
          <>
            {" "}
            {text}
            <div className="relative">
              <CaretDownFilled className=" text-purple-500 -bottom-8 text-2xl absolute" />{" "}
            </div>
          </>
        );
      }
      return text;
    },
  },
  {
    title: "Fluctuation (sur 24 h)",
    dataIndex: "F",
    align: "center",
    render: (text, record, index) => {
      if (index === 0) {
        return null;
      }
      return text;
    },
  },
  {
    title: "Graphique (sur 24 h)",
    dataIndex: "G",
    render: (text, record, index) => {
      if (index === 0) {
        return null;
      }
      return <DemoChart color={record.color} id={record.key} />;
    },
  },
  {
    title: "",
    dataIndex: "A",
    align: "center",
    render: (text, record, index) => {
      if (index === 0) {
        return null;
      }
      return text;
    },
  },
];

export default function DemoTable() {
  const [data, setData] = useState([
    {
      key: "1",
      I: "🇺🇸 USD - Dollar",
      M: "1",
      F: <span className="text-red-600">-0,0078 %</span>,
      G: <DemoChart color={"red"} />,
      A: (
        <Button className="bg-blue-400	text-gray-100" icon={<SendOutlined />}>
          Envoyer
        </Button>
      ),
    },
    {
      key: "2",
      I: "🇪🇺 EURO - Europe",
      M: "0,92818",
      F: <span className="text-emerald-600">+00099 %</span>,
      G: <DemoChart color={"green"} />,
      A: (
        <Button className="bg-blue-400	text-gray-100" icon={<SendOutlined />}>
          Envoyer
        </Button>
      ),
    },
    {
      key: "3",
      I: "🇲🇦 DH - Dirham",
      M: "10,064",
      F: <span className="text-emerald-600">+0,0066 %</span>,
      G: <DemoChart color={"green"} />,
      A: (
        <Button className="bg-blue-400	text-gray-100" icon={<SendOutlined />}>
          Envoyer
        </Button>
      ),
    },
  ]);

  const [selectedRowKey, setSelectedRowKey] = useState("1");

  const onRowClick = (record) => {
    setSelectedRowKey(record.key);
    moveRowToTop(record.key);
  };

  const moveRowToTop = (key) => {
    console.log("key:", key);
    const updatedData = data.filter((item) => item.key !== key);
    const selectedRow = data.find((item) => item.key === key);
    setData([selectedRow, ...updatedData]);
  };

  const rowClassName = (record) => {
    return record.key === selectedRowKey ? "selected-row" : "";
  };

  return (
    <div id="DemoTab" className=" my-28 w-full">
      <h2 className=" text-center font-semibold text-xl my-8 text-blue-900">
        Taux de change en direct
      </h2>
      <Table
        className="font-semibold"
        columns={columns}
        dataSource={data}
        size="large"
        pagination={{
          position: ["none"],
        }}
        onRow={(record) => ({
          onClick: () => onRowClick(record),
        })}
        rowClassName={rowClassName}
      />
    </div>
  );
}
