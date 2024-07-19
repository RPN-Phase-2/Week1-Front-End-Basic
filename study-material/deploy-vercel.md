# Deploy Frontend Using Vercel

dalam setiap group project phase 2 , kalian sudah pasti dibutuhkan yang namanya `deployment` agar project kalian bisa masuk ke production. Disini gua akan ngajarin gimana caranya kita deploy frontend menggunakan vercel.

***Apa itu Vercel ?***

Vercel itu merupakan platform hosting gratis yang cukup familiar dan banyak digunakan oleh Front-End Developer. Vercel juga punya fitur fitur terbaru seperti CI/CD dan analytics didalamnya.

ini semua alasan kenapa kalian harus pakai vercel:

- **Performa Tinggi**: Vercel menggunakan jaringan CDN untuk mendistribusikan konten statis dengan cepat.
- **Kemudahan Penggunaan**: Vercel memiliki antarmuka yang indah, sederhana, dan intuitif, memudahkan penggunanya.
- **Fitur HTTPS Gratis dan Otomatis**: Vercel menyediakan HTTPS gratis setiap kali situs dideploy, yang juga membantu meningkatkan SEO.
- **Integrasi yang Baik dengan Platform Lain**: Vercel terintegrasi dengan banyak alat populer seperti Git dan GitHub, membuatnya mudah untuk mengelola proyek bersama tim Anda.
- **Dukungan untuk Banyak Bahasa Pemrograman dan Framework**: Vercel mendukung berbagai bahasa pemrograman dan framework, termasuk HTML, CSS, JavaScript, dan lainnya.
- **Skalabilitas**: Infrastruktur Vercel dirancang untuk menangani lalu lintas dalam jumlah besar, sehingga situs web Anda dapat diskalakan sesuai kebutuhan.

https://vercel.com/home

## Deploy Zexo Ice Cream
langsung aja gua bakal jelasin step by step untuk deploy project material week 1 `zexo ice cream` menggunakan vercel.

1. **Daftar account vercel**

hal yang pertama dilakukan adalah kalian wajib punya akun vercel. setelah registrasi kalian bisa masuk ke halaman dashboard vercel.

![image](https://github.com/user-attachments/assets/455c723e-3b5c-449f-b9f8-7eec6190da4b)

2. **Prepare Github Repo**

setelah itu kalian harus membuat github repo untuk project front end yang mau di deploy.
disini gua udh buat repo untuk zexo-icecream -> https://github.com/zexoverz/zexo-icecream

3. **Add new project vercel**

lanjut kita buat project baru di vercel , bisa klik button putih `Add new`.

![image](https://github.com/user-attachments/assets/208afbe2-e88b-48f8-8add-d09f3fd3b399)

4. **Import github repo to vercel project**

pilih github repo kalian untuk di import ke vercel project.
disini fitur integration nya vercel sangat berguna sekali buat newbie, jadi kita tidak perlu mengatur manual build. build dan minify project nya dilakukan oleh vercel build.

![image](https://github.com/user-attachments/assets/20fad0a7-2d57-4a4b-8d34-ebb36a1b801d)

5. **Configure Project**

disini kalian bisa configure builder sebelum di deploy, biasanya para front end bisa memilih branch mana yang mau di deploy atau directory mana yang perlu jadi root. 

karena case di zexo-icecream ini default 1 branch `master` saja jadi kita tidak perlu configurasi.
bisa langsung klik button deploy untuk memulai build project dan deploy to production

![image](https://github.com/user-attachments/assets/831189b5-8359-49c0-83b5-5abef46ce2fe)

6. **Production Ready**

setelah selesai menunggu deployment proses, kalian bisa langsung liat website yang sudah ready to production.

ini link hasil deployment zexo icecream -> https://zexo-icecream.vercel.app/

![image](https://github.com/user-attachments/assets/c6e7e0ad-7d38-47c2-be4c-e088927ef50c)


