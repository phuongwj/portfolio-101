'use client';
import React, { useState } from 'react';
import projs from "@/local-json/projects";
import Link from 'next/link';

export default function page() {
  return (
    <div className="bg-newBg">
        <main className="py-32 min-h-screen w-full max-w-xl mx-auto flex flex-col items-center gap-12">
            <section className="w-full flex flex-col gap-4">
                <h1 className="text-first text-lg font-medium underline underline-offset-4">projects</h1>
                <section className="w-full flex flex-col gap-4">
                    <p className="text-second">i know it's bad for not showing all the projects in grids layout at once. but please bare with me, they will be added soon, please stay tune :)</p>
                </section>
            </section>
        </main>
    </div>
  )
}
