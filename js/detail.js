
    var a = document.querySelector('.pro-id')
    var b = document.querySelector('.pro-title');    
    
    var storage = window.localStorage;

    var json1 = JSON.parse(localStorage.getItem("detial"));
    
    console.log(json1)

    a.innerHTML = json1[0]["id"]
    b.innerHTML = json1[0]["name"]


    localStorage.removeItem("detial")
