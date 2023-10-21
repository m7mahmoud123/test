let prof = document.getElementsByClassName("fa-solid fa-user-doctor")[0]
let card = document.getElementsByClassName("profile")[0]
let ser = document.getElementsByClassName("fa-solid fa-magnifying-glass")[0]
let input = document.getElementsByClassName("input")[0]
let sideIcon = document.getElementsByClassName("fa-solid fa-bars")[0]
let sideBar = document.getElementsByClassName("side-bar")[0]

let remove = document.getElementsByClassName("fa-solid fa-delete-left")[0]

prof.onclick = function(){
    card.classList.toggle("active")
    
    
}

let search = document.getElementById("search")

search.onclick = function(){
    input.classList.toggle("hide")
    card.classList.remove("active")
}

sideIcon.onclick = function(){

    sideBar.classList.toggle("newSide")
    document.body.classList.toggle("padding")

}

remove.onclick = function(){
    sideBar.classList.add("newSide")
    document.body.classList.toggle("padding")
    
}




let btn = document.getElementsByClassName("btn")[0]
let userName = document.getElementsByClassName("user-name")[0]
let user = document.getElementsByClassName("user")[0]
let userName1 = document.getElementsByClassName("user-name1")[0]

let name = document.getElementsByClassName("name")[0]

let thank = document.getElementsByClassName("thank")[0]

btn.onclick = function(){

    userName.innerHTML=user.value
    name.innerHTML = user.value
    userName1.innerHTML= user.value
    thank.classList.toggle("see")
    function save(){

        localStorage.setItem("user", user.value)
    }

    save();

    function save1(){
        localStorage.setItem("username" , user.value)
    }

    save1();


    
    function save2(){
        localStorage.setItem("username1" , user.value)
    }

    save2();



    
}












function show(){
    user.value = localStorage.getItem("user")
}

show();


function show1(){
    userName.innerHTML = localStorage.getItem("username")
}

show1();




function show2(){
    userName1.innerHTML = localStorage.getItem("username1")
}

show2();






