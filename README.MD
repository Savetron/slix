# AI Destekli Sunum Platformu (Slidev Tabanlı)

Bu proje, kullanıcıların bir konu başlığı girerek yapay zekâ yardımıyla otomatik olarak sunum oluşturabildiği bir platformdur. Uygulama, kullanıcıdan alınan konuya göre Gemini AI API aracılığıyla Slidev formatında slaytlar üretir ve bu slaytları **kullanıcının başka bir siteye gitmesine gerek kalmadan doğrudan kendi platformunda sunum olarak gösterir.** Slidev burada yalnızca bir altyapı motoru olarak kullanılır, kullanıcıya gösterilmez. Sunum deneyimi tamamen proje içinden sağlanır.

## Amaç

Kullanıcının tek yapması gereken bir başlık girmek. Geriye kalan tüm süreç otomatik işler:
1. Başlık alınır.
2. Gemini API üzerinden slayt içerikleri oluşturulur.
3. İçerik Slidev markdown formatında hazırlanır.
4. Markdown verisi doğrudan platform içinde canlı bir sunuma dönüştürülür.
5. Kullanıcı bu sunumu tıpkı bir PowerPoint gibi sayfa sayfa izleyebilir.

Bu projede kullanıcıların herhangi bir teknik bilgiye ihtiyaç duymadan hızlı ve etkileyici sunumlar oluşturabilmesi hedeflenmiştir.

## Kullanılan Teknolojiler

- Next.js (veya başka bir React tabanlı framework)
- Tailwind CSS
- Gemini API (AI içerik üretimi için)
- Slidev (sunum altyapısı olarak, içsel ve görünmeyen)
- Vite / Vue (Slidev sunum motoru için)
- fs / server-side rendering (markdown’dan HTML üretimi için)

## Örnek Sunum Formatı (AI ile Oluşturulan)
Yapay Zeka Nedir?

Yapay zeka, insan zekasını taklit eden algoritmalardır.

⸻

Tarihçesi

1950’lerde Alan Turing’in çalışmalarıyla başlayan bu alan…

⸻

Kullanım Alanları

Sağlık, ulaşım, eğitim gibi birçok alanda kullanılmaktadır.
Bu yapı doğrudan Slidev tarafından desteklenir ve sistemde arka planda player bileşeni ile canlı olarak görüntülenir.

## Nasıl Çalışır?

1. Kullanıcı başlığı girer.
2. Sunucu, Gemini API ile markdown içerik üretir.
3. Oluşturulan içerik sunum bileşenine gönderilir.
4. Slidev altyapısı ile bu markdown canlı sunum haline getirilir.
5. Kullanıcı başka bir yere gitmeden kendi tarayıcısında sunumu izleyebilir.

## Özellikler

- AI ile içerik üretimi
- Slidev markdown uyumu
- Platform içi slayt gösterici (gömülü Slidev player)
- İndirme veya dışa aktarım gerektirmez
- (İsteğe bağlı) `.md` olarak içerik indirilebilir

## Kurulum
npm install
npm run dev
.env.local içerisine Gemini API anahtarınızı eklemeyi unutmayın:
## Gelecek Geliştirmeler

- Tema seçme özelliği
- Slayt arası animasyon seçenekleri
- AI destekli slayt iyileştirme
- Kullanıcı hesabı ve sunum geçmişi
- PDF, PNG, PPTX dışa aktarma (sunucu tarafında slidev export)

## Lisans

MIT lisansı ile yayınlanmıştır. Slidev bağımsız bir açık kaynak projesidir. Bu platform, Slidev altyapısını entegre ederek içerikleri dönüştürmekte ve sunmaktadır. Kullanıcı, sunumları sadece bu platform üzerinden deneyimler.