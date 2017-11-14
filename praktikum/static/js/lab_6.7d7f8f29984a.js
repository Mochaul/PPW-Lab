// Chatbox

$('.chat-head').click(function(){
    $('.chat-body').toggle();
});

$('#chat-textarea').val()
function keyPress(e) {
  e == e || window.event;
  if(e.keyCode == 13) {
    var text = document.getElementById('chat-textarea').value;
      document.getElementById("msg-insert").innerHTML += text + "<br>";
      document.getElementById('chat-textarea').value = null;
      return false;
  }
  return true;
}

// END

// Calculator
var print = document.getElementById('print');
var erase = false;

Math.radians = function(degrees) {
  return degrees * Math.PI / 180;
};

Math.degrees = function(radians) {
  return radians * 180 / Math.PI;
};


var go = function(x) {
    if (x === 'ac') {
        print.value = null;
        erase = false;
    } else if (x === 'eval') {
        print.value = Math.round(evil(print.value) * 10000) / 10000;
        erase = true;
    } else if (x === 'sin' || x === 'tan') {
        print.value = Math.round(evil('Math.'+x+'(Math.radians('+evil(print.value)+'))') * 10000) / 10000;
        erase = true;
    } else if (x === 'log') {
        print.value = Math.round((Math.log(evil(print.value)) * 10000) / 10000);
        erase = true;
    } else if (erase === true) {
        print.value = x;
        erase = false;
    } else {
        print.value += x;
    }
};

function evil(fn) {
    return new Function('return ' + fn)();
}
// END

// Select2
function changeTheme(x){
    $('body').css({"backgroundColor": x['bcgColor']});
    $('.text-center').css({"color": x['fontColor']});
}

if (localStorage.getItem('themes') === null){ localStorage.setItem('themes','[{"id":0,"text":"Red","bcgColor":"#F44336","fontColor":"#FAFAFA"},{"id":1,"text":"Pink","bcgColor":"#E91E63","fontColor":"#FAFAFA"},{"id":2,"text":"Purple","bcgColor":"#9C27B0","fontColor":"#FAFAFA"},{"id":3,"text":"Indigo","bcgColor":"#3F51B5","fontColor":"#FAFAFA"},{"id":4,"text":"Blue","bcgColor":"#2196F3","fontColor":"#212121"},{"id":5,"text":"Teal","bcgColor":"#009688","fontColor":"#212121"},{"id":6,"text":"Lime","bcgColor":"#CDDC39","fontColor":"#212121"},{"id":7,"text":"Yellow","bcgColor":"#FFEB3B","fontColor":"#212121"},{"id":8,"text":"Amber","bcgColor":"#FFC107","fontColor":"#212121"},{"id":9,"text":"Orange","bcgColor":"#FF5722","fontColor":"#212121"},{"id":10,"text":"Brown","bcgColor":"#795548","fontColor":"#FAFAFA"}]'); }
var themes = JSON.parse(localStorage.getItem('themes'));
if (localStorage.getItem('selectedTheme') === null) { localStorage.setItem('selectedTheme', JSON.stringify(themes[3])); }
var theme = JSON.parse(localStorage.getItem('selectedTheme'));
changeTheme(theme);

$(document).ready(function() {
    $('.my-select').select2({'data' : themes}).val(theme['id']).change();
    $('.apply-button').on('click', function(){
        theme = themes[$('.my-select').val()];
        changeTheme(theme);
        localStorage.setItem('selectedTheme',JSON.stringify(theme));
    })
});
