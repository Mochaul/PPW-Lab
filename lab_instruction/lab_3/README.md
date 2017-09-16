# Lab 3: Pengenalan _Setting_ PostgreSQL di Heroku, pengenalan _models_ dan TDD

CSGE602022 - Web Design & Programming (Perancangan & Pemrograman Web) @
Faculty of Computer Science Universitas Indonesia, Odd Semester 2017/2018

## Tujuan Pembelajaran

Setelah menyelesaikan tutorial ini, mahasiswa diharapkan untuk mengerti :

- Mengaktifkan PostgreSQL di Heroku
- Mengerti penggunaan _models_ pada _Django Project_
- Disiplin TDD dalam pengembangan _Web Application_

## Checklist

1. Semua Halaman di URL `/lab-2/`, `/lab-2-addon/`, dan `/lab-3/` memiliki _Navigation Bar_
    1. [X] Terdapat `base.html` di dalam _folder_ templates di _Root Folder_
    2. [X] Menggunakan `index_lab2.html` yang terbaru
    3. [X] Menggunakan `description_lab2addon.html` yang terbaru
2. Membuat Fitur **Menulis Kegiatan** dan **Menampilkan Semua Kegiatan** di Halaman _Diary_ :
    1. [X] Membuat _apps_ baru bernama `lab_3`
    2. [X] Masukkan `lab_3` kedalam INSTALLED_APPS
    3. [X] Implementasi _Test Case_ di `lab_3/tests.py`
    4. [X] Implementasi `lab_3/views.py`
    5. [X] Implementasi konfigurasi URL di `lab_3/urls.py`
    6. [X] Ubah `praktikum/urls.py` sehingga konfigurasi `lab_3/urls.py` bisa diakses
3. Pastikan kalian memiliki _Code Coverage_ yang baik
    1. [X] Jika kalian belum melakukan konfigurasi untuk menampilkan _Code Coverage_ di Gitlab maka lihat langkah `Show Code Coverage in Gitlab`
    di [README.md](https://gitlab.com/PPW-2017/ppw-lab/blob/master/README.md)
    2. [X] Pastikan _Code Coverage_ kalian 100%

## Challenge Checklist

Cukup kerjakan salah satu nya saja:
1. [X] Perbaikan Warna dan layout yang lebih rapi lagi untuk tampilan _Website_
2. [X] Berikan _Input Validation_, ketika Input untuk tanggal tidak sesuai format, maka data tidak tersimpan
(Saat ini yang dilakukan oleh program adalah memberikan _stacktrace error_. Hal ini biasanya terjadi di _browser_ Mozilla)
Validasi perlu dilakukan selain di browser (HTML5 atau Java-Script) dan
3. [X] _Input Validation_ di-server dalam bentuk
exception handling (sebagai bagian dari _best-practices_ yang salah satu manfaatnya
untuk antisipasi _injection_).
