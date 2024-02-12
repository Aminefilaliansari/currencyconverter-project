"use client";
import HomeConverter from "./pages/homeconverter";
import Header from "./layouts/header";
import Footer from "./layouts/footer";

export default function Home() {
  return (
    <>
      <Header />
      <HomeConverter />
      <Footer/>
    </>
  );
}
