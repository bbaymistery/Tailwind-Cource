import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background Decorative Gradients */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />

      {/* Main Glassmorphic Container */}
      <main className="relative z-10 w-full max-w-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl transition-all duration-300 hover:border-zinc-700/60">
        
        {/* Next.js + Tailwind logo branding */}
        <div className="flex items-center gap-3 mb-8">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={90}
            height={18}
            priority
          />
          <span className="text-zinc-600 font-mono">|</span>
          <span className="text-sm font-semibold tracking-wider text-cyan-400 uppercase font-mono">Tailwind v4</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent mb-6">
          Figma to Next.js Conversion
        </h1>

        {/* Description */}
        <p className="text-lg text-zinc-400 leading-relaxed mb-8">
          Welcome to your new developer environment! We are ready to convert the Figma design into a pixel-perfect, highly responsive Next.js web application.
        </p>

        {/* Features list */}
        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 text-xs font-bold mt-1">✓</span>
            <div>
              <h3 className="font-semibold text-white">State-of-the-Art Routing</h3>
              <p className="text-sm text-zinc-400">App Router structure using React Server Components for exceptional performance.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 text-xs font-bold mt-1">✓</span>
            <div>
              <h3 className="font-semibold text-white">Tailwind CSS v4 Integration</h3>
              <p className="text-sm text-zinc-400">Fast styling using the latest compiler with lightning-quick CSS utility generation.</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/about"
            className="flex-1 inline-flex justify-center items-center h-12 rounded-xl bg-violet-600 text-white font-semibold transition-all hover:bg-violet-500 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-violet-600/25"
          >
            Visit About Page →
          </Link>
          <a
            href="https://www.figma.com/file/TXLwYa51OaUfXRjO5AQvL0/Codedamn-Frontend-Assessment"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex justify-center items-center h-12 rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-300 font-semibold transition-all hover:bg-zinc-800/50 hover:border-zinc-700 active:scale-[0.98]"
          >
            View Figma Design
          </a>
        </div>

      </main>

      {/* Footer */}
      <footer className="mt-8 text-xs text-zinc-600 font-mono">
        Tailwind CSS Course • 3-figma-to-nextjs-tailwind
      </footer>
    </div>
  );
}
