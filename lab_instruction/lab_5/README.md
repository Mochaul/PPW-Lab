# Lab 5: Pengenalan _CSS_

CSGE602022 - Web Design & Programming (Perancangan & Pemrograman Web) @
Faculty of Computer Science Universitas Indonesia, Odd Semester 2017/2018

## Checklist

1.  Membuat CSS yang sesuai untuk halaman TODO List
    1. [ ] Tambahkan class bootstrap pada navbar, agar navbar static diatas.
    2. [ ] Load object `Todo` pada `views.py` kemudian masukan kedalam response.
    3. [ ] Buatlah tag section dengan `id=‘my-list’` pada lab_5.html.
    4. [ ] Buatlah sebuah tag div dengan `class=‘flex’` didalam section my-list.
    5. [ ] Buatlah child div dengan `class=‘flex-item’` dari flex.
    6. [ ] Lakukan looping data `todo` yang sudah di load pada `views.py` kedalam flex-item. Data `TODO List` yang akan dirender pada flex-item harus memiliki title, created_date dan description.
    7. [ ] Tambahkan rule css untuk div yang telah dibuat menggunakan display flex, implementasikan sendiri. **Dilarang menggunakan css framework untuk flex.** Berikut adalah guide yang mungkin akan membantu.
    https://css-tricks.com/snippets/css/a-guide-to-flexbox/
    8. [ ] Untuk tampilan desktop >= 768 px susun agar terdapat empat flex-item dalam satu baris, jika lebih maka akan dipindahkan ke baris selanjutnya.
    [ScreenShot 1](https://drive.google.com/file/d/0BzEo5TOpZj0VSXIyVTN1NkZHTXc/view?usp=sharing)
    9. [ ] Untuk tampilan mobile < 768 px hanya terdapat satu flex-item pada setiap baris.
    [ScreenShot 2](https://drive.google.com/file/d/0BzEo5TOpZj0VcDNTTXFkb0hwblU/view?usp=sharing)
    10. [ ] Pastikan rule css yang telah dibuat responsive untuk ukuran mobile, dibawah 768px. Gunakan fitur Toggle Device Mode pada browser.

2.  Pastikan kalian memiliki _Code Coverage_ yang baik
    1. [ ]  Jika kalian belum melakukan konfigurasi untuk menampilkan _Code Coverage_ di Gitlab maka lihat langkah `Show Code Coverage in Gitlab` di [README.md](https://gitlab.com/PPW-2017/ppw-lab/blob/master/README.md).
    2. [ ] Pastikan _Code Coverage_ kalian 100%.

###  Challenge Checklist
Cukup kerjakan salah satu nya saja:
1.  [ ] Tambahkan efek `box-shadow` dan animasi bergerak keatas sejauh `5px` pada setiap flex-item ketika di `hover`.
2.  [ ] Implementasikan fungsi delete `todo` untuk menghapus `todo` yang sudah dibuat dengan menekan sebuah button pada  setiap flex-item.
3.  [ ] Tambahkan efek `hover` untuk _button delete_, sehingga _button delete_ hanya akan tampil ketika salah satu `to do` di `hover`.
4.  [ ] Buatlah _Functional Test_ dan _Unit Test_ untuk melakukan _Testing_ tombol `delete`.
5.  [ ] Masukkan kode berikut kedalam `lab_5/tests.py` class `Lab5FunctionalTest` method `test_input_todo`
, lalu _solve_ Test `test_input_todo` yang sudah ditambahkan kode berikut :

    ```python
        # check the returned result
            assert 'Berhasil menambahkan Todo' in selenium.page_source
<<<<<<< HEAD
    ```

### Additional Info

Untuk implementasi lengkap semua _Checklist_ bisa dilihat di [sini](https://igun-lab.herokuapp.com/lab-5/)

Credit by [@EdisonTantra](https://gitlab.com/EdisonTantra), [@falsewaly](https://gitlab.com/falsewaly),
[@fajrinajiseno](https://gitlab.com/fajrinajiseno), and [@glory.finesse](https://gitlab.com/glory.finesse).

Verified by [@hafiyyan94](https://gitlab.com/hafiyyan94) and [@KennyDharmawan](https://gitlab.com/KennyDharmawan)
=======
    ```
>>>>>>> f1756ed5c1035108ef18d7d4cf4783ebd1b5757a
