'use client';
import React, { useEffect, useState } from 'react';
import Track from "@/app/components/Track";
import Link from 'next/link';

export default function Navbar() {

  const [count, setCount] = useState();

  useEffect(() => {
    async function fetchCount() {
      try {
        const response = await fetch('/api/counter');
        const responseObj = await response.json();

        const count = await responseObj.count;
        setCount(count);
      } catch (error) {
        console.error("Unable to fetch the visitor count", error);
        setCount(null);
      }
    }

    fetchCount();
  }, []);

  return (
    <>
      {/* The Top */}
      <header className="fixed w-full flex flex-row p-5 justify-between">

        {/* Music Widget */}
        <div>
            <Track/>
        </div>

        <p>The count is: {JSON.stringify(count)} </p>

        {/* Icons */}
        <div className="flex flex-row gap-2 ">
            <Link href="/" className="text-first">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26"
                    className="bg-widBg p-1 rounded-lg h-6.5 w-6.5 fill-first shadow-md hover:fill-first/70 hover:opacity-45 transition duration-500">
                    <path d="M 20 2.03125 C 19.449219 2.03125 19 2.480469 19 3.03125 L 19 7.8125 L 13.71875 2.53125 C 13.328125 2.140625 12.671875 2.140625 12.28125 2.53125 L 0.5625 14.28125 C 0.171875 14.671875 0.171875 15.296875 0.5625 15.6875 C 0.953125 16.078125 1.578125 16.078125 1.96875 15.6875 L 13 4.65625 L 24.0625 15.71875 C 24.257813 15.914063 24.523438 16.03125 24.78125 16.03125 C 25.039063 16.03125 25.273438 15.914063 25.46875 15.71875 C 25.859375 15.328125 25.859375 14.703125 25.46875 14.3125 L 22 10.84375 L 22 3.03125 C 22 2.480469 21.550781 2.03125 21 2.03125 Z M 13 6.5 L 2 17.5 L 2 23 C 2 24.65625 3.34375 26 5 26 L 21 26 C 22.65625 26 24 24.65625 24 23 L 24 17.5 Z M 11 16 L 15 16 C 15.550781 16 16 16.449219 16 17 L 16 23 C 16 23.550781 15.550781 24 15 24 L 11 24 C 10.449219 24 10 23.550781 10 23 L 10 17 C 10 16.449219 10.449219 16 11 16 Z"/>
                </svg>
            </Link>
            <Link href='https://github.com/phuongwj' target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                    className="bg-widBg p-1 rounded-lg h-6.5 w-6.5 fill-first shadow-md hover:fill-first/70 hover:opacity-45 transition duration-500">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
            </Link>
            <Link href='https://www.linkedin.com/in/phuongwj/' target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 32 448 448"
                    className="bg-widBg p-1 rounded-lg h-6.5 w-6.5 fill-first shadow-md hover:fill-first/70 hover:opacity-45 transition duration-500">
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                </svg>
            </Link>
        </div>

      </header>
    </>
  )
}
