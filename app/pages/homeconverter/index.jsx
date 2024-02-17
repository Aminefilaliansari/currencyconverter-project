import DemoTable from "@/app/components/demotable";
import DemoCartTab from "@/app/components/democarttab";
import DemoTabs from "@/app/components/demotabs";

const HomeConverter = () => {
  return (
    <>
      <div className="h-96 w-full absolute bg-gradient-to-r from-sky-500 to-indigo-500 -z-10" />
      <main className="flex flex-col items-center p-12">
        <div className="container">
          <div id="Title" className="my-12 text-slate-100 text-center">
            <h1 className="text-3xl font-semibold">
              Currency Converter Project
            </h1>
            <p className="text-slate-100">In developement by Dev Amine </p>
          </div>
          <DemoTabs />
          <DemoTable />
        </div>
      </main>
    </>
  );
};

export default HomeConverter;
