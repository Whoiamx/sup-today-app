"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Header() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <header className="h-16 flex items-center justify-between p-4 relative">
      <div className="absolute left-0 right-0 flex justify-center pointer-events-none">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 transform transition duration-300 ease-in-out hover:scale-105 hover:text-orange-600 mt-12 mb-6">
          What's up today?
        </h1>
      </div>

      <div className="flex items-center space-x-4 ml-auto">
        {session ? (
          <>
            <Image
              src={session?.user?.image}
              alt="User Image"
              width={200}
              height={200}
              className="w-8 h-8 rounded-full"
            />
            <span className="font-semibold">
              Bienvenido, {session?.user?.name}!
            </span>
            <button
              onClick={() => signOut()}
              className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700 cursor-pointer"
            >
              Log Out
            </button>
          </>
        ) : (
          <button
            onClick={() => signIn()}
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 cursor-pointer"
          >
            Log In
          </button>
        )}
      </div>
    </header>
  );
}
