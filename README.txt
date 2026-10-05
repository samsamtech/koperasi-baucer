KOPERASI BAUCER - VERCEL V2

Struktur:
index.html
logo.svg
package.json
vercel.json
api/index.js

PENTING:
Deploy melalui GitHub -> Vercel Import Project.
Jangan guna Vercel Drop/Upload untuk versi ini kerana folder api/ perlu dideploy sebagai Vercel Function.

LANGKAH:
1. Extract ZIP.
2. Buat repository GitHub baharu, contoh: koperasi-baucer.
3. Upload SEMUA fail dan folder api/ ke repository. Pastikan api/index.js wujud di root repository.
4. Di Vercel: Add New -> Project -> Import repository GitHub.
5. Framework Preset: Other (atau biarkan auto-detect).
6. Build Command: kosongkan.
7. Output Directory: kosongkan.
8. Install Command: npm install (atau biarkan default).
9. Deploy.
10. Selepas deploy, buka https://DOMAIN-VERCEL-KAU/api . Jika backend berjaya, ia akan memulangkan respons daripada Google Apps Script.

Backend Google Apps Script dikekalkan:
https://script.google.com/macros/s/AKfycbzzFW8f0-Ag6LsLed4sSh9eirOCrfmETg9Ytlj_g9KNXB978Kb_pYapdU4gUxQESBy_YA/exec
