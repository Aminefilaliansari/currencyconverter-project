import React, { useState } from "react";
import { Card, InputNumber, Space, Select, Button } from "antd";
import { SwapOutlined } from "@ant-design/icons";

const tabListNoTitle = [
  {
    key: "convertir",
    label: "Convertir",
  },
  {
    key: "envoyer",
    label: "Envoyer",
  },
  {
    key: "graphiques",
    label: "Graphiques",
  },
  {
    key: "alertes",
    label: "Alertes",
  },
];
const contentListNoTitle = {
  convertir: (
    <Space wrap>
      <Space className="inline-block">
        <div className="flex flex-col">
          <label>Montant</label>
          <InputNumber
            style={{
              width: 300,
              height: 50,
            }}
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

  envoyer: <p>content envoyer</p>,
  graphiques: <p>content graphiques</p>,
  alertes: <p>content alertes</p>,
};

export default function DemoCartTab() {
  const [activeTabKey2, setActiveTabKey2] = useState("convertir");
  const onTab2Change = (key) => {
    setActiveTabKey2(key);
  };

  return (
    <Card
      className="my-12 h-full drop-shadow-lg"
      tabList={tabListNoTitle}
      activeTabKey={activeTabKey2}
      onTabChange={onTab2Change}
      tabProps={{
        size: "middle",
      }}
    >
      {contentListNoTitle[activeTabKey2]}
    </Card>
  );
}
