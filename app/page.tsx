import Navbar from "./components/navbar/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[url('/bg.webp')] bg-cover bg-center overflow-hidden relative">
      <Navbar />

      <section className="relative pt-32 pb-20 px-4 flex flex-col items-center justify-center text-center max-w-5xl mx-auto z-10 min-h-[90vh]">

        <div
          className="
            mb-8 inline-flex items-center gap-2 px-4 py-2
            rounded-2xl
            bg-white/20 backdrop-blur-md
            border border-white/30
            shadow-[0_4px_12px_rgba(0,0,0,0.05)]
          "
        >
          <span className="text-sm font-medium text-[#1f566d]/80">
            Now supporting all public & private repos
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-[#0f2d3a] mb-6 drop-shadow-sm">
          AI that explains any <br className="hidden md:block" />
          GitHub repo in minutes.
        </h1>

        <p className="text-xl md:text-2xl text-[#335c6e] max-w-4xl mb-10 leading-relaxed">
          Kodin uses AI to analyze GitHub repositories and <span className="font-semibold text-[#71b4d7]">generate clear, step-by-step tutorials so you can understand, contribute, and ship faster.</span>
        </p>

        <Link
          href="/home"
          className="
            group relative
            inline-flex items-center justify-center
            px-8 py-4
            text-lg font-semibold text-white
            rounded-2xl
            bg-gradient-to-b from-[#8bbad8] to-[#7aa9c6]
            shadow-[0_10px_20px_-5px_rgba(139,186,216,0.5),inset_0_1px_0_rgba(255,255,255,0.4)]
            border-t border-white/20
            hover:shadow-[0_15px_30px_-5px_rgba(139,186,216,0.6),inset_0_1px_0_rgba(255,255,255,0.6)]
            transition-all duration-300
          "
        >
          Getting Started
        </Link>

      </section>
    </main>
  );
}
