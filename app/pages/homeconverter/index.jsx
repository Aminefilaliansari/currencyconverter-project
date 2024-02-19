import DemoTable from "@/app/components/demotable";
import DemoTabs from "@/app/components/demotabs";
import { Button } from "antd";
import { motion } from "framer-motion";

const HomeConverter = () => {
  return (
    <>
      <div className="h-96 w-full absolute bg-gradient-to-r from-sky-500 to-indigo-500 -z-10" />
      <main className="flex flex-col items-center p-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "linear" }}
          >
            <div id="Title" className="my-12 text-slate-100 text-center">
              <h1 className="text-3xl font-semibold">
                Currency Converter Project
              </h1>
              <p className="text-slate-100">In developement by Dev Amine </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <DemoTabs />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1}}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <DemoTable />
          </motion.div>
        </div>
      </main>
      <motion.section
       initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{ duration: 1, ease: "easeIn" }}
            >
        <div className="w-full flex flex-col items-center gap-6 bg-gradient-to-r from-indigo-500 to-purple-500 p-14 text-center text-slate-50 mb-6">
          <h2 className="font-semibold text-xl">API Currency Data</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button
            className="h-12 bg-slate-50 text-indigo-500 px-12 font-semibold"
            type="primary"
            size="large"
          >
            En savoir plus
          </Button>
        </div>
      </motion.section>
    </>
  );
};

export default HomeConverter;
