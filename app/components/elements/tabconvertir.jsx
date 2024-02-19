import { useState } from "react";
import { InputNumber, Space, Select, Button, Alert } from "antd";
import { SwapOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

export default function TabConvertir() {
  const [onConvert, setConvert] = useState();
  function handleClickConverter() {
    setConvert(1);
    console.log("Click ClickConverter");
  }

  return (
    <div id="convertir" className="p-7">
      <div className="flex justify-between gap-4">
        <Space className="inline-block flex-1">
          <div className="flex flex-col">
            <label className="font-semibold">Montant</label>
            <InputNumber
              className="w-full"
              size="large"
              defaultValue={"100"}
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
          <div className="flex flex-col">
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

      {onConvert && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 1 }}
        >
          <div id="onConvert" className="flex flex-col mt-8 text-neutral-500 ">
            <p className="font-semibold text-base ">
              100,00 Dollars des États-Unis =
            </p>
            <p className="font-semibold text-neutral-800 text-3xl my-3">
              92,81<span className="text-neutral-500 ">4759</span> Euros
            </p>
            <p>
              1 USD = 0,928176 EUR
              <br />1 EUR = 1,07742 USD
            </p>
          </div>
        </motion.div>
      )}

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
          onClick={handleClickConverter}
        >
          Convertir
        </Button>
      </div>
    </div>
  );
}
