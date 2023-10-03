import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  const {push} = useRouter()
  useEffect(()=>{
    push("/homepage");
  },[])

  return <Component {...pageProps} />;
}
