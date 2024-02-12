import { Tabs, InputNumber, Space, Select, Button } from "antd";
import { SwapOutlined } from "@ant-design/icons";

const items = [
  {
    key: "1",
    label: "Convertir",
    children: (
      <Space wrap>
        <Space className="inline-block">
          <div className="flex flex-col">
            <label>Montant</label>
            <InputNumber
              style={{ width: 300,
                height: 50}}
              size= "large"
              defaultValue={0}
              formatter={(value) =>
                `${value} $`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            />
          </div>
        </Space>

        <Space className="inline-block">
          <div className="flex flex-col">
            <label>De</label>
            <Select
              defaultValue="USD"
              style={{
                width: 300,
                height: 50,
              }}
              options={[
                {
                  value: "USD",
                  label: "🇺🇸 USD - Dollar",
                },
                {
                  value: "EURO",
                  label: "🇪🇺 EURO - Europe",
                },
                {
                  value: "DIRHAM",
                  label: "🇲🇦 DH - Dirham",
                },
              ]}
            />
          </div>
        </Space>

        <Button shape="circle" icon={<SwapOutlined />} />

        <Space className="inline-block">
          <div className="flex flex-col">
            <label>vers</label>
            <Select
              defaultValue="EURO"
              style={{
                width: 300,
                height: 50,
              }}
              options={[
                {
                  value: "USD",
                  label: "🇺🇸 USD - Dollar",
                },
                {
                  value: "EURO",
                  label: "🇪🇺 EURO - Europe",
                },
                {
                  value: "DIRHAM",
                  label: "🇲🇦 DH - Dirham",
                },
              ]}
            />
          </div>
        </Space>
      </Space>
    ),
  },
  {
    key: "2",
    label: "Envoyer",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "Graphique",
    children: "Content of Tab Pane 3",
  },
  {
    key: "4",
    label: "Alertes",
    children: "Content of Tab Pane 3",
  },
];

export default function DemoTabs() {
  return (
    <>
      <Tabs
        defaultActiveKey="1"
        items={items}
        className="bg-white p-5 rounded-md drop-shadow-md "
      />
    </>
  );
}
