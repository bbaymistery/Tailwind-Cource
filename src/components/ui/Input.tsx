import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  error?: string;
  // Optional prefix (like a social media icon or website text) to render inside the input on the left
  iconPrefix?: React.ReactNode;
}

export default function Input({
  label,
  description,
  error,
  iconPrefix,
  className = "",
  id,
  ...props
}: InputProps) {
  // Generate a unique ID if one is not provided, helping with SEO and browser focus accessibility
  const inputId = id || `input-${label?.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className="flex flex-col w-full">
      {/* 1. Label Section */}
      {label && (
        <label
          htmlFor={inputId}
          className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1.5 cursor-pointer select-none"
        >
          {label}
        </label>
      )}

      {/* 2. Input Wrapper (handles prefix alignment and borders) */}
      <div
        className={`relative flex items-center w-full rounded-lg border bg-white dark:bg-zinc-950 transition-all duration-200 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary ${
          error
            ? "border-red-500 focus-within:border-red-500 focus-within:ring-red-500"
            : "border-zinc-200 dark:border-zinc-800"
        }`}
      >
        {/* Left Prefix Icon/Content */}
        {iconPrefix && (
          <div className="pl-3.5 pr-2 flex items-center justify-center text-zinc-400 dark:text-zinc-500 pointer-events-none select-none">
            {iconPrefix}
          </div>
        )}

        {/* Actual Input Element */}
        <input
          id={inputId}
          className={`w-full bg-transparent px-3.5 py-2 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none ${
            iconPrefix ? "pl-0" : ""
          } ${className}`}
          {...props}
        />
      </div>

      {/* 3. Description / Helper Text */}
      {description && !error && (
        <p className="text-[11px] text-zinc-400 dark:text-zinc-500 mt-1 select-none">
          {description}
        </p>
      )}

      {/* 4. Error Message */}
      {error && (
        <p className="text-[11px] text-red-500 font-semibold mt-1 select-none">
          {error}
        </p>
      )}
    </div>
  );
}
