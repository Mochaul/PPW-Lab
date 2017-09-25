# Lab 4: Pengenalan _HTML5_

CSGE602022 - Web Design & Programming (Perancangan & Pemrograman Web) @
Faculty of Computer Science Universitas Indonesia, Odd Semester 2017/2018

## Tujuan Pembelajaran

Setelah menyelesaikan tutorial ini, mahasiswa diharapkan untuk mengerti :

- Mengerti susunan tag pada _HTML5_
- Mengetahui berbagai jenis tag _HTML5_
- Mengerti syntax _for_ dan _if_ pada templating _Django_

## Pengenalan

Silahkan pelajari https://www.html-5-tutorial.com/all-html-tags.htm

## Checklist

1. Membuat _Home Page_
    1. [X] Buatlah sebuah `app` baru dengan nama `lab-4`
    2. [X] Buat struktur template pada `app lab-4` seperti dibawah ini
        ```
            - lab_4
                __init__.py
                admin.py
                apps.py
                models.py
                tests.py
                views.py
                - migrations
                    ...
                - templates
                    - layout
                        base.html
                    - partials
                        header.html
                        footer.html
                    table.html
                    lab_4.html
                    from_result.html
        ```
    3. [X] Isi `navbar.html` dan `footer.html` dengan tag _HTML5_. Pastikan `navbar.html` mengandung tag `<nav>` dan `footer.html` mengandung lambang copyright &copy;
    4. [X] Isi `base.html` dengan tag _HTML5_ . Buatlah home page yang mendeskripsikan diri kalian. Silahkan berkreasi sesuka hati kalian. Referensi pendukung:
        https://www.html-5-tutorial.com/all-html-tags.htm
        https://www.w3schools.com/TAGs/
    5. [X] Pada home page terdapat _Form_ untuk memberikan pesan
2. Membuat page Untuk menampilkan semua message
    1. [X] Terdapat tabel yang menampilkan semua pesan yang telah di-submit
    2. [X] Pesan dari anonymous diberi warna baris yang berbeda
3. Pastikan kalian memiliki _Code Coverage_ yang baik
    1. [X] Jika kalian belum melakukan konfigurasi untuk menampilkan _Code Coverage_ di Gitlab maka lihat langkah `Show Code Coverage in Gitlab`
    di [README.md](https://gitlab.com/PPW-2017/ppw-lab/blob/master/README.md)
    2. [X] Pastikan _Code Coverage_ kalian 100%
4. Additional
    1. [X] Tampilkan Foto kalian. Gunakan tag `<img>` pada home page dengan bentuk image berbentuk lingkaran
    2. [X] Berikan tampilan yang menarik pada home page
    3. [X] Buatlah test baru untuk test keberadaan Navbar dan Copyright
    4. [X] Tampilkan Pesan error bilamana `Message` diisi kosong (Beserta Testnya)
    5. [X] Buatlah _custom_ pesan error agar lebih menarik (Beserta Testnya)
    6. [X] Ubah _Redirection_ ketika mengakses _Root_ URL (`<YOURAPPNAME>.herokuapp.com`) sehingga
    akan mengembalikan halaman _Home Page_ Lab 4 (Kondisikan _Test Case_ dari lab sebelumnya, dan buatlah _Test Case_ baru
    di `lab_4/tests.py` untuk memastikan bahwa _Root URL_ akan mengembalikan halaman _Home Page_ Lab 4)
    7. [X] Ubah _datetime_ sehingga menggunakan Waktu Lokal GMT + 7
