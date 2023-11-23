// app/pages/testing/index.js
import React, { useState, useEffect } from "react";
import { Header, Footer } from "../../app/components";
import { useRouter } from "next/router";
import Image from "next/image";

export default function RegisterDetail() {
  const router = useRouter();
  const userName = router.query["id-register"];

  const content = () => {
    return (
      <section>
        <div
          className="flex flex-row"
          style={{ justifySelf: "center", marginLeft: 48, marginRight: 48, height: 700 }}
          data-aos="flip-up"
        >
          <div style={{ alignSelf: "center" }}>
            <div>
              <h1 className="text-3xl font-bold text-gray-700">
                {`Selamat, ${userName}`}
              </h1>
              <p
                className="text-md text-gray-700"
                style={{ marginTop: 16, width: "80%" }}
              >
                Pendaftaran Anda Berhasil, Admin Kami akan menghubungi anda
                untuk proses selanjutnya
              </p>
            </div>
          </div>
          <Image
            src={require("../../app/assets/svg/welcome.svg")}
            height={500}
            width={undefined}
            alt={"website-illustration"}
          />
        </div>
      </section>
    );
  };

  return (
    <div className="bg-white">
      <Header />
      {content()}
      <Footer />
    </div>
  );
}
