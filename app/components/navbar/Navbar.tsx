import { InitLogo } from "@/app/Icons/InitLogo";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="fixed top-6 inset-x-0 z-50">
      <nav className="mx-auto max-w-6xl px-4">
        <div
          className="
            flex items-center justify-between
            w-full
            h-16 md:h-20
            p-1 md:px-3
            rounded-2xl
            bg-[#1f566d]/80
            backdrop-blur-xl
            shadow-[0_20px_40px_-12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.2)]
            border border-white/10
            ring-1 ring-white/5
          "
        >

          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center text-white rounded-2xl bg-[#8bbad8]/90 shadow-[0_4px_12px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.3)] border border-white/20">
              <InitLogo size="xl" />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-white/80">
            <Link href="#">Product</Link>
            <Link href="#">Resources</Link>
            <Link href="#">Case Studies</Link>
            <Link href="#">Company</Link>
          </div>

          <div
            className="
              hidden md:flex items-center gap-1
              h-16
              rounded-xl
              bg-[#1b4b5f]/60
              p-1
              shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]
              border border-white/5
            "
          >
            <Link
              href="/home"
              className="
                px-6
                h-full
                font-medium
                flex items-center justify-center
                text-white/80
                rounded-full
                transition-colors
              "
            >
              Login
            </Link>

            <Link
              href="/home"
              className="
                h-full
                px-6
                flex items-center justify-center
                font-medium
                rounded-xl
                bg-gradient-to-b from-[#8bbad8] to-[#7aa9c6]
                text-white
                shadow-[0_4px_14px_0_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.4)]
                hover:shadow-[0_6px_20px_rgba(0,0,0,0.23),inset_0_1px_0_rgba(255,255,255,0.5)]
                transition-all duration-200
                border-t border-white/20
              "
            >
              Sign Up
            </Link>
          </div>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
