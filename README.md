# Nummix – Vite + React tətbiqi

Nummix mühasibat, maliyyə, HR (əməkhaqqı və məzuniyyət), anbar və AI köməkçi modullarını birləşdirən çoxdilli (az/en/ru) web tətbiqidir. Layihə Vite + React, Tailwind CSS (DaisyUI), React Router və i18next üzərində qurulub.

## Texnoloji stack

- React 19, React Router 7
- Vite 7 (HMR, sürətli build)
- Tailwind CSS 4 + DaisyUI
- i18next + react-i18next (az/en/ru)
- Axios (API müraciətləri, withCredentials)
- Recharts, react-big-calendar, date-fns, xlsx
- ESLint (React Hooks, Refresh) və Tailwind pluginləri

## Tələblər

- Node.js 18+ (LTS tövsiyə olunur)
- npm 9+ və ya pnpm/yarn (repo `npm` skriptləri ilə hazırlanıb)

Default dev portu: 5173 (Vite).

## Qurulum və işə salma

1. Asılılıqları yükləyin
	 ```bash
	 npm install
	 ```
2. Mühit dəyişənlərini yaradın
	 - Kök qovluqda `.env` faylı yaradın və `VITE_API_URL` dəyərini əlavə edin (aşağıya baxın).
	 - Yaxud `.env.example` faylını kopyalayın:
		 ```bash
		 cp .env.example .env
		 ```
3. İnkişaf mühitini başladın
	 ```bash
	 npm run dev
	 ```
4. Production build
	 ```bash
	 npm run build
	 npm run preview
	 ```

## Skriptlər

- `npm run dev` – Development server (Vite, auto-open)
- `npm run build` – Production build (dist/)
- `npm run preview` – Yerli preview server
- `npm run lint` – ESLint yoxlaması

## Mühit dəyişənləri

Backend API ünvanını konfiqurasiya etmək üçün `.env` faylında aşağıdakı dəyişəni təyin edin:

```bash
VITE_API_URL=https://api.sizin-domeniniz.com
```

Kodda istifadə: `src/api/index.js`

```js
const baseURL = import.meta.env.VITE_API_URL
export const api = axios.create({ baseURL, withCredentials: true })
```

Diqqət: `withCredentials: true` cookie əsaslı auth üçün aktivdir. Backend CORS (`Access-Control-Allow-Credentials`) düzgün qurulmalıdır.

## Layihə quruluşu (qısa baxış)

```
NummixMain/
├─ public/locales/{az,en,ru}/(app.json, translation.json)
├─ src/
│  ├─ main.jsx                 # RouterProvider və i18n init
│  ├─ api/index.js             # Axios instance (VITE_API_URL)
│  ├─ utils/i18n/i18n.js       # i18next konfiqurasiyası
│  ├─ components/              # UI komponentləri (AI, HR, Anbar, və s.)
│  ├─ pages/                   # Səhifələr və bölmələr
│  └─ routes/index.jsx         # Router konfiqurasiyası
├─ tailwind.config.js          # Tailwind + DaisyUI
├─ vite.config.js              # Vite və pluginlər
├─ vercel.json                 # SPA yönləndirməsi üçün Vercel konfiq
└─ README.md
```

## Tərcümələr (i18n)

- Fayllar: `public/locales/<lng>/(app.json, translation.json)`
- Dəstəklənən dillər: `az`, `en`, `ru`
- Default namespace: `app` (fallback: `translation`)
- Dil dəyişimi komponenti: `src/components/LanguageSwitcher/`

İstifadə nümunəsi:

```jsx
import { useTranslation } from 'react-i18next'

const Example = () => {
	const { t } = useTranslation()
	return <h1>{t('pages.accounting.dashboard')}</h1>
}
```

Yeni dil əlavə etmək üçün:
1) `public/locales/<yeni-lng>/app.json` və `translation.json` yaradın
2) `src/utils/i18n/i18n.js` içində `supportedLngs` siyahısına `<yeni-lng>` əlavə edin

## UI və stil

- Tailwind CSS 4 + DaisyUI istifadə olunur
- Tailwind sinifləri `src/**/*.jsx` fayllarında aktivdir (`content` konfiqi)

## Deployment (Vercel)

Layihə SPA kimi Vercel-də host edilə bilər. `vercel.json` aşağıdakıları təmin edir:
- `dist/` çıxışı (build sonrası)
- Bütün route-lar üçün `index.html` fallback (SPA routing)
- Statik aktivlər üçün uzun müddətli keş başlıqları

Tez başlama:
1) Build: `npm run build`
2) Vercel layihəsi ilə qoşun və `dist/` qovluğunu yayın

## Töhfə (contributing)

1) Yeni branch yaradın (`feat/...`, `fix/...`)
2) Lint işlətdikdən sonra PR açın: `npm run lint`

---

© 2025 Nummix. Bu sənədi ehtiyaclarınıza görə yeniləyə bilərsiniz.

## Nummix nədir? (ERP baxışı)

Nummix şirkət proseslərini vahid platformada idarə edən ERP sistemidir. Modullar: Mühasibat, Maliyyə, HR/Payroll, Anbar/İnventar, Satış/Müştəri, Təchizat, hesabat və analitika, eləcə də AI köməkçi.

Bu repo yalnız frontend (SPA) qatıdır; backend API-lərinə `VITE_API_URL` vasitəsilə qoşulur. Sessiya üçün cookie-based auth gözlənilir (`withCredentials: true`).

## Arxitektura və modul xəritəsi

- UI: React 19 + React Router (SPA), Tailwind 4 + DaisyUI
- Lokalizasiya: i18next (az/en/ru), resurslar `public/locales`
- API: Axios instance (`src/api/index.js`) — bütün sorğular üçün baza URL və cookie-lər
- Yayımlama: Vercel (SPA yönləndirmələri `vercel.json` ilə)

Modulların UI izləri:
- `src/muhasibatcomp/*`: Baş kitab, balans, P&L, jurnal, hesabatlar
- `src/maliyye/*`: Kassa&Bank, büdcə, ödənişlər, analitika
- `src/emekhaqqicomp/*`: İşçilər, davamiyyət, məzuniyyət, payroll
- `src/anbarcompanents/*`: Məhsullar, inventar, hərəkətlər, hesabatlar
- `src/pages/salescustomers/*`: Satış və müştəri axınları
- `src/pages/supllier/*`: Təchizat prosesləri
- `src/components/AI/*`: AI köməkçi, xəbərdarlıqlar, risk analizi

Biznes axınları (konsept):
- Order-to-Cash (Satış): Order → Çatdırma → Invoys → Ödəniş → GL entries
- Procure-to-Pay (Satınalma): PO → Qəbul → Təchizatçı invoysu → Ödəniş → GL entries
- Record-to-Report (Mühasibat): Jurnallar → Period bağlanışı → Maliyyə hesabatları
- Hire-to-Retire (HR): İşə qəbul → Davamiyyət/Məzuniyyət → Payroll → Hesabatlar

## İnkişaf qaydaları və konvensiyalar

- Kod stili: ESLint aktivdir. Xüsusi qayda: `no-unused-vars` böyük hərflə başlayan sabitlər üçün istisna (`^[A-Z_]`).
- Fayl adları: komponentlər CamelCase (`MyComponent.jsx`), util və xidmətlər kebab/camel (`i18n.js`, `index.js`).
- İmportlar: nisbi yollar; paylaşılan util-lər `src/utils/` altında.
- Branch adları: `feat/<qısa-ad>`, `fix/<qısa-ad>`, `chore/<qısa-ad>`.
- Commitlər: Mümkün olduqda Conventional Commits formatı (feat:, fix:, refactor:, docs: və s.).

## Yeni səhifə/route necə əlavə edilir?

1) `src/pages/<modul>/<ad>/index.jsx` yaradın və UI-nizi yazın.
2) `src/routes/index.jsx` daxilində route-u əlavə edin (router konfiqinə uyğun).
3) Tərcümə açarlarını `public/locales/<lng>/app.json` və ya `translation.json`-a əlavə edin.
4) Sidebar/menu üçün uyğun komponentdə link əlavə edin (`src/components/sidebar/`, `src/pages/sidebar/`).

Sadə nümunə (komponent):
```jsx
export default function ReportsPage(){
	return <div className="p-4">Hesabatlar</div>
}
```

## i18n detalları

- Dəstəklənən dillər: `az`, `en`, `ru`. Default: `en`.
- Namespaces: `app` (default), `translation` (fallback).
- Yükləmə yolu: `/locales/{{lng}}/{{ns}}.json` (Vite `public/` kökündən xidmət edir).
- Dil aşkarlanması: localStorage → htmlTag → browser → path → subdomain.
- `i18n.js` `document.documentElement.lang` və `dir` atributlarını dildə uyğun saxlayır (RTL dillər əlavə edilərsə avtomatik RTL olacaq).

Tövsiyələr:
- Açar adlarını məna qruplarına görə verin: `pages.accounting.dashboard.title`
- Uzun mətnlər üçün `translation.json`, UI başlıqları üçün `app.json` uyğun ola bilər.

## Stil və theming

- Tailwind 4 istifadə olunur; siniflər `tailwind.config.js` `content` sahəsinə görə aktivdir.
- DaisyUI quraşdırılıb. Mövzu dəyişimi üçün `html`-də `data-theme` atributundan istifadə edin. `index.html` default `light` dir.
	- Nümunə: `document.documentElement.setAttribute('data-theme','dark')`
- Animasiya nümunələri `tailwind.config.js`-də `slide` olaraq mövcuddur.

## API istifadə qaydaları

Axios instansı: `src/api/index.js`
```js
import axios from 'axios'
const baseURL = import.meta.env.VITE_API_URL
export const api = axios.create({ baseURL, withCredentials: true })
```

İstifadə nümunəsi:
```js
import { api } from '@/src/api/index.js' // nisbi yolunuza uyğunlaşdırın

export async function fetchCustomers(){
	const { data } = await api.get('/customers')
	return data
}
```

Tövsiyə olunan yaxşı təcrübələr:
- Hata idarəsi üçün `try/catch` və UI bildirişləri (məs: toast/Notification komponenti) istifadə edin.
- Sessiya/cookie üçün backend-də CORS `Access-Control-Allow-Credentials: true` və dəqiq `Access-Control-Allow-Origin` tələb olunur.
- Paginasiya/filtrləmə üçün backend parametrlərini açıq saxlayın: `?page=1&pageSize=20&sort=-createdAt`.

## Təhlükəsizlik qeydləri

- Heç vaxt gizli açarları `.env`-də `VITE_` prefiksi ilə müştəriyə ötürməyin; yalnız public olan endpoint URL-ləri saxlayın.
- Cookie-lər üçün `SameSite`, `Secure` və `HttpOnly` düzgün qurulmalıdır (backend).
- XSS/HTML injection üçün React-in default escaping-dən kənara çıxmayın; `dangerouslySetInnerHTML`-dən qaçın.

## Vercel-ə yerləşdirmə – addım-addım

1) `npm run build` – `dist/` yaradılacaq.
2) Vercel layihəsi yaradın (New Project → Import from Git). Framework: Vite.
3) Project Settings → Environment Variables: `VITE_API_URL=https://api.prod.sizin-domeniniz.com`
4) Build & Output Settings: Build Command `npm run build`, Output `dist` (repo `vercel.json` ilə də uyğundur).
5) Routing: `vercel.json` SPA fallback qaydaları ilə `/index.html`-ə yönləndirir.
6) Deploy edin; lazım olsa, Custom Domain qoşun.

## Gələcək işlər (roadmap)

- Rol əsaslı icazə UI-si (RBAC) və menyu filtrasiya
- E-invoice/E-archive inteqrasiyaları
- Test dəsti (unit/e2e) və CI yoxlamaları (lint/build)

