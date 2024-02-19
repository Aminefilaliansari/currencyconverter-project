import { Space, Select, Button } from "antd";
import { SwapOutlined, InfoCircleOutlined } from "@ant-design/icons";

export default function TabGraphic() {
  return (
    <div id="TabGraphic" className="p-7">
      <div className="flex justify-between gap-4">
        <Space className="inline-block flex-1">
          <div className="flex flex-col ">
            <label className="font-semibold">De</label>
            <Select
              defaultValue="USD"
              className="w-full h-12"
              showSearch
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
        <Space>
          <div className="flex flex-col">
            <label className=" pb-4" />
            <Button
              shape="circle"
              className="h-12"
              icon={<SwapOutlined />}
              style={{ width: 48 }}
            />
          </div>
        </Space>
        <Space className="inline-block flex-1">
          <div className="flex flex-col ">
            <label className="font-semibold">vers</label>
            <Select
              defaultValue="EURO"
              className="w-full h-12"
              showSearch
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
      </div>

      <div className="flex justify-between items-center mt-8">
        <p className="text-slate-500">
          Nous utilisons les taux du marché moyen 
          <InfoCircleOutlined className="mx-2" />
        </p>
        <Button
          className="h-12 bg-blue-600 px-6 font-semibold"
          type="primary"
          size="large"
          onClick={""}
        >
          Afficher le graphique
        </Button>
      </div>
    </div>
  );
}
