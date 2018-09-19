var json1=[
    {"id":"111","name":"jack"},
    {"id":"222","name":"rose"},
    {"id":"333","name":"tony"},
    {"id":"444","name":"jackson"},
    {"id":"555","name":"tonyma"},
]

// var proshow = document.querySelectorAll('.proshow div')
var proshow = document.querySelector('.proshow');

for (let i = 0; i < json1.length; i++) {
    var newdiv = document.createElement('div');
    newdiv.setAttribute('class','pro');
    newdiv.innerHTML = json1[i]["id"];
    newdiv.onclick = function () {
        var storage = window.localStorage;
        localStorage.setItem("detial",JSON.stringify([json1[i]]));
        window.location.href='detail.html'
      }
    proshow.appendChild(newdiv);
}

$.ajax({
    type: "g",
    url: "http://192.168.2.3",
    data: "data",
    dataType: "dataType",
    success: function (response) {
        
    }
});