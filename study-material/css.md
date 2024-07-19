## CSS
CSS (Cascading Style Sheets) adalah bahasa pemrograman yang digunakan untuk mengontrol tampilan dan gaya elemen-elemen HTML pada halaman web. CSS memungkinkan Kalian untuk memisahkan konten (HTML) dari tampilan (styling), sehingga Kalian dapat dengan mudah mengubah tampilan seluruh situs web hanya dengan memodifikasi file CSS, tanpa harus mengubah struktur HTML.

Dengan CSS, Kalian dapat mengatur berbagai properti gaya, seperti warna teks, ukuran teks, jenis huruf, jarak antar elemen, posisi elemen, dan banyak lagi. CSS juga mendukung pemilihan berdasarkan jenis elemen (tag), kelas, ID, atribut, dan bahkan pseudo-kelas seperti `:hover` untuk mengendalikan tampilan elemen dalam berbagai kondisi.

Berikut beberapa contoh properti CSS yang umum digunakan:

- `color`: Mengatur warna teks.
- `font-family`: Menentukan jenis huruf (font) yang akan digunakan.
- `font-size`: Mengatur ukuran teks.
- `background-color`: Menentukan warna latar belakang elemen.
- `margin` dan `padding`: Mengatur jarak di sekitar elemen.
- `border`: Membuat garis batas (border) untuk elemen.
- `text-align`: Menentukan perataan teks seperti kiri, tengah, atau kanan.
- `width` dan `height`: Mengatur lebar dan tinggi elemen.
- `position`: Mengatur posisi elemen.

Contoh kode CSS:

```css
/* Pemilihan berdasarkan elemen tag */
p {
    color: blue;
    font-size: 16px;
}

/* Pemilihan berdasarkan kelas */
.button {
    background-color: #ff6600;
    color: white;
    padding: 10px 20px;
}

/* Pemilihan berdasarkan ID */
#header {
    background-color: #333;
    color: white;
    text-align: center;
}
```

CSS sangat penting dalam pengembangan web karena memungkinkan Kalian untuk menciptakan tampilan yang menarik, responsif, dan konsisten untuk situs web Kalian. Dengan CSS, Kalian dapat mengontrol hampir semua aspek tampilan situs web Kalian, dan ini membuat situs web lebih menarik, mudah dibaca, dan dapat diakses.

## CSS Selector
Seleksi CSS (CSS selectors) adalah cara Kalian memilih elemen atau sekelompok elemen dalam dokumen HTML untuk menerapkan aturan CSS ke mereka. Seleksi CSS memungkinkan Kalian mengendalikan tampilan dan gaya elemen-elemen halaman web. Berikut adalah beberapa jenis seleksi CSS yang umum digunakan:

1. **Seleksi Berdasarkan Elemen (Tag):**
   - Kalian dapat memilih semua elemen dengan tag tertentu dalam dokumen HTML. Contoh:
     ```css
     p {
         color: blue;
     }
     ```

2. **Seleksi Berdasarkan Kelas:**
   - Kalian dapat memilih elemen-elemen yang memiliki atribut `class` tertentu. Gunakan tanda titik (`.`) diikuti dengan nama kelas yang ingin Kalian seleksi. Contoh:
     ```css
     .button {
         background-color: #ff6600;
         color: white;
     }
     ```

3. **Seleksi Berdasarkan ID:**
   - Kalian dapat memilih elemen dengan atribut `id` tertentu. Gunakan tanda pagar (`#`) diikuti dengan nama ID yang ingin Kalian seleksi. Contoh:
     ```css
     #header {
         background-color: #333;
         color: white;
     }
     ```

4. **Seleksi Berdasarkan Atribut:**
   - Kalian dapat memilih elemen berdasarkan atribut mereka. Contoh:
     ```css
     input[type="text"] {
         border: 1px solid #ccc;
     }
     ```

5. **Seleksi Berdasarkan Pseudo-Class:**
   - Pseudo-class digunakan untuk memilih elemen dalam keadaan tertentu. Misalnya, `:hover` digunakan untuk elemen yang sedang dihover oleh kursor. Contoh:
     ```css
     a:hover {
         color: red;
     }
     ```

6. **Seleksi Berdasarkan Hierarki (Nesting):**
   - Kalian dapat memilih elemen yang ada dalam elemen lain. Ini memungkinkan Kalian untuk mengaturnya berdasarkan struktur hierarki HTML. Contoh:
     ```css
     ul li {
         list-style-type: disc;
     }
     ```

7. **Seleksi Berdasarkan Kombinasi Selektor:**
   - Kalian dapat menggabungkan beberapa selektor untuk memilih elemen yang sesuai dengan semua selektor tersebut. Misalnya, `div.content` memilih elemen `<div>` yang memiliki kelas "content". Contoh:
     ```css
     h1, h2 {
         font-family: "Arial", sans-serif;
     }
     ```

8. **Seleksi Berdasarkan Kondisi:**
   - Kalian dapat menggunakan operasi logika untuk memilih elemen berdasarkan kondisi yang lebih kompleks. Contoh:
     ```css
     p:first-child {
         font-weight: bold;
     }
     ```

Dengan menggunakan berbagai jenis selektor ini, Kalian dapat mengendalikan elemen mana yang akan diberikan aturan CSS tertentu. Ini adalah dasar dalam mengatur tampilan dan gaya halaman web Kalian.

## Property Umum CSS
Berikut beberapa properti CSS yang umum digunakan dalam pengembangan web. Properti CSS digunakan untuk mengontrol tampilan elemen-elemen HTML pada halaman web. Properti-properti ini mencakup berbagai aspek tampilan seperti warna, ukuran, tata letak, dan banyak lagi. Di bawah ini adalah contoh beberapa properti CSS yang sering digunakan:

1. **Color (Warna):**
   - `color`: Mengatur warna teks.
   - `background-color`: Mengatur warna latar belakang.

2. **Font (Font):**
   - `font-family`: Menentukan jenis huruf (font).
   - `font-size`: Mengatur ukuran teks.
   - `font-weight`: Mengatur ketebalan huruf (misalnya, `bold`).
   - `line-height`: Mengatur jarak antara baris teks.

3. **Border (Batas):**
   - `border`: Mengatur gaya, warna, dan lebar batas elemen.
   - `border-radius`: Mengatur sudut elemen (border radius).

4. **Padding dan Margin:**
   - `padding`: Mengatur jarak antara konten dan batas elemen.
   - `margin`: Mengatur jarak di sekitar elemen.

5. **Tata Letak (Layout):**
   - `width` dan `height`: Mengatur lebar dan tinggi elemen.
   - `display`: Mengatur cara elemen ditampilkan (misalnya, `block`, `inline`, `flex`).
   - `position`: Mengatur posisi elemen (misalnya, `relative`, `absolute`).
   - `float`: Mengatur apakah elemen mengapung ke kiri atau kanan elemen lain.

6. **Text (Teks):**
   - `text-align`: Menentukan perataan teks (misalnya, `left`, `center`, `right`).
   - `text-decoration`: Mengatur dekorasi teks (misalnya, `underline`, `line-through`).

7. **List (Daftar):**
   - `list-style-type`: Mengatur jenis penomoran atau poin dalam daftar (misalnya, `circle`, `decimal`).

8. **Background (Latar Belakang):**
   - `background-image`: Mengatur gambar latar belakang.
   - `background-size`: Mengatur ukuran gambar latar belakang.
   - `background-position`: Mengatur posisi gambar latar belakang.

9. **Transformasi (Transform):**
   - `transform`: Mengatur transformasi elemen, seperti rotasi dan pergeseran.

10. **Transisi (Transitions) dan Animasi (Animations):**
    - `transition`: Mengatur perubahan halus dalam elemen saat perubahan keadaan.
    - `animation`: Mengatur animasi elemen.

11. **Box Model:**
    - `box-sizing`: Mengatur cara elemen menghitung margin, border, dan padding dalam perhitungan lebar dan tinggi.

12. **Flexbox dan Grid:**
    - Properti-properti yang digunakan dalam tata letak dengan teknik Flexbox dan Grid, seperti `flex`, `flex-direction`, `grid-template-columns`, dan lainnya.

13. **Pseudo-Class dan Pseudo-Element:**
    - `:hover`, `:active`, `:focus` untuk mengendalikan tampilan elemen dalam kondisi tertentu.
    - `::before` dan `::after` untuk menambahkan elemen tambahan ke elemen asli.

14. **Media Query:**
    - Properti `@media` digunakan untuk membuat tampilan yang responsif berdasarkan ukuran layar atau perangkat pengguna.

15. **Filter:**
    - `filter`: Mengatur efek visual pada elemen, seperti kabur (blur) atau perubahan warna.

16. **Variable (Var):**
    - Menggunakan variabel CSS untuk menyimpan dan mengatur nilai yang dapat digunakan dalam berbagai properti.

Ini hanya beberapa contoh properti CSS yang umum digunakan. Properti CSS ini digunakan dalam kombinasi untuk mengendalikan tampilan dan gaya halaman web Kalian. Pemahaman yang baik tentang properti-properti ini akan membantu Kalian mengembangkan tampilan yang sesuai dengan desain Kalian.

## Penggunaan CSS 
disini gua akan buat contoh sederhana gimana kita membuat kombinasi html + css dalam pembuatan website.
buat folder "icecream" , dan tambahkan 2 file ini :

![image](https://github.com/user-attachments/assets/b2681e8a-be3e-4e1c-9a9d-42fd2f5fc539)

buatlah struktur websitenya menggunakan html ini.
index.html
```html
<!DOCTYPE html>
<html>
<head>
    <title>Zexo Ice Cream</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <header>
        <h1>Selamat Datang di Zexo Ice Cream</h1>
        <p>Nikmati Sensasi Manisnya</p>
    </header>

    <nav>
        <ul>
            <li><a href="#">Beranda</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Kontak</a></li>
        </ul>
    </nav>

    <section id="menu">
        <h2>Menu Ice Cream</h2>
        <div class="ice-cream">
            <img src="https://img.freepik.com/free-photo/cornet-ice-cream-with-strawberry-scoop-colorful-surface_463209-35.jpg?w=900&t=st=1697370192~exp=1697370792~hmac=a915bb72a43604b81f5587132d45a077ae5caef0fae976d625e88478474d4653" alt="Ice Cream 1">
            <h3>Raspberry Sorbet</h3>
            <p>Rasakan rasa segar dari raspberry dalam sorbet kami.</p>
            <span>Rp 25.000</span>
        </div>

        <div class="ice-cream">
            <img src="https://img.freepik.com/free-photo/high-angle-hand-holding-ice-cream-cup_23-2149681943.jpg?w=900&t=st=1697370298~exp=1697370898~hmac=54bf42e3e84cd5d10e073448e93659a7e83fa5214af0c8cb569badbca640e5c5" alt="Ice Cream 2">
            <h3>Chocolate Delight</h3>
            <p>Nikmati kelezatan cokelat dalam segepok es krim ini.</p>
            <span>Rp 30.000</span>
        </div>
    </section>

    <footer>
        <p>&copy; 2023 Zexo Ice Cream</p>
    </footer>
</body>
</html>
```
fungsi dari code `<link rel="stylesheet" type="text/css" href="style.css">` ini, untuk menghubungkan style.css kita ke project html.
sebenarnya kalian juga bisa langsung menulis css di htmlnya, tapi di tutorial ini gua buat terpisah agar codenya lebih rapih.


dan kita akan percantik websitenya dengan style.css ini
style.css
```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
}

header {
    background-color: #ff6600;
    color: white;
    text-align: center;
    padding: 20px;
}

nav ul {
    background-color: #ff6600;
    list-style: none;
    padding: 0;
    text-align: center;
}

nav ul li {
    display: inline;
    margin: 0 10px;
}

nav ul li a {
    text-decoration: none;
    color: white;
}

section {
    margin: 20px;
}

h2 {
    text-align: center;
}

.ice-cream {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;
    margin: 10px;
    text-align: center;
}

img {
    width: 300px;
    height: auto;
    
}

footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px;
}
```

disini kita membuat simple website ice cream dengan tampilan 2 produk ice cream. kita juga implementasi penggunaan tag img dan mengambil img source dari url online.
![image](https://github.com/user-attachments/assets/db9df058-db75-46ff-afa2-7ded45fbfce0)

## Explore Challange 
CSS hal yang paling banyak perlu di explore, saking banyaknya property CSS dokumentasi dari online pun masih banyak yang belum nge cover semua materi CSS. tapi yang perlu kalian pahamin disini lebih ke konsep struktur CSS dahulu.

https://www.w3schools.com/w3css/defaulT.asp

ini konsep konsep yang perlu di explore:

1. **CSS Grid Layout:**
   - Grid Layout adalah teknik tata letak CSS yang kuat yang memungkinkan Kalian untuk membuat tata letak dua dimensi yang sangat fleksibel. Kalian dapat membuat tata letak dengan baris dan kolom yang kompleks.

2. **CSS Flexbox:**
   - Flexbox adalah teknik tata letak CSS yang dirancang untuk mengatur elemen dalam satu dimensi (baris atau kolom). Ini berguna untuk mengatur elemen dalam kontainer dengan cara yang responsif dan efisien.

3. **Transformasi CSS:**
   - Properti `transform` memungkinkan Kalian untuk melakukan transformasi seperti rotasi, pergeseran, dan penskalaan elemen.

4. **Animasi CSS:**
   - Kalian dapat menggunakan animasi CSS untuk menciptakan efek pergerakan yang halus dan menarik pada elemen, termasuk penggunaan keyframes.

5. **Transisi CSS:**
   - Transisi memungkinkan Kalian mengubah properti CSS secara perlahan saat perubahan keadaan, seperti hover atau klik.

6. **Variable CSS:**
   - Variabel CSS (Custom Properties) memungkinkan Kalian mendefinisikan variabel dalam CSS untuk digunakan kembali di seluruh stylesheet.

7. **Media Query dan Desain Responsif:**
   - Kalian harus memahami cara menggunakan media query untuk membuat desain web responsif yang dapat menyesuaikan tampilan dengan berbagai perangkat dan ukuran layar.

8. **Pseudo-Element dan Pseudo-Class Lanjutan:**
   - Kalian dapat mempelajari pseudo-class dan pseudo-element yang lebih lanjut, seperti `:not()`, `:nth-child()`, dan `::before`, untuk membuat seleksi yang lebih rumit.

9. **Selektor CSS Lanjutan:**
   - Kalian dapat belajar lebih lanjut tentang selektor CSS yang kuat seperti `adjacent`, `general`, dan `attribute` selectors.

10. **Tema dan Mode Gelap:**
    - Kalian dapat mempelajari cara membuat mode gelap untuk situs web Kalian dan bagaimana mengizinkan pengguna memilih tema yang sesuai.

11. **Menggunakan CSS Preprocessors:**
    - Sass dan Less adalah preprosesor CSS yang memungkinkan Kalian untuk menulis kode CSS dengan sintaks yang lebih kuat dan efisien.

12. **Menggunakan CSS Frameworks:**
    - Belajar untuk menggunakan kerangka kerja CSS seperti Bootstrap atau Foundation untuk mempercepat pengembangan web Kalian.

13. **Menyusun CSS Dengan Prinsip BEM (Block-Element-Modifier):**
    - BEM adalah metodologi pengorganisasian kode CSS yang membantu Kalian membuat kode yang lebih mudah dikelola dan skala dengan baik.

14. **CSS dalam Animasi dan Interaksi:**
    - Memahami cara menggunakan CSS untuk menciptakan animasi interaktif seperti hamburan (parallax), scroll-triggered animations, dan lainnya.

Menguasai konsep-konsep ini akan memberi Kalian kemampuan untuk merancang dan mengembangkan tampilan web yang lebih canggih, menarik, dan responsif. Pastikan Kalian berlatih dengan membuat proyek-proyek nyata yang menggunakan teknik-teknik ini untuk memperdalam pemahaman Kalian.
