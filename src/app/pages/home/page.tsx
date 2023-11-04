"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faHammer,
  faCapsules,
} from "@fortawesome/free-solid-svg-icons";
// import banner1 from "../../assets/banner1.jpg";
// import banner2 from "../../assets/banner2.jpg";

export default function Home() {
  // const images = [
  //   banner1,
  //   banner2,
  //   "https://via.placeholder.com/800x400?text=Image3",
  // ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const tagline = [
    {
      title: "Website UMKM Cepat",
      description:
        "Buat situs web bisnis Anda dalam hitungan menit. Solusi terbaik untuk UMKM yang ingin berjualan online tanpa ribet.",
      icon: faArrowTrendUp,
    },
    {
      title: "Buat Bisnis Online",
      description:
        "Mulailah bisnis online Anda sekarang. Platform intuitif untuk menghadirkan toko online yang menakjubkan.",
      icon: faHammer,
    },
    {
      title: "Toko Online Mudah",
      description:
        "Peluncuran toko online yang sederhana. Dapatkan situs web UMKM yang menarik dengan sedikit usaha.",
      icon: faCapsules,
    },
  ];

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) =>
  //       prevIndex === images.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, 10000); // Change image every 3 seconds

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  // const nextImage = () => {
  //   setCurrentImageIndex((prevIndex) =>
  //     prevIndex === images.length - 1 ? 0 : prevIndex + 1
  //   );
  // };

  const tag = () => {
    return (
      <div className="bg-magenta1000">
        <div
          className="flex flex-row"
          style={{ justifySelf: "center", marginLeft: 32, marginRight: 32 }}
        >
          <div style={{ alignSelf: "center" }}>
            <div>
              <h1 className="text-3xl font-bold text-white">
                Solusi Website Mudah untuk UMKM
              </h1>
              <p
                className="text-md text-white"
                style={{ marginTop: 16, width: "80%" }}
              >
                Beekin.id adalah solusi yang memudahkan UMKM untuk hadir secara
                online. Buat situs web bisnis yang menarik dalam hitungan menit,
                dan raih pelanggan baru secara daring
              </p>
            </div>
          </div>
          <Image
            src={require("../../assets/svg/create.svg")}
            height={500}
            width={undefined}
            alt={"website-illustration"}
          />
        </div>
      </div>
    );
  };

  // const banner = () => {
  //   return (
  //     <div className="relative" style={{ width: "100%", height: "400px" }}>
  //       <Image
  //         src={images[currentImageIndex]}
  //         alt={`Image ${currentImageIndex + 1}`}
  //         layout="fill"
  //         objectFit="cover"
  //       />
  //       <button
  //         onClick={nextImage}
  //         className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-l-lg"
  //       >
  //         Next
  //       </button>
  //     </div>
  //   );
  // };

  const content = () => {
    return (
      <div>
        <div
          className="flex flex-row"
          style={{ marginLeft: 24, marginRight: 24 }}
        >
          <Image
            src={require("../../assets/svg/website-creator.svg")}
            height={500}
            width={undefined}
            alt={"website-illustration"}
          />
          <div style={{ alignSelf: "center" }}>
            <div>
              <h1 className="text-3xl font-bold text-gray-700 text-center">
                Buat Halaman Website mu dengan mudah
              </h1>
              <p className="text-xl font-bold text-gray-700 text-center">
                kamu dapat membuat websitemu dengan mudah dan terjangkau dengan
                Beekin.id
              </p>
            </div>
            <div
              className="py-20"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button className="bg-magenta800 hover:bg-magenta1000 text-white font-bold py-5 px-10 rounded">
                Mulai Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const taglineContent = () => {
    return (
      <div className="flex justify-center">
        {tagline.map((item, index) => (
          <div
            style={{
              margin: 16,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: 200,
            }}
            key={index}
          >
            <FontAwesomeIcon
              icon={item.icon}
              color="black"
              style={{ height: 100, width: 100 }}
              className="text-magenta400"
            />
            <div style={{ width: "80%" }}>
              <p className="text-xl font-bold text-gray-700 text-center">
                {item.title}
              </p>
              <p className="text-xs font-bold text-gray-600 text-center">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const pricing = () => {
    return (
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Pilih paket layanan yang sesuai dengan kebutuhan bisnis Kamu
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Explore berbagai paket layanan yang dapat kamu sesuaikan dengan
              kebutuhan branding dan bisnis kamu
            </p>
          </div>

          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">Starter</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Best option for personal use & for your next project.
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-md">Rp</span>
                <span className="mr-2 text-5xl font-extrabold">29.000</span>
                <span className="text-gray-500 dark:text-gray-400">/bulan</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Individual configuration</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>No setup, or hidden fees</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Team size:{" "}
                    <span className="font-semibold">1 developer</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Premium support:{" "}
                    <span className="font-semibold">6 months</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Free updates:{" "}
                    <span className="font-semibold">6 months</span>
                  </span>
                </li>
              </ul>
              <a
                href="#"
                className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
              >
                Get started
              </a>
            </div>

            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">Company</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Relevant for multiple users, extended & premium support.
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-md">Rp</span>
                <span className="mr-2 text-5xl font-extrabold">199.000</span>
                <span className="text-gray-500 dark:text-gray-400">/bulan</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Individual configuration</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>No setup, or hidden fees</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Team size:{" "}
                    <span className="font-semibold">10 developers</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Premium support:{" "}
                    <span className="font-semibold">24 months</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Free updates:{" "}
                    <span className="font-semibold">24 months</span>
                  </span>
                </li>
              </ul>
              <a
                href="#"
                className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
              >
                Get started
              </a>
            </div>

            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">Enterprise</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Best for large scale uses and extended redistribution rights.
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-md">Rp</span>
                <span className="mr-2 text-5xl font-extrabold">299.000</span>
                <span className="text-gray-500 dark:text-gray-400">/bulan</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Individual configuration</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>No setup, or hidden fees</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Team size:{" "}
                    <span className="font-semibold">100+ developers</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Premium support:{" "}
                    <span className="font-semibold">36 months</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Free updates:{" "}
                    <span className="font-semibold">36 months</span>
                  </span>
                </li>
              </ul>
              <a
                href="#"
                className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const chooseTemplate = () => {
    const template = "https://via.placeholder.com/200x200?text=Template";
    return (
      <div
        style={{
          marginLeft: 24,
          marginRight: 24,
          marginTop: 48,
          marginBottom: 48,
        }}
      >
        <div style={{ alignSelf: "center" }}>
          <div>
            <h1 className="text-3xl font-bold text-gray-700 text-center">
              Pilih Template dan mulai bangun cerita Brandingmu
            </h1>
            <p className="text-xl font-bold text-gray-700 text-center">
              Pilih template yang sesuai dengan kebutuhanmu dan mulai membangun
              cerita branding kamu
            </p>
          </div>
        </div>
        <div className="py-10 flex flex-row justify-between">
          <div className="bg-slate-400" style={{ height: 200, width: 350 }} />
          <div className="bg-slate-400" style={{ height: 200, width: 350 }} />
          <div className="bg-slate-400" style={{ height: 200, width: 350 }} />
        </div>
        <div className="py-10 flex flex-row justify-between">
          <div className="bg-slate-400" style={{ height: 200, width: 350 }} />
          <div className="bg-slate-400" style={{ height: 200, width: 350 }} />
          <div className="bg-slate-400" style={{ height: 200, width: 350 }} />
        </div>
      </div>
    );
  };

  const ready = () => {
    return (
      <div>
        <div
          className="flex flex-row"
          style={{ justifySelf: "center", marginLeft: 48, marginRight: 48 }}
        >
          <div style={{ alignSelf: "center" }}>
            <div>
              <h1 className="text-3xl font-bold text-gray-700">
                Ready! Website mu siap diakses
              </h1>
              <p
                className="text-md text-gray-700"
                style={{ marginTop: 16, width: "80%" }}
              >
                Websitemu siap diakses kapanpun dan dimanapun, share website mu
                di sosial media Instagram, Tiktok dan bio lainnya
              </p>
            </div>
          </div>
          <Image
            src={require("../../assets/svg/ready.svg")}
            height={500}
            width={undefined}
            alt={"website-illustration"}
          />
        </div>
      </div>
    );
  };

  const brands = () => {
    return (
      <div className="py-20" style={{marginLeft: 48, marginRight: 48}}>
        <p
          className="text-xl font-bold text-gray-700"
          style={{ marginTop: 16, width: "80%" }}
        >
          Berkembang bersama kami:
        </p>
        <div className="py-10 flex flex-row justify-between">
          <div className="bg-slate-400" style={{ height: 200, width: 200, borderRadius: 100 }} />
          <div className="bg-slate-400" style={{ height: 200, width: 200, borderRadius: 100 }} />
          <div className="bg-slate-400" style={{ height: 200, width: 200, borderRadius: 100 }} />
          <div className="bg-slate-400" style={{ height: 200, width: 200, borderRadius: 100 }} />
          <div className="bg-slate-400" style={{ height: 200, width: 200, borderRadius: 100 }} />
        </div>
      </div>
    );
  };

  const footer = () => {
    return <div></div>;
  };

  return (
    <div className="bg-white">
      {tag()}
      {/* {banner()} */}
      {content()}
      {pricing()}
      {taglineContent()}
      {chooseTemplate()}
      {ready()}
      {brands()}
      {footer()}
    </div>
  );
}
