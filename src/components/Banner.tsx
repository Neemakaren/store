import type { FC } from "react";

const Banner = () => (
  <div className="container my-20 mx-auto h-80 px-4 md:flex font-lora dark:bg-slate-800">
    <img src="/4.webp" alt="banner" className="md:w-1/2 object-cover" />
    <div className="bg-[#e3edf6] dark:bg-slate-600 dark:text-white md:w-1/2 flex flex-col items-center text-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-1">Don't miss the offer</h1>
      <h2 className="text-3xl font-semibold mb-4">Grab it now</h2>
      <li
        // to="/product/4"
        className="inline-block bg-white dark:bg-slate-800 rounded-md px-6 py-3 hover:bg-blue-500 hover:text-white"
        data-test="banner-btn"
      >
        Shop Now
      </li>
    </div>
  </div>
);

export default Banner;
