// FB initiation function
window.fbAsyncInit = () => {
  FB.init({
    appId      : '161866164414597',
    cookie     : true,
    xfbml      : true,
    version    : 'v2.11'
  });

  // implementasilah sebuah fungsi yang melakukan cek status login (getLoginStatus)
  // dan jalankanlah fungsi render di bawah, dengan parameter true jika
  // status login terkoneksi (connected)

  // Hal ini dilakukan agar ketika web dibuka dan ternyata sudah login, maka secara
  // otomatis akan ditampilkan view sudah login
  FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        render(true);
      }
      else if (response.status === 'not_authorized') {
        render(false);
      }
      else {
        render(false);
      }
  });
};

// Call init facebook. default dari facebook
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Fungsi Render, menerima parameter loginFlag yang menentukan apakah harus
// merender atau membuat tampilan html untuk yang sudah login atau belum
// Ubah metode ini seperlunya jika kalian perlu mengganti tampilan dengan memberi
// Class-Class Bootstrap atau CSS yang anda implementasi sendiri
const render = (loginFlag) => {
  if (loginFlag) {
    // Jika yang akan dirender adalah tampilan sudah login

    // Memanggil method getUserData (lihat ke bawah) yang Anda implementasi dengan fungsi callback
    // yang menerima object user sebagai parameter.
    // Object user ini merupakan object hasil response dari pemanggilan API Facebook.
    getUserData(user => {
      // Render tampilan profil, form input post, tombol post status, dan tombol logout
      $('#lab8').html(
        '<div class="user-profile">' +
          '<div class="cover"><img src="'+ user.cover.source +'" width="851px"/></div>' +
          '<div class="picture"><img src="' + user.picture.data.url + '"/></div>' +
          '<div class="name">' + user.name + '</div>' +
          '<div id="logout-btn">' + 
            '<button class="btn btn-primary logout" onclick="facebookLogout()">Logout</button>' +
          '</div>' +
          '<div class="about">' +
            '<div>' +
              '<img src="https://png.icons8.com/user/win10/25/000000"> <b>About Me</b>' +
              '<div>' + user.about + '</div>' +
            '</div>' +
            '<div><img src="https://png.icons8.com/message-filled/win10/25/000000"> <b>E-mail</b>' +
              '<div>' + user.email + '</div>' +
            '</div>' +
            '<div><img src="https://png.icons8.com/gender/win10/25/000000"> <b>Gender</b>' + 
              '<div>' + capitalize(user.gender) + '</div>' +
            '</div>' +
          '</div>' +
          '<div class="well">' +
            '<form class="form-horizontal" role="form">' +
              '<div class="form-group" style="padding:14px;">' +
              '<textarea id="postInput" class="form-control" placeholder="What\'s on your mind?"></textarea>' +
              '</div>' +
              '<button class="btn btn-primary pull-right" type="button" onclick="postStatus()">Post</button>' +
            '</form>' +
          '</div>' +
          '<div class="status"></div>' +
        '</div>'
      );

      // Setelah merender tampilan di atas, dapatkan data home feed dari akun yang login
      // dengan memanggil method getUserPosts yang kalian implementasi sendiri.
      // Method itu harus menerima parameter berupa fungsi callback, dimana fungsi callback
      // ini akan menerima parameter object feed yang merupakan response dari pemanggilan API Facebook
      getUserPosts(feed => {
        feed.data.map(value => {
          // Render feed, kustomisasi sesuai kebutuhan.
          if (value.message) {
            var parsedDate = moment(value.created_time).tz("Asia/Jakarta").fromNow();
            $(".status").append(
                '<div class="list-status">' +
                  '<div class="mini-photo">' +
                      '<img class = "img-circle" id="status-photo" src="' + picture +'" style="width:50px;">' +
                      '<strong id="user-name">' + name + '</strong>' +
                  '</div>' +
                  '<div class="statuses">' +
                      value.message  +
                  '</div>' +
                  '<div class="status-date">' +
                      parsedDate +
                 '</div>' +
                '</div>'
            );
          }
        });
      });
    });
  } else {
    // Tampilan ketika belum login
    $('#lab8').html(
      '<div id="login-btn">' + 
        '<button class="btn btn-primary btn-lg login" onclick="facebookLogin()">Login with Facebook</button>' +
      '</div>'
    );
  }
};

const facebookLogin = () => {
  // TODO: Implement Method Ini
  // Pastikan method memiliki callback yang akan memanggil fungsi render tampilan sudah login
  // ketika login sukses, serta juga fungsi ini memiliki segala permission yang dibutuhkan
  // pada scope yang ada. Anda dapat memodifikasi fungsi facebookLogin di atas.
  FB.login(function(response){
     console.log(response);
     render(true);
  }, {scope:'public_profile,user_posts,publish_actions,user_about_me,email'})
};

const facebookLogout = () => {
  // TODO: Implement Method Ini
  // Pastikan method memiliki callback yang akan memanggil fungsi render tampilan belum login
  // ketika logout sukses. Anda dapat memodifikasi fungsi facebookLogout di atas.
  FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        FB.logout();
        render(false);
      }
  });
};

// TODO: Lengkapi Method Ini
// Method ini memodifikasi method getUserData di atas yang menerima fungsi callback bernama fun
// lalu merequest data user dari akun yang sedang login dengan semua fields yang dibutuhkan di 
// method render, dan memanggil fungsi callback tersebut setelah selesai melakukan request dan 
// meneruskan response yang didapat ke fungsi callback tersebut
// Apakah yang dimaksud dengan fungsi callback?
const getUserData = (fun) => {
  FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        FB.api('/me?fields=id,name,about,email,gender,cover,picture.width(168).height(168)', 'GET', function(response){
          console.log(response);
          if (response && !response.error) {
            /* handle the result */
            picture = response.picture.data.url;
            name = response.name;
            fun(response);
          }
          else {
            alert("Something went wrong");
          }
        });
      }
  });
};

const getUserPosts = (fun) => {
  // TODO: Implement Method Ini
  // Pastikan method ini menerima parameter berupa fungsi callback, lalu merequest data Home Feed dari akun
  // yang sedang login dengan semua fields yang dibutuhkan di method render, dan memanggil fungsi callback
  // tersebut setelah selesai melakukan request dan meneruskan response yang didapat ke fungsi callback
  // tersebut
  FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        FB.api('/me/posts', 'GET', function(response){
          console.log(response);
          if (response && !response.error) {
            /* handle the result */
            fun(response);
          }
          else {
            alert("Something went wrong");
          }
        });
      }
  });
};

const postFeed = (message) => {
  // Todo: Implement method ini,
  // Pastikan method ini menerima parameter berupa string message dan melakukan Request POST ke Feed
  // Melalui API Facebook dengan message yang diterima dari parameter.
   FB.api('/me/feed', 'POST', {message:message});
   render(true);
};

const postStatus = () => {
  const message = $('#postInput').val();
  $('#postInput').val("");
  postFeed(message);
};

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.substring(1, str.length);
}

var picture, name;
