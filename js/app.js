window.onload = function(){ 

console.log("Hello World");

var myName = "陈";
console.log(myName);

alert("This is Glenn's website");





var name = document.getElementsByClassName("Name");
var i;
for (i = 0; i < name.length; i++) {
    
    name[i].onclick = function nameChang(){

        var text = this.innerHTML
        if (text === "Glenn Chen"){
            this.innerHTML = "陈";
        }
        else{
            this.innerHTML = "Glenn Chen";
        }  
    }
}


var aboutMe = document.getElementById('aboutME');
var content = document.getElementById('content');
aboutMe.onclick = function isHidden(){
        content.style.display = (content.style.display == 'none')?'block':'none';
  }



var myImage = document.querySelector('img'); // Or #profileImg
myImage.onclick = function imgChange() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === './img/face1.png') {
      myImage.setAttribute ('src','./img/face2.png');
    } else {
      myImage.setAttribute ('src','./img/face1.png');
    }
}

myImage.onmouseover = function mOver(){
    var ghLink = document.getElementById('myGH');
    ghLink.style.display = 'block';
}
myImage.onmouseout = function mOut(){
    var ghLink = document.getElementById('myGH');
    ghLink.style.display = 'none';
}


var buttonContactMe = document.getElementById("buttonContactMe");

buttonContactMe.onclick = function myFunction() {
    var x = document.getElementById('myContactForm');
    if (x.style.display === 'none') {
        x.style.display = 'block';
        } else {
            x.style.display = 'none';
        }
}


//style="display:none"




}