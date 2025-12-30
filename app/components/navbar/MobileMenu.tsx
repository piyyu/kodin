"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="
          flex items-center justify-center
          w-14 h-14
          rounded-2xl
          bg-[#1b4b5f]/60
          backdrop-blur-md
          border border-white/10
          text-white
          shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]
          hover:bg-white/10
          transition-colors
        "
        aria-label="Toggle menu"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        )}
      </button>

      {open && (
        <div
          className="
            absolute inset-x-4 top-20
            rounded-3xl
            bg-[#1f566d]/95 backdrop-blur-2xl
            border border-white/10 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.5)]
            flex flex-col gap-2 p-4
            z-50
          "
        >
          <div className="flex flex-col gap-1">
            {[
              { name: "Product", href: "#" },
              { name: "Resources", href: "#" },
              { name: "Case Studies", href: "#" },
              { name: "Company", href: "#" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="
                   px-4 py-3
                   rounded-xl
                   text-white/90 font-medium
                   hover:bg-white/5
                   transition-colors
                 "
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="h-px bg-white/10 my-2" />

          <div className="flex flex-col gap-3 px-2 pb-2">
            <Link
              href="/login"
              className="
                w-full py-3
                text-center text-white/90 font-medium
                rounded-xl
                hover:bg-white/5
                transition-colors
              "
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/book"
              className="
                w-full py-3
                flex items-center justify-center
                font-medium
                rounded-xl
                bg-gradient-to-b from-[#8bbad8] to-[#7aa9c6]
                text-white
                shadow-[0_4px_14px_0_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.4)]
                border-t border-white/20
              "
              onClick={() => setOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
