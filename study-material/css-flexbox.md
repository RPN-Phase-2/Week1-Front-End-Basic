# CSS Layout Flexbox
![image](https://github.com/user-attachments/assets/2b1ee53a-8a97-4959-a59d-1f14c8939750)

Flexbox, atau Flexible Box Layout, adalah modul tata letak di CSS yang dirancang untuk memberikan cara yang lebih efisien untuk merancang, merapikan, dan mendistribusikan ruang di dalam sebuah kontainer, bahkan ketika ukurannya tidak diketahui dan dinamis.

## Terminologi Dasar
- **Container (Flex Container)**: Elemen yang memiliki properti `display: flex;`.
- **Items (Flex Items)**: Elemen anak dari flex container.

## Membuat Flex Container
Untuk membuat flex container, tambahkan properti `display: flex;` ke elemen parent.

```css
.container {
  display: flex;
}
```

## Properti Flex Container
1. **flex-direction**: Menentukan arah utama dari flex container.
    - `row` (default)
    - `row-reverse`
    - `column`
    - `column-reverse`

    ```css
    .container {
      flex-direction: row;
    }
    ```

2. **flex-wrap**: Mengatur apakah item flex dibungkus atau tidak.
    - `nowrap` (default)
    - `wrap`
    - `wrap-reverse`

    ```css
    .container {
      flex-wrap: wrap;
    }
    ```

## Properti Flex Item
1. **order**: Menentukan urutan tampilan item flex.
    ```css
    .item {
      order: 1;
    }
    ```

2. **flex-grow**: Menentukan kemampuan item flex untuk tumbuh jika diperlukan.
    ```css
    .item {
      flex-grow: 1;
    }
    ```

3. **flex-shrink**: Menentukan kemampuan item flex untuk menyusut jika diperlukan.
    ```css
    .item {
      flex-shrink: 1;
    }
    ```

4. **flex-basis**: Menentukan ukuran dasar dari item flex sebelum ruang ekstra didistribusikan.
    ```css
    .item {
      flex-basis: 100px;
    }
    ```

5. **align-self**: Menyelaraskan item flex secara individual di sepanjang sumbu silang (cross axis).
    - `auto` (default)
    - `flex-start`
    - `flex-end`
    - `center`
    - `baseline`
    - `stretch`

    ```css
    .item {
      align-self: center;
    }
    ```

6. **flex**: Kombinasi dari `flex-grow`, `flex-shrink`, dan `flex-basis`.
    ```css
    .item {
      flex: 1 1 100px;
    }
    ```

3. **justify-content**: Menyelaraskan item flex di sepanjang sumbu utama (main axis).
    - `flex-start` (default)
    - `flex-end`
    - `center`
    - `space-between`
    - `space-around`
    - `space-evenly`

    ```css
    .container {
      justify-content: center;
    }
    ```

4. **align-items**: Menyelaraskan item flex di sepanjang sumbu silang (cross axis).
    - `stretch` (default)
    - `flex-start`
    - `flex-end`
    - `center`
    - `baseline`

    ```css
    .container {
      align-items: center;
    }
    ```

5. **align-content**: Menyelaraskan baris-baris flex di sepanjang sumbu silang (cross axis).
    - `stretch` (default)
    - `flex-start`
    - `flex-end`
    - `center`
    - `space-between`
    - `space-around`

    ```css
    .container {
      align-content: center;
    }
    ```

## Explore Challange
Explore mekanisme layouting flexbox, resource ini sangat mudah di pelajarin dan dipahami bagi newbie.
layout flexbox bakal jadi senjata utama kalian di phase 2 , jadi tolong explore sedalam mungkin untuk memudahkan kalian layouting dalam challange" selanjutnya.

*Explore challange ini mekanisme baru di phase 2 , challange ini bersifat wajib dan result explorenya akan berhubungan di challange" selanjutnya (EXPLORE INI AKAN MASUK NILAI). 

*Membaca salah satu habbit yang sangat baik untuk masa depan kalian, jadi kalian harus melatih membaca di phase ini.

https://css-tricks.com/snippets/css/a-guide-to-flexbox/

## Logic Challange : Flexbox froggy

Saatnya untuk menguji hasil explore kalian.
Disini challangenya, kalian harus menyelesaikan Game Flexbox froggy dari level 1 sampai level terahkir.

SS hasil result kalian setelah menyelesaikan semua stage di Flexbox froggy. dan submit screenshotnya di repo week1.

*NOTE: PLEASE DO NOT SCAM WITH YOUR RESULT

link -> https://flexboxfroggy.com/

![image](https://github.com/user-attachments/assets/95fbe3c3-b6e8-4e0a-b6f6-bdb2f274c60c)


## Implementasi Flexbox ke website
gua sudah nyiapin 2 material project untuk showcase ke kalian gimana cara kita implementasi layout flex ke frontend project. 

download projectnya di https://github.com/RPN-Phase-2/Week1-Front-End-Basic/tree/main/project-material

<img src="https://github.com/user-attachments/assets/d5064006-24fa-44a6-b572-c7e88435e770" width="300" height="500">

### Zexo Card
Card adalah salah satu component paling umum dalam front end. layouting flexbox dalam card sangat sering juga dipakai untuk memposisikan card header, card content, dan footer.
![image](https://github.com/user-attachments/assets/27c44883-77bf-4e88-ae67-daa22aecaa6c)
bagian yang perlu kalian pahami ada di class `card`.
class ini membagi 3 column menggunakan flex-column.

`card-img` -> column 1 untuk menampilkan image

`card-content` -> column 2 untuk menampilkan content card

`profile` -> footer dalam card untuk menampilkan text profile

dan terakhir di child elemen `profile` kita menggunakan flex row untuk image dan textnya

![image](https://github.com/user-attachments/assets/47b29c49-1d5e-4e3d-82b3-8f3b08b6809a)

### Zexo Ice Cream
Zexo ice cream ini lanjutan remake dari website ice cream yang kita buat, tolong di rewrite codenya untuk push di code kalian buat bahan belajar.

Disini banyak material CSS yang kalian bisa pelajari dan dipakai untuk next challange. so gua bakal ngebolehin kalian copas copas code dari material.

Kita akan breakdown per section: 

- Navbar

Pada section navbar, kelas .navbar-left menggunakan display: flex untuk membuat elemen-elemen di dalamnya menjadi flex item. Properti gap: 2rem memberikan jarak antar elemen, sedangkan justify-content: flex-start menyelaraskan item di awal kontainer. Kombinasi ini membuat item dalam navbar tersebar secara horizontal dengan jarak yang rapi di antara mereka.

- Beranda

Di section beranda, .beranda-content menggunakan display: flex untuk menyusun elemen di dalamnya secara horizontal. Kelas .content-ba di dalamnya juga menggunakan display: flex dengan flex-direction: column untuk menyusun teks secara vertikal, dan justify-content: center untuk menempatkan teks di tengah kontainer secara vertikal. Kelas .content-bb menggunakan display: flex, justify-content: center, dan align-items: center untuk menempatkan gambar di tengah kontainer secara horizontal dan vertikal.

![image](https://github.com/user-attachments/assets/a32ca42d-31c0-482a-a8ac-ddfcb3ec71d4)

- Product

Pada section produk, .product-content menggunakan display: flex untuk menyusun elemen secara horizontal. Kelas .content-pa dan .content-pb di dalamnya juga menggunakan display: flex dengan flex-direction: column untuk menyusun elemen secara vertikal. Kombinasi ini memungkinkan elemen produk disusun dengan rapi baik secara horizontal maupun vertikal.

![image](https://github.com/user-attachments/assets/f34cc35a-68ba-4fff-8a5d-d31ba2a87151)

- Contact Us

Di section contact us ini hampir sama dengan section product, .contact-us-div menggunakan display: flex dengan justify-content: space-between untuk menyelaraskan elemen-elemen di dalamnya dengan memberikan ruang yang sama di antara mereka. Ini memastikan bahwa elemen contact us tersebar secara merata di kontainer. Kelas .contact-us-child di dalamnya juga menggunakan display: flex dan justify-content: center untuk menempatkan elemen di tengah kontainer secara horizontal.

![image](https://github.com/user-attachments/assets/e0c5a23e-5fae-4b09-88be-e2a30b3ee52e)

- Bonus Responsive

Media queries digunakan untuk menyesuaikan tampilan pada berbagai ukuran layar. Pada layar dengan lebar maksimal 968px, .beranda-content menggunakan flex-direction: column-reverse untuk menyusun elemen secara vertikal dengan urutan terbalik. Pada layar dengan lebar maksimal 576px, ukuran font dan padding pada berbagai elemen disesuaikan untuk memastikan tampilan tetap rapi dan mudah dibaca pada layar yang lebih kecil.

![image](https://github.com/user-attachments/assets/33711429-c169-4da6-9d77-317750e1c6b9)
