"use client";
import React, { useState, useRef } from "react";
import NavBar from "@/components/NavBar";
import Characteristics from "@/components/Characteristics";
import Copyright from "@/components/Copyright";
import "./index.css";
import Head from "next/head";
import { useRouter } from "next/router";

function isValidURL(url) {
  const firstUrlPart =
    /^([a-z0-9_\-]{1,5})?(:\/\/)?(([a-z0-9_\-]{1,})(:([a-z0-9_\-]{1,}))?\@)?((www\.)|([a-z0-9_\-]{1,}\.)+)?([a-z0-9_\-]{2,})\.([a-z]{2,4})(\/([a-z0-9_\-]{1,}\/)+)?([a-z0-9_\-]{1,})?(\.[a-z]{2,})?(\?)?(((\&)?[a-z0-9_\-]{1,}(\=[a-z0-9_\-]{1,})?)+)?/gim;

  const secondUrlPart = /((http:\/\/)?www\.[\d\w]{1,}\.?.{1})$/gi;

  return firstUrlPart.test(url) && !secondUrlPart.test(url);
}


export default function HomePage() {
  const [url, setUrl] = useState("");
  const [shortURL, setShortURL] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [showUrl, setShowURL] = useState(false);

  const handleInputChange = (e) => {
    const inputURL = e.target.value;
    setUrl(inputURL);
    setIsValid(isValidURL(inputURL));
    if(!isValid) setShowURL(false)
  };

  return (
    <div>
    <Head>
      <title>Home - EzLink</title>
      <link rel="shortcut icon" href="/LOGO.ico" />
    </Head>
      <NavBar/>
      <main className="flex min-h-screen flex-col items-center justify-center px-56 bg-white text-black ">
        <div className="mb-36">

          {/* TITLE */}

          <div className="flex justify-center align-center mt-24">
            <h1 className="text-center text-8xl font-black text-blue-500 ">
              Ez
            </h1>
            <h1 className="text-center text-8xl font-black">Link</h1>
          </div>

          {/* //Input */}
          <form className="flex justify-center items-end" onSubmit= {async (e) => {
              e.preventDefault();
                 if(isValid) {
                  const data = await fetch('/api/generate', { method: 'POST', body: JSON.stringify({ url: url  }), headers: {"Content-type": "application/json"} });
                  const json = await data.json();

                  const { code } = json;

                  setShortURL(code);
                  setShowURL(true);
                 }
              }}>
            <input
              className="mt-10 border-solid border-2 border-gray-300 rounded-l-lg p-2 w-96
				focus:outline-none"
              type="text"
              placeholder="Enter Link URL"
              value={url}
              onChange={handleInputChange}
            />
            <button type="submit"
              className="duration-300 bg-gray-300 left-2.5 rounded-r-lg w-20 text-black
				hover:bg-gray-400 hover:duration-300"
            >
              <div className="duration-300 h-11 flex justify-center items-center relative left-0 hover:left-2 hover:duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <title>A</title>
                  <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
                </svg>
              </div>
            </button>
          </form>
          <span className={`text-blue-800 ${showUrl ? 'show' : 'hide'}`}>{shortURL && `https://ezlink-theta.vercel.app/api/${shortURL}`}</span>
          {/* //Invalid URL INDICATOR */}
          <div
            className={`${isValid ? "hide" : "show"} flex items-center mt-5`}
          >
            <div className="animate-pulse bg- -500 w-4 h-4 rounded-lg mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-white"
              >
                <title>papu</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <h5 className="text-red-500">Invalid URL</h5>
          </div>

          {/* //Valid URL INDICATOR */}
          <div
            className={`${isValid ? "show" : "hide"} flex items-center mt-5`}
          >
            <div className="animate-bounce bg-lime-500 w-4 h-4 rounded-lg mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-white"
              >
                <title>El papu</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <h5 className="text-lime-500">Valid URL</h5>
          </div>
        </div>

        <Characteristics/>
      </main>
      <Copyright/>
    </div>
  );
}
