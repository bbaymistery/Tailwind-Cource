/*
"build": "tailwindcss -i ./src/input.css -o ./dist/output.css --minify"

Nerede kullanılır? Projeniz bittiğinde, siteyi internette yayına alacağınız (production) zaman bir kere çalıştırılır (npm run build).
-i ./src/input.css: Girdi (Input) dosyası. Yazdığınız kodları bu dosyadan alır.
-o ./dist/output.css: Çıktı (Output) dosyası. Tailwind'in derlediği tüm sınıfları buraya yazar.
--minify: Profesyonel sitelerde en çok bu istenir. Kodların içindeki tüm boşlukları, enter (satır atlama) karakterlerini ve gereksiz yerleri silerek CSS dosyasının boyutunu inanılmaz derecede küçültür. Site çok daha hızlı yüklenir.

"watch": "tailwindcss -i ./src/input.css -o ./dist/output.css --watch"

Nerede kullanılır? Geliştirme (development) aşamasındayken kodu yazdığınız süre boyunca çalıştırılır (npm run watch).
--watch: Gözcü/İzleyici anlamına gelir. Siz terminalde bu komutu bir kez çalıştırdığınızda komut kapanmaz, arka planda izlemeye devam eder. input.css veya index.html dosyalarınızda bir harf bile değiştirip Ctrl+S (Kaydet) yaptığınız an saniyesinde CSS'i yeniden derler. Sayfayı yenilediğinizde anında yeni tasarımı görürsünüz.
*/
