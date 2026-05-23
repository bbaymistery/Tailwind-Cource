"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Define the sidebar tabs matching the Figma layouts
const tabs = [
  { name: "Profile", path: "/", icon: "👤" },
  { name: "Socials", path: "/socials", icon: "🌐" },
  { name: "Portfolio", path: "/portfolio", icon: "💼" },
  { name: "Resume", path: "/resume", icon: "📄" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full md:w-64 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-5 shadow-sm h-fit">
      <nav className="flex flex-col gap-1.5">
        {tabs.map((tab) => {
          // Check if this tab's path matches the current active pathname
          const isActive = pathname === tab.path;

          return (
            <Link
              key={tab.name}
              href={tab.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all text-left relative ${
                isActive
                  ? "bg-zinc-50 dark:bg-zinc-800/40 text-primary border-l-[3px] border-primary"
                  : "text-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-800/20"
              }`}
            >
              <span className="text-base">{tab.icon}</span>
              <span>{tab.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
