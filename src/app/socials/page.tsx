import React from "react";
import Sidebar from "@/components/Sidebar";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function SocialsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans text-zinc-900 dark:text-zinc-100 flex flex-col">
      
      {/* HEADER BAR */}
      <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">
              codedamn
            </span>
            <span className="text-zinc-300 dark:text-zinc-700">/</span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-mono">
              Form_Socials Screen
            </span>
          </div>
        </div>
      </header>

      {/* CORE WORKSPACE GRID */}
      <div className="max-w-7xl mx-auto px-4 py-8 w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: SHARED DYNAMIC SIDEBAR (3/12 width) */}
        <div className="lg:col-span-3">
          <Sidebar />
        </div>

        {/* RIGHT COLUMN: MAIN FORM WINDOW (9/12 width) */}
        <main className="lg:col-span-9 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col">
          
          {/* Header */}
          <div className="border-b border-zinc-100 dark:border-zinc-800 pb-4 mb-6">
            <h1 className="text-xl font-bold text-zinc-900 dark:text-white">Social Profiles</h1>
            <p className="text-xs text-zinc-400 mt-1">Add your social links to display them on your public developer profile.</p>
          </div>

          {/* Socials Fields Container */}
          <div className="space-y-5 flex-1 max-w-xl">
            
            <Input
              label="GitHub"
              placeholder="github.com/profile"
              iconPrefix={<span className="text-sm font-semibold">🐙</span>}
              defaultValue="github/profile.com"
            />

            <Input
              label="Linkedin"
              placeholder="LinkedIn profile URL"
              iconPrefix={<span className="text-sm font-semibold">💼</span>}
            />

            <Input
              label="Facebook"
              placeholder="Facebook profile URL"
              iconPrefix={<span className="text-sm font-semibold">👥</span>}
            />

            <Input
              label="Instagram"
              placeholder="Instagram profile URL"
              iconPrefix={<span className="text-sm font-semibold">📸</span>}
            />

            <Input
              label="Dribbble"
              placeholder="Dribbble profile URL"
              iconPrefix={<span className="text-sm font-semibold">🏀</span>}
            />

            <Input
              label="Behance"
              placeholder="Behance profile URL"
              iconPrefix={<span className="text-sm font-semibold">🎨</span>}
            />

          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-6 mt-8 border-t border-zinc-100 dark:border-zinc-800">
            <Button variant="secondary">Cancel</Button>
            <Button variant="primary">Save changes</Button>
          </div>

        </main>

      </div>

    </div>
  );
}
