import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background Decorative Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />

      {/* Main Glassmorphic Container */}
      <main className="relative z-10 w-full max-w-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl transition-all duration-300 hover:border-zinc-700/60">

        {/* Badge */}
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-6">
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
          Next.js App Router Active
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent mb-6">
          About Our Project
        </h1>

        {/* Description */}
        <p className="text-lg text-zinc-400 leading-relaxed mb-8">
          This is an example of an <strong className="text-zinc-200">About Page</strong> routed dynamically at <code className="text-violet-400 bg-zinc-800/40 px-2 py-0.5 rounded text-sm font-mono">localhost:3000/about</code>.
          In the modern Next.js App Router, routing is folder-based, meaning any folder inside <code className="text-zinc-300 font-mono">src/app/</code> containing a <code className="text-zinc-300 font-mono">page.tsx</code> automatically defines that path.
        </p>



        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="p-5 rounded-2xl bg-zinc-800/30 border border-zinc-800 hover:border-zinc-700/40 transition-all duration-200">
            <h3 className="font-semibold text-white mb-2">📂 Folder Structure</h3>
            <p className="text-sm text-zinc-500 font-mono">src/app/about/page.tsx</p>
          </div>
          <div className="p-5 rounded-2xl bg-zinc-800/30 border border-zinc-800 hover:border-zinc-700/40 transition-all duration-200">
            <h3 className="font-semibold text-white mb-2">🎨 Styling Engine</h3>
            <p className="text-sm text-zinc-500 font-mono">Tailwind CSS v4 (Pure Import)</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="flex-1 inline-flex justify-center items-center h-12 rounded-xl bg-zinc-100 text-zinc-950 font-semibold transition-all hover:bg-white hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-white/5"
          >
            ← Back to Home
          </Link>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex justify-center items-center h-12 rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-300 font-semibold transition-all hover:bg-zinc-800/50 hover:border-zinc-700 active:scale-[0.98]"
          >
            Read Next.js Docs
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
