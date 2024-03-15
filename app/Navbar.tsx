"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { status, data: session } = useSession();

  if (status === "loading") return null;

  return (
    <div className="flex bg-slate-200 p-5 space-x-3">
      <Link href={"/"} className="mr-5">
        Home
      </Link>
      <Link href={"/users"}>Users</Link>
      {status === "unauthenticated" ? (
        <Link href={"/api/auth/signin"}>Login</Link>
      ) : (
        <div className="flex space-x-4">
          <div>{session!.user!.name}</div>
          <Link href={"/api/auth/signout"}>Sign Out</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
