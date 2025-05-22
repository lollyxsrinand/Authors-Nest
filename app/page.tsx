import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black">
      <h1 className="text-white text-4xl font-bold">Authors Nest</h1>
      <div className="flex gap-2  justify-center">
        <a className="p-2 bg-white text-black rounded-lg" href="/login">
          Login
        </a>
        <a className="p-2 bg-white text-black rounded-lg" href="/signup">
          signup
        </a>
      </div>
    </div>
  );
}
