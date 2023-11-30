import Link from "next/link";
import { useState } from "react";

export default function index(props){



  return (
    <>
      <h1>Hello world!!!</h1>
      <Link href="/next">
        next
      </Link>

      <Link href="/movie">
        movie
      </Link>
    </>
  );
}