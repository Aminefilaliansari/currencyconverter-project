import { InputNumber, Space, Select, Button, Alert } from "antd";
import { SwapOutlined } from "@ant-design/icons";

export default function Convertir() {
  return (
    <div id="convertir" className="p-7">
      <div className="flex justify-between gap-4">
        <Space className="inline-block flex-1">
          <div className="flex flex-col">
            <label className="font-semibold">Montant</label>
            <InputNumber
              className="w-full"
              size="large"
              defaultValue={0}
              formatter={(value) =>
                `${value} $`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            />
          </div>
        </Space>
        <Space className="inline-block flex-1">
          <div className="flex flex-col ">
            <label className="font-semibold">De</label>
            <Select
              defaultValue="USD"
              className="w-full h-12"
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
          <div className="flex flex-col">
            <label className="font-semibold">vers</label>
            <Select
              defaultValue="EURO"
              className="w-full h-12"
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
        <Alert
          className="text-xs w-8/12 p-2 opacity-80 border-0 bg-sky-100 items-center"
          description="Nous utilisons le taux de marché moyen pour notre convertisseur. Le taux est donné à titre d'information seulement. Vous ne bénéficierez pas de ce taux lors d'un envoi d'argent. Vérifiez les taux d'envoi."
          type="info"
          showIcon
        />
        <Button
          className="h-12 bg-blue-600 px-6 font-semibold"
          type="primary"
          size="large"
        >
          Convertir
        </Button>
      </div>
    </div>
  );
}
