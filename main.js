function display(key){
    document.getElementById("screen").value += key;
}
function reset(){
    const clear = document.getElementById("screen");
    clear.value = "";
}
function result(){
    let details = document.getElementById("screen").value;
    let result = eval(details);
    document.getElementById("screen").value = result;
}
function delet(){
    const details = document.getElementById("screen");
   details.value = details.value.slice(0, details.value.length -1);
}
function theme1(){
    let cLear= document.getElementsByClassName("blue");
for(i = 0; i < cLear.length; i++){
    cLear[i].style.backgroundColor = "hsl(225, 21%, 49%)";
    cLear[i].style.boxShadow = "0px 2px 0px 0px hsl(224, 28%, 35%)";
    cLear[i].addEventListener("mouseover" ,function hover(){
        this.style.backgroundColor = "hsl(225, 21%, 49%)";
    })
    cLear[i].addEventListener("mouseout" ,function hover(){
        this.style.backgroundColor = " hsl(225, 21%, 49%)";
    })
}
let numberBtns= document.getElementsByClassName("numbers");
for(x of numberBtns){
    x.style.backgroundColor ="hsl(30, 25%, 89%)";
    x.style.boxShadow ="0px 2px 0px 0px hsl(28, 16%, 65%) ";
    x.style.color = "hsl(221, 14%, 31%)";
    x.addEventListener("mouseover", function hover(){
        this.style.backgroundColor = "white " ;
    })
    x.addEventListener("mouseout",function normal(){
        this.style.backgroundColor ="hsl(30, 25%, 89%)";
    })
}
let  screen = document.getElementById("screen");
screen.style.backgroundColor = "hsl(224, 36%, 15%)";
screen.style.color = "white";
let main = document.getElementById("content");
main.style.backgroundColor = ("hsl(223, 31%, 20%)");
let equal = document.getElementById("red");
equal.style.backgroundColor = "hsl(6, 63%, 50%)";
equal.style.boxShadow ="0px 2px 0px 0px   hsl(6, 70%, 34%)";
equal.addEventListener("mouseover", function hover(){
    this.style.backgroundColor =" hsl(6, 70%, 34%)";
})
equal.addEventListener("mouseout", function remove(){
    this.style.backgroundColor = "hsl(6, 63%, 50%)";
})
document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
document.getElementById("theme").style.color = "white";
let labels = document.getElementsByTagName("label");
for(x of labels){
    x.style.color = "white";
}
document.getElementById("calc").style.color = "white";
}

function theme2(){
    let cLear= document.getElementsByClassName("blue");
for(i = 0; i < cLear.length; i++){
    cLear[i].style.backgroundColor = "hsl(185, 42%, 37%)";
    cLear[i].style.boxShadow = "0px 2px 0px 0px  hsl(185, 58%, 25%) ";
    cLear[i].addEventListener("mouseover" ,function hover(){
        this.style.backgroundColor = "hsl(176, 100%, 44%)";
    })
    cLear[i].addEventListener("mouseout" ,function hover(){
        this.style.backgroundColor = "  hsl(185, 42%, 37%)";
    })
}
let numberBtns= document.getElementsByClassName("numbers");
for(x of numberBtns){
    x.style.backgroundColor =" hsl(45, 7%, 89%)";
    x.style.boxShadow ="0px 2px 0px 0px hsl(35, 11%, 61%) ";
    x.style.color = " hsl(198, 20%, 13%)";
    x.addEventListener("mouseover", function hover(){
        this.style.backgroundColor = "white " ;
    })
    x.addEventListener("mouseout",function normal(){
        this.style.backgroundColor =" hsl(45, 7%, 89%)";
    })
}
let  screen = document.getElementById("screen");
screen.style.backgroundColor = "hsl(0, 0%, 93%)";
screen.style.color = "hsl(198, 20%, 13%)";
let main = document.getElementById("content");
main.style.backgroundColor = ("hsl(0, 5%, 81%)");
let equal = document.getElementById("red");
equal.style.backgroundColor = " hsl(25, 98%, 40%)";
equal.style.boxShadow ="0px 2px 0px 0px  hsl(25, 99%, 27%)";
equal.addEventListener("mouseover", function hover(){
    this.style.backgroundColor ="hsl(29, 95%, 39%)";
})
equal.addEventListener("mouseout", function remove(){
    this.style.backgroundColor = "hsl(25, 98%, 40%)";
})
document.body.style.backgroundColor = " hsl(0, 0%, 90%)";
document.getElementById("theme").style.color = "hsl(198, 20%, 13%)";
let labels = document.getElementsByTagName("label");
for(x of labels){
    x.style.color = "hsl(198, 20%, 13%)";
}
document.getElementById("calc").style.color = "hsl(198, 20%, 13%)";
}

function theme3(){
    let cLear= document.getElementsByClassName("blue");
for(i = 0; i < cLear.length; i++){
    cLear[i].style.backgroundColor = " hsl(268, 47%, 21%)";
    cLear[i].style.boxShadow = "0px 2px 0px 0px hsl(290, 70%, 36%)";
    cLear[i].addEventListener("mouseover" ,function hover(){
        this.style.backgroundColor = "hsl(285, 91%, 52%)";
    })
    cLear[i].addEventListener("mouseout" ,function hover(){
        this.style.backgroundColor = "  hsl(268, 47%, 21%)";
    })
}
let numberBtns= document.getElementsByClassName("numbers");
for(x of numberBtns){
    x.style.backgroundColor ="hsl(281, 89%, 26%)";
    x.style.boxShadow ="0px 2px 0px 0px hsl(285, 91%, 52%) ";
    x.style.color = " hsl(52, 100%, 62%)";
    x.addEventListener("mouseover", function hover(){
        this.style.backgroundColor = "hsl(290, 70%, 36%) " ;
    })
    x.addEventListener("mouseout",function normal(){
        this.style.backgroundColor ="hsl(281, 89%, 26%)";
    })
}
let  screen = document.getElementById("screen");
screen.style.backgroundColor = "hsl(268, 71%, 12%)";
screen.style.color = "hsl(52, 100%, 62%)";
let main = document.getElementById("content");
main.style.backgroundColor = ("hsl(268, 71%, 12%)");
let equal = document.getElementById("red");
equal.style.backgroundColor = "hsl(176, 100%, 44%)";
equal.style.boxShadow ="0px 2px 0px 0px  hsl(177, 92%, 70%)";
equal.addEventListener("mouseover", function hover(){
    this.style.backgroundColor ="hsl(177, 92%, 70%)";
})
equal.addEventListener("mouseout", function remove(){
    this.style.backgroundColor = "hsl(176, 100%, 44%)";
})
document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
document.getElementById("theme").style.color = "hsl(52, 100%, 62%)";
let labels = document.getElementsByTagName("label");
for(x of labels){
    x.style.color = "hsl(52, 100%, 62%)";
}
document.getElementById("calc").style.color = "hsl(52, 100%, 62%)";
}