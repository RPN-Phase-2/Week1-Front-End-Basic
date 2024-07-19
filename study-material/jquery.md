# Jquery "write less, do more"

![image](https://github.com/user-attachments/assets/b26a9ea9-4838-4c01-8991-6d85f5986d26)


sekarang kalian sudah belajar membuat kerangka website (HTML)  dan mempercantik website (CSS). next step nya kita akan menjadikan website yang tadinya cuman static jadi interaktif atau dynamic website. disinilah javascript datang untuk memanipulasi elemen" HTML agar bisa interaksi dengan user. seperti button process, pop up, animation, data fetch dan masih banyak lagi. layaknya web app yang sudah kalian pakai sehari hari.

Tehnik yang dipakai untuk memanipulasi elemen tersebut yaitu DOM manipulation. yang sudah kalian pelajari di preparation phase 1.

Tapi ada problem jika kita hanya menggunakan vanilla javascript saja untuk mengerjakan website yang skalanya lebih besar.
bayangin aja kalian harus menulis document selector sebanyak elemen dom yang ada di website kalian : 

![image](https://github.com/user-attachments/assets/978835fd-4373-4aac-b42e-3f124081ba40)


nah disinlah Jquery  datang dengan framework javascript yang fungsinya short hand code untuk dom manipulation.

```js
// Vanilla javascript ID selector
var $el = document.querySelector('#hello');

// Vanilla javascipt class selector
var $classEl = document.querySelector('.bye')

// Jquery ID Selector
var $el = $("#hello");

// Jquery class Selector
var $el = $(".bye");
```
kalian ga perlu lagi spam nulis document instance untuk manipulate dom didalam website.

Jadi JQuery adalah sebuah library javascript. dibuat pada 2006 oleh John Resig. Ini adalah tools pertama dimana website menjadi sangat interaktif karena dari jquery kita bisa menangani ketidaksesuaian browser dan menyederhanakan manipulasi DOM HTML, Event Handler, Animasi, dan AJAX.

Tools ini terkenal pada masanya, sebelum modern front end tech menyerang (React, Vue). oleh karena itu kita belajar sejarah terlebih dahulu, dan menggunakan cara lama untuk membuat front end website.

https://jquery.com/ 

Dimohon untuk explore dokumentasi nya langsung 

*lu pada bakal nangis soalnya dokumentasinya bener bener bikin mata sakit :smiling_imp:

## How to use Jquery 
Kita akan membuat website untuk menghilangkan dan menampilkan elemen gambar dengan animasi fadeout.

langsung saja kita coba jquery, pertama buatlah simple html seperti ini :
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Contoh Efek Fading dengan jQuery</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<style>
    #gambar {
        width: 300px;
        height: 200px;
        background-color: lightblue;
    }
</style>
</head>
<body>

<div id="gambar"></div>
<button id="sembunyikan">Sembunyikan Gambar</button>
<button id="tampilkan">Tampilkan Gambar</button>

</body>
</html>
```

```<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js">```
script src dari link ajax ini berfungsi untuk mengaktifkan library jquery kedalam website kita, ini cara lama menggunakan CDN ketika kita ingin install library di project kita.

disini kita mempunya 3 elemen :
-Gambar
-Button (sembunyikan)
-Button (tampilkan)


Logic nya adalah kita ingin melakukan suatu interaksi ketika user click ke button tersebut.
if button click sembunyikan -> gambar hilang (fade out animation)
if button click tampilkan -> gambar tampilkan (fade in animation)

jadi script nya seperti ini :
```html
<script>
    $(document).ready(function(){
        // Sembunyikan gambar saat halaman dimuat
        $("#gambar").hide();

        // Ketika tombol sembunyikan diklik
        $("#sembunyikan").click(function(){
            $("#gambar").fadeOut(1000); // Memudar keluar dalam waktu 1 detik
        });

        // Ketika tombol tampilkan diklik
        $("#tampilkan").click(function(){
            $("#gambar").fadeIn(1000); // Memudar masuk dalam waktu 1 detik
        });
    });
</script>
```

### Basic Concept Selector
Kalian harus memahami basic concept dari Jquery. 
cara untuk memilih dokumen (selector) di jquery ada banyak sekali 

- HTML element Name -> `$('p')` kalian bisa lansung inject nama html elementnya
- Element ID -> `#namaId`
- Element Class -> `.namaClass` menggunakan titik
- Element attribute name -> menggunakan property name di tag html
- Element attribute value -> menggunakan property value di tag html

contoh di script atas kita menggunakan  Element ID  `#` , karena ini yang paling sering digunakan jika hanya ingin manipulate 1 elemen saja.
kalau kalian ingin manipulate multi element class adalah pilihan terbaik.

lanjut, tulis tag script ini di dalam body html kalian. maka hasil akhir akan seperti ini :

![image](https://github.com/user-attachments/assets/351b0c38-6235-4f06-8c6e-4df9d6786e6c)

ada beberapa hal yang kalian pelajari disini,

1. lifecycle jquery ->  $(document).ready() 
fungsi callback didalam instance ready ini adalah kalian bisa memanipulasi elemen sebelum html kalian di load. makanya javascript sudah ready interaksi setiap html kalian di load oleh user.
contoh diatas ketika website awal load, elemen gambar sudah di hide.

2.  $(document).hide() -> hiding document, sama seperti display: none di CSS

3. $(document).click(callback) -> OnClick event dari Jquery, kalian bisa melakukan suatu proses setiap user melakukan click di button elemen. 

*event OnClick ini akan sering kalian pakai karena dalam pembuatan web, karena akan ada banyak sekali interaksi OnClick dari user

4. FadeIn and fadeOut -> salah satu fitur animasi dari jquery, animasi memudar yang bisa diatur time framenya.

NOTE: ini baru beberapa method saja yang gua contohkan. dimohon untuk explore Jquery nya agar kalian bisa mengenal method lainnya. hampir semua animasi dan interaksi didalam website tercover di shorthand nya Jquery

## Jquery AJAX
Sebelum kita bahas short hand Jquery untuk AJAX,  kalian harus pelajarin fundamental AJAX itu terlebih dahulu.

## AJAX fundamental**
AJAX, yang merupakan singkatan dari Asynchronous JavaScript and XML, adalah sebuah teknik yang digunakan dalam pengembangan web untuk membuat halaman web lebih interaktif dan responsif. AJAX memungkinkan halaman web untuk memperbarui konten secara dinamis tanpa harus memuat ulang seluruh halaman. Ini dicapai dengan mengirim dan menerima data dari server di latar belakang, tanpa mengganggu tampilan dan interaksi pengguna dengan halaman.

Berikut adalah beberapa poin utama tentang AJAX:

- `Asynchronous` : AJAX bekerja secara asinkron, yang berarti bahwa permintaan ke server dapat dilakukan di latar belakang tanpa mengganggu pengalaman user saat berinteraksi dengan halaman web.

- `JavaScript` : AJAX menggunakan JavaScript untuk membuat permintaan HTTP ke server dan memproses responnya.

- `XML (dan JSON)` : Meskipun nama aslinya mencakup XML, dalam praktiknya, format data yang lebih umum digunakan adalah JSON (JavaScript Object Notation) karena lebih ringan dan mudah digunakan dengan JavaScript. XML masih bisa digunakan, tetapi kurang umum dibandingkan JSON.

- `Request dan Response` : AJAX menggunakan objek XMLHttpRequest (atau teknologi modern seperti Fetch API) untuk membuat permintaan HTTP ke server. Respon dari server kemudian digunakan untuk memperbarui bagian tertentu dari halaman web.

- `Partial Page Updates` : Salah satu kekuatan utama AJAX adalah kemampuannya untuk memperbarui bagian tertentu dari halaman tanpa harus memuat ulang seluruh halaman. Ini meningkatkan pengalaman pengguna dengan membuat aplikasi web terasa lebih cepat dan responsif.

Contoh penggunaan AJAX yang umum termasuk:

- Memvalidasi formulir secara real-time tanpa memuat ulang halaman.
- Memuat konten baru (seperti postingan blog atau produk) saat user scolling ke bawah halaman.
- Mengirim dan menerima API dari server untuk aplikasi web interaktif seperti chat, image, map, video dan lain lain.

Jadi pada intinya, AJAX ini old way (cara lama) untuk menghubungkan antara front end ke backend. sebelum menyerangnya teknologi baru fetching modern seperti (Axios, Fetch). bahkan sekarang sudah ada teknologi revalidate rendering seperti SWR dan React Query.

## How to use AJAX
Berikut adalah contoh kode HTML yang menggunakan AJAX untuk mengambil data dari API dan menampilkan informasi kartu "Dark Magician" dari YGOPRODeck.

API : https://ygoprodeck.com/api-guide/

*Disini gua anggap kalian sudah paham betul tentang API, jadi udah ga perlu bingung lagi cara fetch API seperti apa. kalo masih bingung silahkan balik ke phase 1 :smiling_imp: 

Buatlah file ajax-yugi.html , dan implementasikan code dibawah : 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ajax Tutorial</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        .card-info {
            margin-top: 20px;
        }
        .card-info img {
            width: 200px;
            height: auto;
        }
    </style>
</head>
<body>
    <h1>Ajax tutorial</h1>
    <button id="fetch-button">Fetch Card Info</button>
    <div class="card-info" id="card-info">
        <!-- Card information will be displayed here -->
    </div>

    <script>
        document.getElementById('fetch-button').addEventListener('click', function() {
            // Membuat objek XMLHttpRequest
            var xhttp = new XMLHttpRequest();

            // Menentukan fungsi yang akan dipanggil saat respons diterima
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var response = JSON.parse(this.responseText);
                    var card = response.data[0];

                    var cardInfoDiv = document.getElementById('card-info');
                    cardInfoDiv.innerHTML = `
                        <h2>${card.name}</h2>
                        <img src="${card.card_images[0].image_url}" alt="${card.name}">
                        <p><strong>Type:</strong> ${card.type}</p>
                        <p><strong>Race:</strong> ${card.race}</p>
                        <p><strong>Attribute:</strong> ${card.attribute}</p>
                        <p><strong>Level:</strong> ${card.level}</p>
                        <p><strong>ATK:</strong> ${card.atk}</p>
                        <p><strong>DEF:</strong> ${card.def}</p>
                        <p><strong>Description:</strong> ${card.desc}</p>
                    `;
                }
            };

            // Menginisiasi permintaan GET ke server
            xhttp.open("GET", "https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark%20Magician", true);

            // Mengirim permintaan
            xhttp.send();
        });
    </script>
</body>
</html>
```

Penjelasan Code:
- Logic View :
```Load Content (Clicked) -> XHR Http Fetching -> DOM Manipulation -> Card Info Update```
Saat tombol diklik, data tentang kartu "Dark Magician" akan diambil dari API dan ditampilkan di halaman tanpa reload ulang seluruh halaman.

- Bagian Script :
    * `document.getElementById('fetch-button').addEventListener('click', function() {...});`:  Menambahkan event listener ke tombol. Saat tombol diklik, fungsi ini akan dijalankan.
    * `var xhttp = new XMLHttpRequest();`: Membuat objek XMLHttpRequest untuk melakukan permintaan HTTP.
    * `xhttp.onreadystatechange = function() {...};`: Menentukan fungsi yang akan dijalankan setiap kali status permintaan berubah.
        * `if (this.readyState == 4 && this.status == 200) {...}`: Mengecek apakah permintaan telah selesai (readyState == 4) dan berhasil (status == 200).
        * `var response = JSON.parse(this.responseText);`: Menguraikan respon JSON dari server.
        * `var card = response.data[0];`: Mengambil data kartu dari respon.
        * `var cardInfoDiv = document.getElementById('card-info');`: Mendapatkan referensi ke elemen div tempat informasi kartu akan ditampilkan.
        * `cardInfoDiv.innerHTML = ...;:` Menyisipkan HTML dengan informasi kartu ke dalam elemen div.
- AJAX Request:
    * `xhttp.open("GET", "https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark%20Magician", true);`: Define GET Method ke URL API.
    * `xhttp.send();`: Mengirim request ke server.

NOTE:
Disini gua mau kasih note, fungsi JSON ini sangat berguna untuk front end development. karena kalian akan selalu berhubungan dengan API, sering kali kalian membuka atau mengolah data json dari backend untuk di tampilkan di front end.

- JSON Stringify
```
const obj = {name: "John", age: 30, city: "New York"};
const myJSON = JSON.stringify(obj);
```

- JSON Parse
```
const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
```

Setelah kalian selesai pelajarin codenya, jika dijalankan maka result nya akan seperti ini :

![image](https://github.com/user-attachments/assets/ebdf8aa6-7f2b-4928-99cd-81015f359795)

jadi seperti itulah contoh jaman dulu untuk komunikasi dengan server backend, menggunakan XHR dan kombinasi manipulasi DOM untuk membuat website jadi lebih interaktif. 
tetapi XHR ini sangat sekali boros codenya, disitulah Jquery datang dengan shorthandnya untuk membungkus fungsi xhr ajax lebih efisien.

## Jquery AJAX Implementation
balik ke code ajax-yugi.html, tambahkan cdn jquery untuk install library jquery di project ini.

```<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>```

setelah itu refactor code script nya, gunakan shorthand ajax dari jquery :

```js
<script>
    $(document).ready(function() {
        $('#fetch-button').click(function() {
            $.ajax({
                url: "https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark%20Magician",
                type: "GET",
                success: function(response) {
                    var card = response.data[0];
                    var cardInfoDiv = $('#card-info');
                    cardInfoDiv.html(`
                        <h2>${card.name}</h2>
                        <img src="${card.card_images[0].image_url}" alt="${card.name}">
                        <p><strong>Type:</strong> ${card.type}</p>
                        <p><strong>Race:</strong> ${card.race}</p>
                        <p><strong>Attribute:</strong> ${card.attribute}</p>
                        <p><strong>Level:</strong> ${card.level}</p>
                        <p><strong>ATK:</strong> ${card.atk}</p>
                        <p><strong>DEF:</strong> ${card.def}</p>
                        <p><strong>Description:</strong> ${card.desc}</p>
                    `);
                },
                error: function() {
                    alert("Error fetching card information.");
                }
            });
        });
    });
</script>
```

Hanya menggunakan `$.ajax(obj)` kita sudah mendapatkan ready state change + kita bisa kombinasikan dengan event OnClick nya dari jquery.


Jangan lupa push semua file HTML materi ini ke repo week1

EXPLORE  CHALLANGE:

- hands on ke dokumentasi jquery, atau w3school untuk resource baca yang lebih mudah
 
https://jquery.com/

https://www.w3schools.com/jquery/default.asp

- AJAX Post , explore http method ajax yang lain selain GET.
