"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="h-16 flex items-center justify-between">

          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-2xl bg-cyan-400 flex items-center justify-center text-black font-bold">
              CS
            </div>

            <div>
              <h1 className="font-bold text-lg">
                CreditSea
              </h1>

              <p className="text-xs text-slate-400">
                Lending Platform
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-slate-300 hover:text-white transition-all"
            >
              Home
            </Link>

            <Link
              href="/login"
              className="text-slate-300 hover:text-white transition-all"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="
                h-10
                px-5
                rounded-xl
                bg-cyan-400
                text-black
                font-medium
                flex items-center
                hover:bg-cyan-300
                transition-all
              "
            >
              Get Started
            </Link>
          </nav>

          {/* MOBILE */}
          <button
            className="
              md:hidden
              w-10
              h-10
              rounded-xl
              bg-white/5
              border border-white/10
            "
          >
            ☰
          </button>

        </div>

      </div>
    </header>
  );
}