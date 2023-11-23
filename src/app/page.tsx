"use client";
import Image from "next/image";
import HomePage from "./pages/home/page";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import Link from "next/link";

export default function Home() {
  const [scrolling, setScrolling] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const threshold = 50; // Scroll distance before color change

      setScrolling(scrollTop > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div style={{ position: "fixed", width: "100%", zIndex: 1000 }}>
        <Header scrolling={scrolling} />
      </div>
      <HomePage />
      <Footer />
    </div>
  );
}
