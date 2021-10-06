import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black grid items-center justify-center">
      <article className="relative w-[600px] group">
        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-lg group-hover:-inset-1.5 transition-all ease-in-out"></div>
        <div className="bg-black relative rounded-md">
          <div className="p-6 text-white bg-gradient-to-r group-hover:via-yellow-600 group-hover:transition-all group-hover:duration-1000 ease-in-out from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent font-black text-3xl w-full">
            Hmmmmm....What are you waiting for ?
          </div>
        </div>
      </article>
    </div>
  );
}
