import React from "react";

export default function Home() {
  return (
    <>
      <footer className="bottom-0 left-0 z-20 w-full p-4 bg-magenta1000 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6">
        <span className="text-sm sm:text-center dark:text-white">
          © 2023{" "}
          <a href="" className="hover:underline">
            Beekin™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white sm:mt-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
