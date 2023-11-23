"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faHammer,
  faCapsules,
  faPhone,
  faHeadphones,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function Home() {
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

  useEffect(() => {
    // Check if window is defined to ensure code runs on the client side
    if (typeof window !== "undefined") {
      AOS.init({
        easing: "ease-out-cubic",
        once: true,
        offset: 50,
        delay: 50,
      });
    }
  }, []);

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
      <div className="bg-magenta100">
        <div
          className="flex flex-row"
          style={{ justifySelf: "center", marginLeft: 32, marginRight: 32 }}
          data-aos="fade-left"
        >
          <div style={{ alignSelf: "center" }}>
            <div>
              <h1 className="text-3xl font-bold text-gray-700">
                Solusi Website Mudah untuk UMKM
              </h1>
              <p
                className="text-md text-gray-700"
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
            style={{
              transform: "scaleX(-1)",
              marginTop: 58,
              marginBottom: 6,
            }}
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
      <section>
        <div style={{ height: 200 }} />
        <div
          // className="flex flex-row"
          style={{
            marginLeft: 24,
            marginRight: 24,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Image
            src={require("../../assets/svg/website-creator.svg")}
            height={500}
            width={undefined}
            alt={"website-illustration"}
            data-aos="zoom-in-left"
          /> */}
          <div style={{ alignSelf: "center" }} data-aos="zoom-in-right">
            <div>
              <h1 className="text-3xl font-bold text-gray-500 text-center">
                Buat Halaman Website mu dengan mudah
              </h1>
              <p className="text-xl font-bold text-gray-500 text-center">
                kamu dapat membuat websitemu dengan mudah dan terjangkau dengan
                Beekin.id
              </p>
            </div>
            {/* <div
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
            </div> */}
          </div>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              borderRadius: 20,
              padding:50,
              boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.1)",
              marginTop: 50,
              marginBottom: 50
            }}
          >
            {taglineContent()}
          </div>
        </div>
      </section>
    );
  };

  const taglineContent = () => {
    return (
      <section>
        <div className="flex justify-center">
          {tagline.map((item, index) => (
            <div
              style={{
                margin: 16,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                // height: 200,
                width: 300,
              }}
              key={index}
              data-aos="zoom-out-up"
            >
              <div
                className="align-center"
                style={{
                  width: 200,
                  height: 150,
                  borderRadius: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.1)",
                  marginBottom: 20,
                }}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  color="black"
                  style={{ height: 100, width: 100 }}
                  className="text-magenta400"
                />
              </div>
              <div style={{ width: "80%" }}>
                <p className="text-xl font-bold text-gray-700 text-center" style={{marginBottom: 20}}>
                  {item.title}
                </p>
                <p className="text-xs font-bold text-gray-600 text-center">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  const pricing = () => {
    return (
      <section className="bg-white dark:bg-gray-900" id="pricing">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-500 dark:text-white">
              Pilih paket layanan yang sesuai dengan kebutuhan bisnis Kamu
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Explore berbagai paket layanan yang dapat kamu sesuaikan dengan
              kebutuhan branding dan bisnis kamu
            </p>
          </div>

          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            <div
              data-aos="fade-right"
              className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
            >
              <h3 className="mb-4 text-2xl font-semibold">Basic</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Best option for personal use & for your next project.
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-md">Rp</span>
                <span className="mr-2 text-5xl font-extrabold">79.000</span>
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
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Menggunakan template web dari beekin.id</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Bebas custom warna dan huruf</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Menggunakan domain dari beekin.id (contoh:
                    beekin.id/brandkamu)
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
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Upload 50 produk</span>
                </li>
              </ul>
              <Link
                href="/register"
                as="/register"
                data-te-smooth-scroll-init
                className="mt-auto bg-magenta1000 hover:bg-magenta1000 text-white font-bold py-5 px-10 rounded"
              >
                Coba Sekarang
              </Link>
            </div>

            <div
              data-aos="fade-up"
              className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
            >
              <h3 className="mb-4 text-2xl font-semibold">Pro</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Relevant for multiple users, extended & premium support.
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-md">Rp</span>
                <span className="mr-2 text-5xl font-extrabold">99.000</span>
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
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Menggunakan template web dari beekin.id</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Bebas custom warna dan huruf</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Menggunakan Custom domain sesuai brand Kamu (contoh:
                    brandkamu.co.id)
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
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Remove Logo beekin.id</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Upload produk unlimited</span>
                </li>
              </ul>
              <Link
                href="/register"
                as="/register"
                data-te-smooth-scroll-init
                className="mt-auto bg-magenta1000 hover:bg-magenta1000 text-white font-bold py-5 px-10 rounded"
              >
                Coba Sekarang
              </Link>
            </div>

            <div
              data-aos="fade-left"
              className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
            >
              <h3 className="mb-4 text-2xl font-semibold">Advance</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Best for large scale uses and extended redistribution rights.
              </p>
              <div className="flex justify-center items-baseline my-8">
                <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Custom sesuai dengan kebutuhan bisnis Kamu</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/register"
                as="/register"
                data-te-smooth-scroll-init
                className="mt-auto bg-magenta1000 hover:bg-magenta1000 text-white font-bold py-5 px-10 rounded"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const chooseTemplate = () => {
    const template = "https://via.placeholder.com/200x200?text=Template";
    return (
      <section id="templates">
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
              <h1 className="text-3xl font-bold text-gray-500 text-center">
                Pilih Template dan mulai bangun cerita Brandingmu
              </h1>
              <p className="text-xl font-bold text-gray-500 text-center">
                Pilih template yang sesuai dengan kebutuhanmu dan mulai
                membangun cerita branding kamu
              </p>
            </div>
          </div>
          <div className="py-10 flex flex-row justify-between">
            <div
              className="bg-slate-400"
              style={{ height: 200, width: 350 }}
              data-aos="fade-up"
              data-aos-duration="1000"
            />
            <div
              className="bg-slate-400"
              style={{ height: 200, width: 350 }}
              data-aos="fade-up"
              data-aos-duration="2000"
            />
            <div
              className="bg-slate-400"
              style={{ height: 200, width: 350 }}
              data-aos="fade-up"
              data-aos-duration="3000"
            />
          </div>
          <div className="py-10 flex flex-row justify-between">
            <div
              className="bg-slate-400"
              style={{ height: 200, width: 350 }}
              data-aos="fade-up"
              data-aos-duration="1000"
            />
            <div
              className="bg-slate-400"
              style={{ height: 200, width: 350 }}
              data-aos="fade-up"
              data-aos-duration="2000"
            />
            <div
              className="bg-slate-400"
              style={{ height: 200, width: 350 }}
              data-aos="fade-up"
              data-aos-duration="3000"
            />
          </div>
        </div>
      </section>
    );
  };

  const ready = () => {
    return (
      <section>
        <div
          className="flex flex-row"
          style={{ justifySelf: "center", marginLeft: 48, marginRight: 48 }}
          data-aos="flip-up"
        >
          <div style={{ alignSelf: "center" }}>
            <div>
              <h1 className="text-3xl font-bold text-gray-500">
                Ready! Website mu siap diakses
              </h1>
              <p
                className="text-md text-gray-500"
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
      </section>
    );
  };

  const brands = () => {
    return (
      <section>
        <div className="py-20" style={{ marginLeft: 48, marginRight: 48 }}>
          <p
            className="text-xl font-bold text-gray-500"
            style={{ marginTop: 16, width: "80%" }}
          >
            Berkembang bersama kami:
          </p>
          <div className="py-10 flex flex-row justify-between">
            <div
              className="bg-slate-400"
              style={{ height: 200, width: 200, borderRadius: 100 }}
              data-aos="flip-up"
              data-aos-duration="500"
            />
            <div
              className="bg-slate-400"
              style={{ height: 200, width: 200, borderRadius: 100 }}
              data-aos="flip-up"
              data-aos-duration="1000"
            />
            <div
              className="bg-slate-400"
              style={{ height: 200, width: 200, borderRadius: 100 }}
              data-aos="flip-up"
              data-aos-duration="1500"
            />
            <div
              className="bg-slate-400"
              style={{ height: 200, width: 200, borderRadius: 100 }}
              data-aos="flip-up"
              data-aos-duration="2000"
            />
            <div
              className="bg-slate-400"
              style={{ height: 200, width: 200, borderRadius: 100 }}
              data-aos="flip-up"
              data-aos-duration="2500"
            />
          </div>
        </div>
      </section>
    );
  };

  const faq = () => {
    return (
      <section className="bg-white dark:bg-gray-900" id="faq">
        <div
          className="py-8 px-4 mx-auto sm:py-16 lg:px-6"
          style={{ marginRight: 16, marginLeft: 16 }}
        >
          <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-500 dark:text-white">
            Pertanyaan Umum
          </h2>
          <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
            <div>
              <div className="mb-10" data-aos="zoom-in-up">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-500 dark:text-white">
                  Apa itu Beekin.id?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Beekin.id adalah platform yang membantu UMKM untuk membuat
                  website, sehingga dapat menciptakan branding yang lebih baik
                  dan lebih menarik untuk meningkatkan penjualan. Bangun cerita
                  branding produk kamu melalui website yuk!
                </p>
              </div>
              <div className="mb-10" data-aos="zoom-in-up">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-500 dark:text-white">
                  Bagaimana Cara Membuat website di Beekin.id?
                </h3>
                <div className="text-gray-500 dark:text-gray-400">
                  <p>Kamu dapat mendaftar dengan cara berikut:</p>
                  <ul className="list-disc pl-4">
                    <li>Klik Daftar pada halaman website Beekin.id</li>
                    <li>
                      Pilih paket sesuai dengan kebutuhan kamu dan brand kamu
                    </li>
                    <li>
                      Isi data-data yang diperlukan, isi No HP yang aktif dan
                      terhubung dengan Whatsapp ya
                    </li>
                    <li>
                      Setelah selesai proses mendaftar, tunggu admin kami akan
                      menghubungi kamu melalui WhatsApp untuk konfirmasi
                    </li>
                    <li>Lakukan pembayaran sesuai instruksi dari admin</li>
                    <li>
                      Tunggu 1-3 hari, website brand kamu sudah siap diakses :)
                    </li>
                    <li>
                      Kamu akan mendapatkan akun admin untuk mengupload content
                      di website kamu
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-10" data-aos="zoom-in-up">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-500 dark:text-white">
                  Apakah Beekin.id bisa membuatkan website custom sesuai dengan
                  kebutuhan saya?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Ya tentu saja bisa, kamu dapat mendaftar dan memilih paket
                  layanan Advance, diskusikan kebutuhan anda dan kami akan
                  siapkan penawarannya kepada anda
                </p>
              </div>
              <div className="mb-10" data-aos="zoom-in-up">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-500 dark:text-white">
                  Siapa saja yang dapat membuat website di Beekin.id?
                </h3>
                <div className="text-gray-500 dark:text-gray-400">
                  <p className="text-gray-500 dark:text-gray-400">
                    Pada dasarnya, siapapun bisa membuat website melalui
                    Beekin.id, kamu tinggal menyesuaikan kebutuhan dengan
                    paket-paket layanan yang sudah kami sediakan.
                  </p>
                  <ul className="list-disc pl-4">
                    <li>
                      Pemilik UMKM atau brand bisa membuat website melalui
                      Beekin.id
                    </li>
                    <li>
                      Individu bisa membuat Portofolio website melalui Beekin.id
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const callCs = () => {
    const handleButtonClick = () => {
      const phoneNumber = "085962819048";
      const message = "Halo, saya tertarik dengan layanan Anda";
      const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.location.href = whatsappLink;
    };

    return (
      <button
        className="mb-20 fixed bottom-4 right-4 bg-magenta400 hover:bg-magenta800 text-white p-3 rounded-full shadow-md focus:outline-none"
        onClick={handleButtonClick}
      >
        <FontAwesomeIcon
          icon={faHeadphones}
          color="black"
          style={{ height: 30, width: 30 }}
          className="text-white"
        />
      </button>
    );
  };

  return (
    <div className="bg-white">
      {tag()}
      <div
        style={{
          backgroundColor: "white",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          marginTop: -30,
        }}
      >
        <div>
          {content()}
          {pricing()}
          {/* {taglineContent()} */}
          {chooseTemplate()}
          {ready()}
          {faq()}
          {brands()}
        </div>
      </div>
      {callCs()}
    </div>
  );
}
