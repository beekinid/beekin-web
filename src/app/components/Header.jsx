import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const logo = require("../assets/beekin-logo.png");
  return (
    <div className={inter.className}>
      <header>
        <nav
          className="bg-white border-gray-200"
          style={{ backgroundColor: "#790252" }}
        >
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href={'/'} className="flex items-center">
              <Image
                src={require("../assets/svg/beekin-logo.svg")}
                height={50}
                width={undefined}
                alt={"beekin-logo"}
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Beekin
              </span>
            </Link>
            <div className="flex md:order-2">
              <Link
                href="/#pricing"
                scroll={false}
                // type="button"
                className="text-white bg-magenta400 hover:bg-magenta800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-magenta400 dark:hover:bg-magenta800 dark:focus:ring-blue-800"
              >
                Get started
              </Link>
              <button
                data-collapse-toggle="navbar-cta"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-cta"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-cta"
            >
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                <li>
                  <Link
                    href="/#templates"
                    className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 md:hover:text-magenta800 md:dark:hover:text-magenta800 "
                    // aria-current="page"
                  >
                    Templates
                  </Link>
                </li>
                <li>
                  <a
                    href="/#pricing"
                    className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:hover:text-magenta800 md:dark:hover:text-magenta800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="/#faq"
                    className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:hover:text-magenta800 md:dark:hover:text-magenta800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
