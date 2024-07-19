# Local Storage 
![image](https://github.com/user-attachments/assets/3bce1d38-d3dc-4ac6-963a-75bf0d76054b)

Local storage adalah fitur web yang memungkinkan aplikasi web menyimpan data secara lokal di browser user. Data ini disimpan dalam format key-value pairs dan tetap ada bahkan setelah browser ditutup. Kapasitas penyimpanannya lebih besar dibandingkan dengan cookies (biasanya sekitar 5-10MB).

Di phase 2 ini kalian akan menggunakan local storage untuk implementasi fitur login dalam aplikasi.

### Kenapa tidak menggunakan Session Storage atau Cookies ?

Sebenarnya Cookies adalah storage paling ideal untuk menyimpan authentikasi dalam login, tetapi learning curve cookies lumayan complex dan juga aplikasi" yang kalian develop di phase 2 tidak sebesar app komersil yang lainnya. 

### tapi tenang saja, kalian akan tetap belajar cookies pada di phase 3 nanti.

Mari kita bahas perbedaan antara local storage, session storage, dan cookies, serta mengapa masing-masing mungkin atau mungkin tidak cocok untuk fitur login:

1. Local Storage:
   - Persisten: Data tetap ada bahkan setelah browser ditutup.
   - Kapasitas besar: Umumnya sekitar 5-10MB.
   - Tidak dikirim ke server dengan setiap HTTP request.
   - Hanya dapat diakses oleh client-side script.

Mengapa digunakan untuk login: Cocok untuk menyimpan token autentikasi jangka panjang atau informasi "remember me", memungkinkan user tetap login bahkan setelah menutup browser.

2. Session Storage:
   - Data hilang ketika tab/window browser ditutup.
   - Kapasitas besar: Mirip dengan local storage.
   - Tidak dikirim ke server dengan setiap HTTP request.
   - Hanya dapat diakses oleh client-side script.

Mengapa jarang digunakan untuk login: Kurang cocok untuk fitur "remember me" karena data hilang saat sesi berakhir, tapi bisa berguna untuk menyimpan data sementara selama sesi login.

3. Cookies:
   - Dapat diatur untuk bertahan lama atau hanya selama sesi.
   - Kapasitas terbatas: Biasanya sekitar 4KB.
   - Dikirim ke server dengan setiap HTTP request.
   - Dapat diakses oleh server dan client.
   - Dapat diatur sebagai HttpOnly untuk keamanan tambahan.

Mengapa sering digunakan untuk login: Ideal untuk menyimpan token sesi yang aman, terutama dengan pengaturan HttpOnly dan Secure flags.

Alasan mengapa local storage sering digunakan dalam contoh sederhana:

1. Kemudahan penggunaan: Mudah diimplementasikan dengan JavaScript.
2. Persistensi: Memungkinkan fitur "remember me" tanpa kompleksitas tambahan.
3. Kapasitas: Dapat menyimpan lebih banyak data dibandingkan cookies.

Namun, dalam aplikasi produksi yang sebenarnya, cookies sering menjadi pilihan yang lebih aman untuk autentikasi:

1. Keamanan: Dapat diatur sebagai HttpOnly, mencegah akses oleh JavaScript dan mengurangi risiko XSS.
2. Fleksibilitas: Dapat diatur untuk berakhir setelah waktu tertentu atau saat sesi berakhir.
3. Standar industri: Banyak framework backend mendukung manajemen sesi berbasis cookie.

Kesimpulan:
Meskipun local storage digunakan dalam contoh sederhana karena kemudahannya, untuk aplikasi produksi yang aman, kombinasi antara cookies (untuk token sesi) dan local storage (untuk data non-sensitif) sering menjadi pendekatan yang lebih baik. Token JWT yang disimpan dalam HttpOnly cookie untuk autentikasi, dengan beberapa data pengguna non-sensitif di local storage, adalah pola yang umum dan aman.

## Contoh Sederhana Local Storage 

Berikut adalah contoh proyek sederhana menggunakan jQuery dan local storage untuk sistem login sederhana:

Buatlah localstorage.html di folder project baru, dan push ke repo week ini.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dei Learning Platform - Login</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #161c24;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .login-container {
            background-color: white;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            width: 350px;
        }
        h1 {
            color: #333;
            margin-bottom: 30px;
            font-size: 28px;
        }
        input {
            width: 100%;
            padding: 12px;
            margin-bottom: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-size: 16px;
        }
        button {
            width: 100%;
            padding: 12px;
            background-color: #43b2e2;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        button:hover {
            background-color: #161c24
        }
        .welcome-message {
            text-align: center;
            font-size: 20px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="login-container">
        <h2 id="title">login with local storage</h2>
        <div id="login-form">
            <input type="text" id="username" placeholder="Username">
            <input type="password" id="password" placeholder="Password">
            <button id="login-btn">Login</button>
        </div>
        <div id="welcome-message" class="welcome-message" style="display:none;">
            <p>Welcome, <span id="user"></span>!</p>
            <button id="logout-btn">Logout</button>
        </div>
    </div>

    <script>
    $(document).ready(function() {
        if(localStorage.getItem('loggedInUser')) {
            showWelcomeMessage(localStorage.getItem('loggedInUser'));
        }

        $('#login-btn').click(function() {
            var username = $('#username').val();
            var password = $('#password').val();

            if(username && password) {
                localStorage.setItem('loggedInUser', username);
                showWelcomeMessage(username);
            } else {
                alert('Please enter both username and password');
            }
        });

        $('#logout-btn').click(function() {
            localStorage.removeItem('loggedInUser');
            $('#login-form').show();
            $('#title').show();
            $('#welcome-message').hide();
        });

        function showWelcomeMessage(username) {
            $('#user').text(username);
            $('#login-form').hide();
            $('#title').hide();
            $('#welcome-message').show();
        }
    });
    </script>
</body>
</html>
```

Dalam contoh ini:
- Kita menggunakan jQuery untuk manipulasi DOM dan event handling.
- Local storage digunakan untuk menyimpan username pengguna yang login.
- Saat halaman diload, kita memeriksa apakah ada user yang sudah login.
- Saat login berhasil, username disimpan di local storage.
- Saat logout, data di local storage dihapus.

Coba testing untuk isi form dan klik button login : 

![image](https://github.com/user-attachments/assets/c09b71bb-3a33-4cbe-a45a-513eb55a8d3b)

username tesar akan masuk ke local storage dengan key `loggedInUser`.

![image](https://github.com/user-attachments/assets/b51cb497-e6bf-4512-8b35-783c7bfecd51)


## Bagaimana cara cek key dan value local storage dalam browser ? 

Kalian bisa langsung klik kanan dan inspect element dan buka tab application

![image](https://github.com/user-attachments/assets/c1d01625-48c6-4f53-8bfe-e47e29509057)

Disini kalian bisa lihat ada tab local storage , `file://` ini adalah localhost html project yang kita jalankan

![image](https://github.com/user-attachments/assets/8ad20957-f2af-4373-8ff6-7d5862a928ce)

Perlu diingat bahwa ini adalah contoh sangat sederhana dan tidak aman untuk penggunaan di dunia nyata. Dalam aplikasi sebenarnya, Kalian harus mengimplementasikan autentikasi JWT Token dan disimpan kedalam local storage. 

***Next, kalian akan selalu menyimpan authentication yang proper menggunakan JWT dan Local Storage dalam setiap fitur login di phase 2***

***Menggunakan Cookies dibolehkan juga, tetapi materi untuk cookies detailnya di phase 3***


