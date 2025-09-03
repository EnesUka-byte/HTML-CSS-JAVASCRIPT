
var button1 = document.getElementById("btn1");
var text1 = document.getElementById("text");

// button1.onclick = function(){
//     text1.style.color = "red";
//     text1.style.background = "blue";
//     text1.style.textAlign = "center";
//     text1.style.fontSize = "100px";
//     text1.style.padding = "20px";
    
// }

// button1.onclick = function() {
//     alert("Hello!");
// }

button1.onclick = function() {
    text1.setAttribute("class","test");
}


























var a = 50 + 50;
console.log(a);

var b = 10;
var c = 12;
console.log(b+c);

var e = 10;
var f = 10;
var rez = e + f;
console.log(rez);

var x = 2;
var y = 3;
var rez1 = x * y;
console.log(rez1);

var n = 99;
n++;
console.log(n);

var o = 101;
o--;
console.log(n);

var v = 10;
var w = 5;
console.log( v == w);

var t = 10;
var z = 10;
console.log( t != z);

function ShowMessage(){

    alert("Test!");
}

ShowMessage();


function sum(num1,num2){

    return num1 + num2;
}

console.log(sum(25,25));


function toseconds(Minutes){

    return Minutes * 60;


}

console.log(toseconds(5));

function siperfaqja(a,h) {

    return 0.5 * a * h;
}

console.log(siperfaqja(5,6))

var school = {
    name: "Digital School",
    subject: "Programming",
    students: "2000",
    year: 2004

};

school.name();


var car = {
    name: "Mercedes",
    color: "grey",
    start: function() {
        alert("Start")
    }
};
