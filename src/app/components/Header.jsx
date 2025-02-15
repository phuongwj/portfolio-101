'use client';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

export default function Header({ currentTrack }) {
    const [isHover, setHover] = useState(false);

    return (
        <main className="w-5/6 h-screen flex flex-row gap-x-52">
            <main className="flex flex-col gap-y-2 justify-center text-white">
                <section className="flex flex-col font-bold text-5xl">
                    <h1>
                        nice to meet you,
                    </h1>
                    <h1 className="flex gap-x-3">
                        i'm 
                            <span className={(isHover 
                                        ? "text-white transition duration-500" 
                                        : "text-mainC transition duration-500")}> 
                                        phuong
                            </span>
                            <span>
                                - aka
                            </span>
                            <span className={
                            (isHover 
                                ? "ml-1.5 text-mainC cursor-help opacity-100 transition duration-500" 
                                : "ml-1.5 cursor-help transition duration-500")}
                                onMouseEnter={() => setHover(true)}
                                onMouseLeave={() => setHover(false)} > 
                                julia 
                            </span>
                    </h1>
                </section>
                <p className="mt-4 text-white/50 text-lg">
                    an aspiring & dedicated developer
                </p>
                <footer className="w-fit flex flex-wrap gap-2 mt-3">
                    <Link href='https://github.com/phuongwj' target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                            className="h-6.5 w-6.5 fill-secondaryC hover:fill-white hover:opacity-45 transition duration-500">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                    </Link>
                    <Link href='https://www.linkedin.com/in/phuongwj/' target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 32 448 448"
                            className="h-6.5 w-6.5 fill-secondaryC hover:fill-white hover:opacity-45 transition duration-500">
                            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                        </svg>
                    </Link>
                </footer>
            </main>
            <aside className="my-64 py-4 pl-4 pr-80 h-28 bg-black/30 rounded-2xl flex flex-col">
                {currentTrack ? (
                    <section>
                        <section className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                className="h-5 w-5 fill-white">
                                <path fillRule="evenodd" d="M19.952 1.651a.75.75 0 0 1 .298.599V16.303a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.403-4.909l2.311-.66a1.5 1.5 0 0 0 1.088-1.442V6.994l-9 2.572v9.737a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.402-4.909l2.31-.66a1.5 1.5 0 0 0 1.088-1.442V5.25a.75.75 0 0 1 .544-.721l10.5-3a.75.75 0 0 1 .658.122Z" clipRule="evenodd" />
                            </svg>
                            <h2 className="text-white text-lg font-semibold">Now Playing</h2>
                        </section>
                        <p className="text-white/50 mt-2"><strong className="text-white/80">Track:</strong> {currentTrack.name}</p>
                        <p className="text-white/50"><strong className="text-white/80">Artist:</strong> {currentTrack.artist}</p>
                    </section>
                ) : (
                    <section>
                        <section className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                className="h-5 w-5 fill-white">
                                <path fillRule="evenodd" d="M19.952 1.651a.75.75 0 0 1 .298.599V16.303a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.403-4.909l2.311-.66a1.5 1.5 0 0 0 1.088-1.442V6.994l-9 2.572v9.737a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.402-4.909l2.31-.66a1.5 1.5 0 0 0 1.088-1.442V5.25a.75.75 0 0 1 .544-.721l10.5-3a.75.75 0 0 1 .658.122Z" clipRule="evenodd" />
                            </svg>
                            <h2 className="text-white text-lg font-semibold">Now Playing</h2>
                        </section>
                        <p className="text-white/50 mt-2"><strong className="text-white/80">Track:</strong> nothing here</p>
                        <p className="text-white/50"><strong className="text-white/80">Artist:</strong> nothing here</p>
                    </section>
                )}
            </aside>
        </main>
    )
}
