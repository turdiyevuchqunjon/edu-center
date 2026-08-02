# EDUCenter — sayt

Next.js 14 (App Router) + TypeScript + Tailwind CSS asosida qurilgan, 6 sahifali o'quv markazi sayti.
Barcha sahifalar statik (prerendered) holda generatsiya qilinadi — juda tez yuklanadi.

## Sahifalar

| Sahifa | Manzil |
|---|---|
| Asosiy (EDUCenter haqida) | `/` |
| Ingliz tili | `/ingliz-tili` |
| Biologiya-Kimyo | `/biologiya-kimyo` |
| Matematika | `/matematika` |
| Tarix-Huquq | `/tarix-huquq` |
| Ona tili | `/ona-tili` |
| Rahmat (forma yuborilgach) | `/rahmat?course=...` |

Har bir sahifada ariza formasi bor. Forma yuborilganda:
1. Meta Pixel orqali brauzerda "Lead" hodisasi yuboriladi.
2. Server `/api/lead` orqali xuddi shu hodisani Meta Conversions API (CAPI) orqali ham yuboradi (dedublikatsiya uchun bir xil `event_id` ishlatiladi).
3. Lead ma'lumotlari (ism, telefon, qaysi sahifa/fandan kelgani, UTM teglar) Telegram botga yuboriladi.
4. Foydalanuvchi `/rahmat` sahifasiga yo'naltiriladi — u yerda qaysi kurs/forma orqali ariza qoldirgani ko'rsatiladi.

## O'rnatish

```bash
npm install
cp .env.example .env.local   # va qiymatlarni to'ldiring
npm run dev                  # http://localhost:3000
```

Production build:

```bash
npm run build
npm run start
```

## .env.local sozlamalari

`.env.example` faylida barcha kerakli o'zgaruvchilar ro'yxati bor:

- **NEXT_PUBLIC_SITE_URL** — saytning haqiqiy manzili (masalan `https://educenter.uz`).
- **NEXT_PUBLIC_META_PIXEL_ID** — Meta Events Manager > Data Sources > Pixel bo'limidan.
- **META_CAPI_ACCESS_TOKEN** — Events Manager > Settings > Conversions API > "Generate access token".
- **META_CAPI_TEST_EVENT_CODE** — test paytida Meta "Test Events" bo'limidan olinadigan kod (productionda bo'sh qoldiring).
- **TELEGRAM_BOT_TOKEN** — @BotFather orqali yaratilgan bot tokeni.
- **TELEGRAM_CHAT_ID** — standart guruh/chat ID (barcha leadlar shu yerga tushadi, agar sahifaga xos ID berilmagan bo'lsa).
- **TELEGRAM_CHAT_ID_INGLIZ, _BIOLOGIYA_KIMYO, _MATEMATIKA, _TARIX_HUQUQ, _ONA_TILI, _UMUMIY** — ixtiyoriy: har bir fan uchun alohida guruh/chat ID (masalan, har bir yo'nalish o'z Telegram guruhiga tushishi uchun). Bo'sh qoldirilsa, o'sha fan uchun ham `TELEGRAM_CHAT_ID` ishlatiladi.

Telegram chat ID ni topish uchun: botni guruhga qo'shing, guruhga bir xabar yozing, so'ng
`https://api.telegram.org/bot<TOKEN>/getUpdates` manzilini brauzerda oching — javobda `chat.id` ko'rinadi.

Bu o'zgaruvchilar to'ldirilmagan holatda ham sayt to'liq ishlaydi — shunchaki Telegram/Meta
yuborish bosqichi jimgina o'tkazib yuboriladi (xato bermaydi).

## UTM kuzatuvi

Har qanday sahifaga `?utm_source=...&utm_medium=...&utm_campaign=...` kabi parametrlar bilan
kirilsa, ular avtomatik saqlanadi (localStorage) va foydalanuvchi boshqa sahifalarga o'tsa ham
saqlanib qoladi. Forma yuborilganda shu UTM ma'lumotlari Telegram xabariga va Meta CAPI
hodisasiga qo'shib yuboriladi.

## Deploy (tavsiya: Vercel)

1. Loyihani GitHub'ga yuklang.
2. [vercel.com](https://vercel.com) da import qiling.
3. Environment Variables bo'limiga `.env.example` dagi barcha qiymatlarni kiriting.
4. Deploy qiling — Next.js App Router loyihalari Vercel'da qo'shimcha sozlamasiz ishlaydi.

## Kontent haqida eslatma

- Biologiya-Kimyo, Matematika, Tarix-Huquq, Ona tili sahifalaridagi matnlar namunaviy
  (placeholder) tarzda yozilgan — haqiqiy dastur tafsilotlari, narxlar va ustozlar haqida
  ma'lumot bilan almashtirish tavsiya etiladi.
- "O'quvchilar natijalari" bo'limidagi rasmlar o'rniga hozircha initsiallar (harflar)
  ko'rsatilgan — `components/ResultsGallery.tsx` faylida haqiqiy rasmlarga almashtirish mumkin.
- Telefon raqam va manzil (`components/Header.tsx`, `components/Footer.tsx`) namunaviy —
  haqiqiy ma'lumotlar bilan yangilang.
# edu-center
