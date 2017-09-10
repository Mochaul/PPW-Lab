# Lab 2: Pengenalan _Django Framework_

CSGE602022 - Web Design & Programming (Perancangan & Pemrograman Web) @
Faculty of Computer Science Universitas Indonesia, Odd Semester 2017/2018

## Checklist

1. Menampilkan Halaman _Landing Page_
    1. [X] Isi variabel `landing_page_content` sehingga menjadi _Landing Page_ yang layak (Min 30 karakter)
    2. [X] Buatlah konfigurasi URL dalam _file_ `lab_2/urls.py` sehingga _Landing Page_ bisa diakses dengan URL `<HEROKU_APP_HOST>/lab-2/`
        > contoh : djangoppw.herokuapp.com/lab-2/
2. Membuat _Django Apps_ baru bernama *lab_2_addon* lalu lakukan konfigurasi pada `views.py`
    1. [X] Buatlah sebuah `app` baru (Hint: Jalankan _command_ `python manage.py help`)
    2. [X] Isilah `views.py` pada `app` baru dengan kode berikut, lalu ubah variabel yang belum sesuai

```python
    from django.shortcuts import render
    from lab_1.views import mhs_name, birth_date
    #Create a list of biodata that you wanna show on webpage:
    #[{'subject' : 'Name', 'value' : 'Igor'},{{'subject' : 'Birth Date', 'value' : '11 August 1970'},{{'subject' : 'Sex', 'value' : 'Male'}
    #TODO Implement
    bio_dict = [{'subject' : 'Name', 'value' : mhs_name},\
    {'subject' : 'Birth Date', 'value' : birth_date.strftime('%d %B %Y')},\
    {'subject' : 'Sex', 'value' : ''}]

    def index(request):
        response = {}
        return render(request, 'description_lab2addon.html', response)
```
4. Berikanlah sebuah _folder templates_ pada `apps lab_2_addon` untuk menampung semua _file_ HTML yang
 akan dijalankan didalam `apps lab_2_addon`:
    1. [X] Buatlah _folder templates_ di dalam `apps lab_2_addon`
    2. [X] Pindahkan _file_ `lab_2/templates/description_lab2addon.html` ke dalam _folder templates_
     yang ada di `apps lab_2_addon`
5. Buatlah sebuah konfigurasi URL sehingga `description_lab2addon.html` bisa ditampilkan sesuai dengan yang diharapkan
    1. [X] Ubah file `urls.py` yang ada didalam _folder_ `lab_2_addon` dan `praktikum` sehingga URL `<HEROKU_APP_HOST>/lab-2-addon/`
    bisa menampilkan halaman `description_lab2addon.html`
    2. [X] Ubah _section_ INSTALLED_APPS sehingga `apps lab_2_addon` dapat dikenali sebagai _Django Apps_ yang aktif (Tanpa melakukan langkah ini
    maka halaman `description_lab2addon.html` tidak bisa ditampilkan melalui URL yang sudah dibuat di `urls.py`)
    3. [X] Tampilkan halaman _Landing Page_ jika ada _request_ yang datang pada Root URL _website_ kalian
        >Ketika mengakses `<HEROKU_APP_HOST>/` maka _Landing Page_ akan tampil (Hint: Gunakan RedirectView)
    4. [X] Isilah _file_ `lab_2_addon/tests.py` dengan cara memindahkan `class Lab2AddonUnitTest` beserta semua
    _Test Case_ yang ada lalu aktifkan _Test Case_ tersebut dengan menghilangkan `skip` di atas setiap _Test Case_.
    Import semua `library`, `function` atau `variabel` yang dibutuhkan agar _Test Case_ bisa dijalankan

6. Pastikan kalian memiliki _Code Coverage_ yang baik
    1. [X] Jika kalian belum melakukan konfigurasi untuk menampilkan _Code Coverage_ di Gitlab maka lihat langkah `Show Code Coverage in Gitlab`
    di [README.md](https://gitlab.com/PPW-2017/Draft-Lab/blob/master/README.md)
    2. [X] Pastikan _Code Coverage_ kalian 100%
