"use client";
import { auth } from "@/lib/firebase/client";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";

interface AuthForm {
  AuthType: "Login" | "Signup";
}

export const AuthForm = ({ AuthType }: AuthForm) => {
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // ugly code that works
    try {
      const user = await (AuthType === "Login"
        ? signInWithEmailAndPassword(auth, email, password)
        : createUserWithEmailAndPassword(auth, email, password));

      if (AuthType === "Signup") {
        const res = await fetch("http://localhost:4000/create-user", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${user.user.uid}`,
          },
        });
      }

      const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ uid: user.user.uid }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) router.push("/home");
    } catch (error) {
      console.log(error);
    }
  };

  // TODO: make styling responsive & use variables
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="h-[320px] w-[240px] p-[10px] flex flex-col items-center justify-center gap-[10px] text-center"
        >
          <h1 className="text-[24px] font-bold p-[5px] w-full">{AuthType}</h1>
          <div className="flex flex-col gap-[10px] items-center jusitfy-center w-full">
            <input
              className="p-[10px] bg-[#e5e5ea] focus: border-none rounded-[4px] w-full"
              placeholder="email"
              type="email"
              name="email"
            />
            <input
              className="p-[10px] bg-[#e5e5ea] rounded-[4px] w-full"
              placeholder="password"
              type="password"
              name="password"
            />
          </div>
          <div className="bg-[#242628] w-full p-[10px] rounded-[4px] text-white">
            {AuthType}
          </div>
          <div>
            or{" "}
            <button type="submit">
              <a
                className="font-bold"
                href={AuthType === "Login" ? "/signup" : "/login"}
              >
                {AuthType === "Login" ? "signup" : "login"}
              </a>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
