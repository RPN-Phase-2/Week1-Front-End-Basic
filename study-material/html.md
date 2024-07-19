# HTML: Hypertext Markup Language

HTML, atau Hypertext Markup Language, adalah bahasa markup yang digunakan untuk membuat struktur dan mengatur konten pada halaman web. HTML memungkinkan pembuat situs web untuk mendefinisikan elemen-elemen seperti teks, gambar, tautan, tabel, formulir, dan lainnya, serta menentukan bagaimana elemen-elemen tersebut harus ditampilkan di dalam browser web.

## Bagaimana HTML Bekerja

HTML bekerja dengan menggunakan serangkaian tag atau elemen yang ditempatkan dalam dokumen HTML. Setiap tag memiliki fungsi khusus dan menggambarkan elemen-elemen yang berbeda. Misalnya, tag `<h1>` digunakan untuk membuat judul level 1 (heading 1), tag `<p>` digunakan untuk menandai paragraf, dan tag `<a>` digunakan untuk membuat tautan (link) ke halaman web lain.

## Contoh Sederhana Dokumen HTML

```html
<!DOCTYPE html>
<html>
<head>
    <title>Contoh HTML</title>
</head>
<body>
    <h1>Selamat Datang di Halaman Web Saya</h1>
    <p>Ini adalah paragraf teks contoh.</p>
    <a href="https://www.contoh.com">Kunjungi Contoh.com</a>
</body>
</html>
```

## Kenali tag, elemen, dan atribut
Tag, elemen, dan atribut adalah konsep dasar dalam HTML yang membentuk struktur dan konten halaman web. Mari kita lihat masing-masing dari mereka:

1. **Tag**:
   - Tag adalah bagian dasar dalam HTML yang digunakan untuk mengelilingi elemen-elemen pada halaman web. Mereka biasanya terdiri dari tanda kurung sudut (angle brackets), contoh: `<tag>`. Tag HTML selalu dibuka dengan `<` dan ditutup dengan `>`. Ada tag pembuka dan tag penutup untuk sebagian besar elemen, misalnya `<p>` untuk tag pembuka paragraf dan `</p>` untuk tag penutup. Beberapa tag, seperti `<img>` atau `<br>`, tidak memiliki tag penutup dan biasanya ditutup dengan `/`, misalnya `<img src="gambar.jpg" />`.

2. **Elemen**:
   - Elemen adalah gabungan dari tag pembuka, isi, dan tag penutup (jika diperlukan) yang membentuk unit fungsional dalam dokumen HTML. Misalnya, elemen paragraf dalam HTML akan terlihat seperti ini:
     ```html
     <p>Ini adalah sebuah paragraf.</p>
     ```
   - Elemen juga dapat memiliki elemen bersarang, yang berarti elemen lain yang diletakkan di dalam elemen lainnya. Ini membentuk hirarki elemen dalam dokumen HTML.

3. **Atribut**:
   - Atribut adalah informasi tambahan yang ditempatkan dalam tag HTML untuk memberikan detail atau parameter tertentu tentang elemen. Mereka selalu terdiri dari nama atribut dan nilai atribut, dipisahkan oleh tanda sama dengan (`=`). Contoh atribut pada elemen gambar adalah `src` (menunjukkan sumber gambar) dan `alt` (teks alternatif jika gambar tidak dapat dimuat):
     ```html
     <img src="gambar.jpg" alt="Deskripsi Gambar" />
     ```
   - Atribut memungkinkan Kalian untuk mengkustomisasi atau mengontrol perilaku elemen HTML.

Jadi, dalam HTML, tag digunakan untuk membungkus elemen, elemen adalah kombinasi tag, dan atribut memberikan informasi tambahan tentang elemen. Ini adalah konsep dasar yang sangat penting dalam memahami cara HTML mengorganisir dan menampilkan informasi pada halaman web.

## Pahami struktur dasar HTML
Setelah mengetahui hal-hal pembentuk HTML, tentunya Kalian juga perlu mengetahui kerangka inti sebagai struktur dasar HTML tersebut. Satu dokumen HTML pada dasarnya dipenuhi ratusan tag. Oleh karena itu, ada baiknya Kalian mengetahui kerangka inti berikut yang menyusun setiap kali membuat dokumen HTML.

`<!doctype HTML> ` : yang berfungsi untuk membuat perintah pada komputer dalam kode HTML.

`<HTML></HTML> ` : yang merupakan tag sebagai penanda bahwa Kalian akan memulai dari mengakhiri dokumen dalam kode HTML.

`<head></head> ` : yang diisi dengan metadata dari dokumen HTML seperti judul tab, deskripsi, dan lain sebagainya.

`<body></body> ` : yang nantinya akan diisi dengan konten halaman untuk pembuatan website.

Sebagai tambahan informasi, buat Kalian yang sedang belajar HTML dan penasaran dengan dokumen HTML suatu website, Kalian dapat mengunjungi satu web tertentu, kemudian klik kanan pada mouse lalu pilih “View Page Source”. Bisa juga dengan kombinasi keyboard Ctrl + U.

## Tag umum di html 
Berikut adalah beberapa tag umum yang digunakan dalam HTML untuk membuat dan memformat konten di halaman web:

1. **Tag Dasar:**
   - `<html>`: Mendefinisikan dokumen HTML.
   - `<head>`: Berisi informasi metadata, seperti judul halaman dan tautan ke stylesheet.
   - `<title>`: Menentukan judul halaman yang akan ditampilkan di bilah judul browser.
   - `<meta>`: Digunakan untuk menyisipkan metadata, seperti karakter set dan deskripsi halaman.
   - `<body>`: Berisi semua konten yang akan ditampilkan pada halaman web.

2. **Teks:**
   - `<h1>`, `<h2>`, `<h3>`, ..., `<h6>`: Membuat judul berjenjang dengan tingkat kepentingan yang berbeda.
   - `<p>`: Membuat paragraf teks.
   - `<a>`: Membuat tautan (link) ke halaman web lain atau sumber lainnya.
   - `<strong>`: Membuat teks tebal (bold).
   - `<em>`: Membuat teks miring (italic).
   - `<u>`: Membuat teks bergaris bawah.
   - `<br>`: Membuat baris baru (break) dalam teks.
   - `<hr>`: Membuat garis horizontal untuk memisahkan konten.

3. **List dan Tabel:**
   - `<ul>`: Membuat daftar tak terurut (unordered list).
   - `<ol>`: Membuat daftar terurut (ordered list).
   - `<li>`: Menentukan item dalam daftar.
   - `<dl>`: Membuat daftar definisi.
   - `<dt>`: Menentukan istilah dalam daftar definisi.
   - `<dd>`: Menentukan definisi dalam daftar definisi.
   - `<table>`: Membuat tabel.
   - `<tr>`: Membuat baris dalam tabel.
   - `<th>`: Membuat sel kepala (header) dalam tabel.
   - `<td>`: Membuat sel data dalam tabel.

4. **Gambar:**
   - `<img>`: Menyisipkan gambar ke dalam halaman web.
   - `<figure>`: Menentukan elemen konten yang berdiri sendiri, seperti gambar atau video.
   - `<figcaption>`: Memberikan keterangan (caption) untuk elemen `<figure>`.

5. **Formulir (Forms):**
   - `<form>`: Membuat formulir yang dapat diisi pengguna.
   - `<input>`: Membuat berbagai jenis input, seperti teks, kata sandi, kotak centang, dan lainnya.
   - `<textarea>`: Membuat area teks yang lebih besar untuk input teks panjang.
   - `<select>`: Membuat daftar dropdown.
   - `<button>`: Membuat tombol dalam formulir.
   - `<label>`: Menentukan label untuk elemen formulir.

6. **Multimedia:**
   - `<audio>`: Menyisipkan audio.
   - `<video>`: Menyisipkan video.
   - `<iframe>`: Menyisipkan konten dari situs web lain.

7. **Kommentar:**
   - `<!-- Ini adalah komentar -->`: Menambahkan komentar dalam kode HTML untuk dokumentasi atau pengelompokan.

Ini hanyalah beberapa tag dasar dalam HTML. Terdapat banyak tag lainnya yang dapat digunakan untuk membangun halaman web dengan lebih banyak fitur dan fungsionalitas. Tag HTML ini membentuk struktur dan konten pada halaman web, dan dengan menggunakan CSS dan JavaScript, Kalian dapat mengontrol tampilan dan perilaku halaman web Kalian sesuai dengan kebutuhan Kalian.

## ID dan Class
Dalam HTML, "id" dan "class" adalah atribut yang digunakan untuk mengidentifikasi dan merujuk pada elemen-elemen HTML tertentu. Mereka digunakan dalam kombinasi dengan CSS dan JavaScript untuk memodifikasi atau mengontrol tampilan dan perilaku elemen-elemen tersebut.

1. **ID (Identifier):**
   - "id" adalah atribut yang memberikan identitas unik untuk elemen HTML tertentu dalam satu halaman. Setiap elemen dengan "id" harus memiliki nilai yang unik di dalam dokumen HTML.
   - Dalam CSS, Kalian dapat merujuk pada elemen dengan "id" menggunakan tanda pagar (`#`). Misalnya, jika Kalian memiliki elemen seperti `<div id="header">`, Kalian dapat menggantinya dengan CSS seperti ini:
     ```css
     #header {
         background-color: #ff6600;
         color: white;
     }
     ```
   - Dalam JavaScript, Kalian dapat merujuk pada elemen dengan "id" untuk mengubah atau memanipulasi elemen tersebut.
     ```javascript
     var header = document.getElementById("header");
     header.innerHTML = "Halaman Utama";
     ```

2. **Class:**
   - "class" adalah atribut yang digunakan untuk memberikan kelas atau kelompok tertentu kepada satu atau lebih elemen HTML. Kalian dapat memberikan beberapa elemen atribut "class" yang sama untuk mengelompokkannya bersama.
   - Dalam CSS, Kalian dapat merujuk pada elemen dengan "class" menggunakan tanda titik (`.``). Misalnya, jika Kalian memiliki beberapa elemen dengan kelas "menu", Kalian dapat menggantinya dengan CSS seperti ini:
     ```css
     .menu {
         font-size: 18px;
         color: #333;
     }
     ```
   - Dalam JavaScript, Kalian dapat merujuk pada elemen berdasarkan kelasnya untuk mengambil tindakan tertentu atau memodifikasinya.
     ```javascript
     var menus = document.getElementsByClassName("menu");
     for (var i = 0; i < menus.length; i++) {
         menus[i].style.fontWeight = "bold";
     ```

Penggunaan "id" dan "class" memungkinkan Kalian untuk memanipulasi elemen secara terperinci dalam halaman web Kalian. "id" digunakan untuk elemen-elemen yang harus unik, sementara "class" digunakan untuk elemen-elemen yang dapat dikelompokkan bersama berdasarkan karakteristik atau gaya tertentu. Dalam praktiknya, Kalian akan menggunakan kombinasi "id" dan "class" untuk mengendalikan tampilan dan perilaku halaman web Kalian dengan lebih tepat.

## Logic Challange : Buat HTML Pertama kalian
buatlah file index.html di vs code kalian, dan buka index.html tersebut. otomatis index.html ini bisa dibuka dengan extension browser.

```javascript
<!DOCTYPE html>
<html>
<head>
    <title>Halaman Sederhana</title>
</head>
<body>
    <h1>Selamat datang di Halaman Sederhana</h1>
    <p>Ini adalah contoh halaman HTML sederhana.</p>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    <p>Terima kasih telah mengunjungi halaman ini.</p>
</body>
</html>
```

![image](https://github.com/user-attachments/assets/3fadbb6b-e8cd-4ec3-81cf-6c41014dcc1f)


Rekreasi html kalian, cobain semua tag dan submit file html ini dengan nama "belajarHtml".
kreatifitas akan di nilai lebih, push belajarHtml.html di repo week1.

*GUNAKAN TAG TAG ADVANCE ATAU TAG UNIK DRI HTML, NILAI AKAN MENINGKAT

## Explore Challange
https://www.w3schools.com/html/

w3 school paling gampang untuk explore html, coba menyelam ke semua materinya dan cobain semua tag HTML nya.
