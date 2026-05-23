import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Home() {
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
              Tailwind v4 Active
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              How Routes Work
            </Link>
            <a
              href="#qa-guide"
              className="text-sm font-medium text-white bg-primary px-3 py-1.5 rounded-lg hover:bg-primary-hover transition-colors shadow-sm"
            >
              Q&A Guide
            </a>
          </div>
        </div>
      </header>

      {/* CORE WORKSPACE GRID */}
      <div className="max-w-7xl mx-auto px-4 py-8 w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: FIGMA INTERACTIVE MOCKUP (40% width on desktop) */}
        <aside className="lg:col-span-7 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm flex flex-col">
          
          <div className="border-b border-zinc-100 dark:border-zinc-800 pb-4 mb-6 flex justify-between items-center">
            <h2 className="font-bold text-lg flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              Figma Mockup (Live Preview)
            </h2>
            <span className="text-xs text-zinc-400 font-mono">Figma Screen #1</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-1">
            
            {/* FIGMA SUB-SIDEBAR (3/12 width) */}
            <div className="md:col-span-4 flex flex-col gap-1.5">
              <button className="flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 text-sm font-semibold border-l-[3px] border-primary text-primary transition-all text-left">
                👤 Profile
              </button>
              <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-800/20 text-sm font-medium transition-all text-left">
                🌐 Socials
              </button>
              <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-800/20 text-sm font-medium transition-all text-left">
                💼 Portfolio
              </button>
              <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-800/20 text-sm font-medium transition-all text-left">
                📄 Resume
              </button>
            </div>

            {/* FIGMA FORM CONTENT (8/12 width) */}
            <div className="md:col-span-8 flex flex-col gap-6">
              
              {/* Profile Image Section */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden relative border border-zinc-200 dark:border-zinc-700">
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-400 font-bold text-xl">MB</div>
                </div>
                <div className="flex gap-2.5">
                  {/* Demo of Button Component */}
                  <Button variant="primary">Upload new picture</Button>
                  <Button variant="secondary">Delete</Button>
                </div>
              </div>

              {/* Form Input Fields */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1.5">Display name</label>
                  <input
                    type="text"
                    defaultValue="Marina Budarina"
                    className="w-full px-3.5 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                  <p className="text-[11px] text-zinc-400 mt-1">Name entered above will be used for all issued certificates</p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1.5">About</label>
                  <textarea
                    rows={3}
                    defaultValue="Lorem ipsum dolor sit amet."
                    className="w-full px-3.5 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1.5">Profession</label>
                    <input
                      type="text"
                      defaultValue="Student"
                      className="w-full px-3.5 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-sm focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1.5">Gender</label>
                    <select className="w-full px-3.5 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-sm focus:outline-none">
                      <option>What is your gender</option>
                      <option>Female</option>
                      <option>Male</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Visibility Panel */}
              <div className="bg-zinc-50 dark:bg-zinc-800/20 border border-zinc-100 dark:border-zinc-800/80 rounded-2xl p-4 space-y-3.5">
                <h4 className="text-xs font-bold tracking-wide uppercase text-zinc-400">Section visibility</h4>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold">Followers and following</p>
                    <p className="text-[10px] text-zinc-400">Shows your followers and the users you follow</p>
                  </div>
                  <span className="w-9 h-5 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-end px-0.5 cursor-pointer">
                    <span className="w-4 h-4 rounded-full bg-primary" />
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold">XP</p>
                    <p className="text-[10px] text-zinc-400">Shows the XP you have earned</p>
                  </div>
                  <span className="w-9 h-5 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-end px-0.5 cursor-pointer">
                    <span className="w-4 h-4 rounded-full bg-primary" />
                  </span>
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex justify-end gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                {/* Secondary Button Class using custom utility class in globals.css */}
                <button className="btn-secondary">Cancel</button>
                {/* Primary Button Class using custom utility class in globals.css */}
                <button className="btn-primary">Save changes</button>
              </div>

            </div>

          </div>

        </aside>

        {/* RIGHT COLUMN: DEVELOPER HANDBOOK & QUESTIONS (50% width on desktop) */}
        <main id="qa-guide" className="lg:col-span-5 flex flex-col gap-6 overflow-y-auto">
          
          <div className="bg-gradient-to-br from-indigo-900 to-violet-950 rounded-3xl p-6 text-white border border-indigo-800 shadow-md">
            <h2 className="text-xl font-extrabold mb-2">🎓 Developer Handbook</h2>
            <p className="text-xs text-indigo-200 leading-relaxed">
              Uzun süre sonra Next.js & Tailwind CSS ile profesyonel bir Figma projesine başlarken aklınıza takılan tüm soruların cevapları aşağıdadır:
            </p>
          </div>

          {/* Q&A Accordion List */}
          <div className="space-y-4">
            
            {/* Q1 */}
            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-bold text-sm text-primary mb-2">1. components Klasörü Nerede Olmalı?</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Klasörünüz kesinlikle <code className="bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded text-[11px] font-mono">src/components/</code> içinde olmalıdır (Örn: <code className="text-zinc-600 dark:text-zinc-300 font-mono">src/components/ui/Button.tsx</code>). 
                <br /><br />
                Next.js App Router yapısında <code className="font-mono">src/app/</code> klasörü sadece **sayfa yönlendirmeleri (routing)** için rezerve edilmelidir. Arayüz bileşenlerini bağımsız bir <code className="font-mono">components/</code> klasöründe tutmak, kodunuzun temiz ve yeniden kullanılabilir olmasını sağlar.
              </p>
            </div>

            {/* Q2 */}
            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-bold text-sm text-primary mb-2">2. var(--font-geist-sans) Nereden Geliyor?</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Bu değişkenler **Next.js Font Optimizasyonundan (`next/font`)** gelir. 
                <br /><br />
                <code className="font-mono">src/app/layout.tsx</code> dosyasına bakarsanız, Geist fontunun Google'dan indirilip yüklendiğini ve <code className="font-mono">variable: "--font-geist-sans"</code> olarak tanımlandığını görebilirsiniz. HTML gövdesine bu sınıf atanır, ardından Tailwind v4 bunu <code className="font-mono">--font-sans</code> varsayılan fontu olarak eşleştirir.
              </p>
            </div>

            {/* Q3 */}
            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-bold text-sm text-primary mb-2">3. prefers-color-scheme: dark Kısmı Ne Demek?</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Bu bir **CSS Medya Sorgusudur (Media Query)**. Kullanıcının bilgisayarında veya tarayıcısında **Karanlık Mod (Dark Mode)** açık olup olmadığını algılar.
                <br /><br />
                Eğer kullanıcının işletim sisteminde dark mode aktifse, bu sorgu içindeki değişkenler tetiklenir ve arka plan rengi (<code className="font-mono">--background</code>) otomatik olarak siyaha döner. Javascript kullanmadan doğal karanlık mod sağlar!
              </p>
            </div>

            {/* Q4 */}
            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-bold text-sm text-primary mb-2">4. Primary Rengini (#4F46E5) Nasıl Eklerim & Kullanırım?</h3>
              <p className="text-xs text-zinc-500 leading-relaxed mb-3">
                Tailwind CSS v4'te özel temalarımızı doğrudan <code className="font-mono">globals.css</code> dosyasında <code className="font-mono">@theme</code> içine ekleriz:
              </p>
              <pre className="bg-zinc-950 text-emerald-400 p-3 rounded-lg text-[10px] font-mono mb-3 overflow-x-auto">
{`@theme {
  --color-primary: #4F46E5;
  --color-primary-hover: #4338CA;
}`}
              </pre>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Tanımladıktan sonra projenin her yerinde normal Tailwind sınıfları gibi kullanabilirsiniz:
                <br />
                • Arkaplan: <code className="text-zinc-600 dark:text-zinc-300 font-mono">bg-primary</code>
                <br />
                • Yazı rengi: <code className="text-zinc-600 dark:text-zinc-300 font-mono">text-primary</code>
                <br />
                • Hover durumu: <code className="text-zinc-600 dark:text-zinc-300 font-mono">hover:bg-primary-hover</code>
              </p>
            </div>

            {/* Q5 */}
            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-bold text-sm text-primary mb-2">5. Tailwind'de Hazır Sınıflı Bileşen Kullanabilir miyiz?</h3>
              <p className="text-xs text-zinc-500 leading-relaxed mb-3">
                Evet, bunun iki profesyonel yöntemi vardır:
              </p>
              <div className="space-y-3 text-xs text-zinc-500">
                <div>
                  <strong className="text-zinc-700 dark:text-zinc-300">Yöntem A: React Component (Önerilen)</strong>
                  <p className="text-[11px] mt-0.5">Sizin için <code className="font-mono">src/components/ui/Button.tsx</code> olarak hazırladığım buton gibi prop alabilen esnek yapılar.</p>
                </div>
                <div>
                  <strong className="text-zinc-700 dark:text-zinc-300">Yöntem B: CSS @utility (Yeni v4 Yöntemi)</strong>
                  <p className="text-[11px] mt-0.5"><code className="font-mono">globals.css</code> içine yazdığım CSS kuralları sayesinde doğrudan sınıf olarak çağırabilirsiniz:</p>
                  <pre className="bg-zinc-950 text-indigo-400 p-2.5 rounded-lg text-[10px] font-mono mt-1">
{`<button className="btn-primary">
  Save changes
</button>`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Q6 */}
            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <h3 className="font-bold text-sm text-primary mb-2">6. Figma'daki Diğer Renklere Nasıl İsim Verilmeli?</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Figma'daki renkleri isimlendirirken **semantik (anlamsal) isimlendirme** yapmak en profesyonel yaklaşımdır. Renklerin doğrudan isimlerini (indigo, grey vb.) vermek yerine rollerine göre isim vermelisiniz:
                <br /><br />
                • <strong className="text-zinc-700 dark:text-zinc-300">primary / brand:</strong> Ana butonlar, aktif sekmeler için indigo rengimiz.
                <br />
                • <strong className="text-zinc-700 dark:text-zinc-300">surface:</strong> Arka plan veya panel kartları için açık gri renkler (örneğin sidebar arka planı).
                <br />
                • <strong className="text-zinc-700 dark:text-zinc-300">border-custom:</strong> Girdilerin ve kutuların kenar çizgileri için gri renk.
                <br />
                • <strong className="text-zinc-700 dark:text-zinc-300">muted:</strong> Açıklama yazıları ve placeholder metinleri için soluk gri renk.
              </p>
            </div>

          </div>

        </main>

      </div>

    </div>
  );
}
