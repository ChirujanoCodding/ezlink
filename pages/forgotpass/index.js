import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import "./index.css"

export default function ForgotPass() {

  const[mailInput, setMailInput] = useState("");

  const handleInputChange = (e) => {
    const inputURL = e.target.value;
    setMailInput(inputURL);
  };

  return (
    <div>
    <Head>
      <title>Forgot Password - EzLink</title>
      <link rel="shortcut icon" href="/LOGO.ico" />
    </Head>
      <div className="flex min-h-screen flex-col items-center justify-center bg-transparent">
        <div className="rounded-xl bg-gray-900 p-24 pb-12 pt-10 w-128 flex-col justify-center items-center">
          <h1 className="text-2xl font-bold text-center">Forgot password?</h1>
          <p className="text-sm text-center text-gray-500 mt-5">
            Reset password
          </p>

          {/* EMAIL */}
          <div className="flex justify-center items-center">
            <input
              className="mt-5 focus:border-3 focus:border-gray-300 focus:duration-300 bg-transparent border-solid border-2 border-gray-800 rounded-lg p-2 w-30
        focus:outline-none"
              type="text"
              value={mailInput}
              onChange={handleInputChange}
              placeholder="E-mail"
            ></input>
          </div>

          {/* SEND */}
          <div className="flex justify-center items-center mt-6">
            <button onClick={()=>{
              fetch('/api/sendMails',{
                method: 'POST',
                body: mailInput
              }).then((res) => res.json())
            }}

              className="rounded-lg duration-300 border-solid border-2 border-white p-2 px-8 hover:text-black hover:bg-gray-300
         hover:duration-300"
            >
              Send
            </button>
          </div>

          <div className="flex justify-center items-center mt-6">
            <Link href="/register">
              <p className="text-sm text-center text-gray-500 mt-5 w-max hover:cursor-pointer">
                Don't have an account? Sign up
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}