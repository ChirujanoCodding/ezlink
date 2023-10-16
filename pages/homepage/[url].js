import { redirect } from "next/dist/server/api-utils";
import { NextResponse } from "next/server";

export default function Home() {
    NextResponse.redirect("https://google.com/")
}