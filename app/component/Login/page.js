"use client";
import React, { useState } from "react";
import { UserCheck, Mail, LockKeyholeIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
const Login_page = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const handle_Submit = async (e) => {
  e.preventDefault();

  if (!name || !email || !password) {
    setError("All fields are required.");
    return;
  }

  try {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res.error) {
      setError("Invalid user details");
      return;
    }

    router.replace("/");
  } catch (error) {
    console.log(error);
    setError("Something went wrong.");
  }
};


  return (
    <div className="h-[80vh] flex flex-col items-center justify-center">
      <div className="border-2 rounded-2xl dark:border-white border-black flex flex-col items-center space-y-4 w-fit p-4">
        <h1 className="md:text-2xl text-xl">Login</h1>

        {error && <p className="text-red-500 text-center">{`* ${error}`}</p>}

        <form
          className="flex flex-col items-center space-y-6"
          onSubmit={handle_Submit}
        >
          <span className="flex items-center justify-between p-2 border-2 border-black dark:border-white rounded-2xl">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="outline-none"
            />
            <UserCheck width={40} />
          </span>

          <span className="flex items-center justify-between p-2 border-2 border-black dark:border-white rounded-2xl">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none"
            />
            <Mail width={40} />
          </span>

          <span className="flex items-center justify-between p-2 border-2 border-black dark:border-white rounded-2xl">
            <input
              type="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="outline-none"
            />
            <LockKeyholeIcon width={40} />
          </span>

          <Button type="submit">Login</Button>
        </form>

        <p className="text-center">
          {"Don't"} have an account? <br />
          <Link href="/component/Register">
            <b className="hover:underline text-blue-500 cursor-pointer">
              Register here!
            </b>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login_page;
