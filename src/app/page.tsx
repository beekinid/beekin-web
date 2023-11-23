import Image from "next/image";
import HomePage from "./pages/home/page";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div style={{ position: "fixed", width: "100%", zIndex: 1000 }}>
        <Header />
      </div>
      <HomePage />
      <Footer />
    </div>
  );
}
