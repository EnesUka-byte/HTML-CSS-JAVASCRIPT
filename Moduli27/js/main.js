// function showMessage() {

//     alert("Hello!");

// }

// showMessage();

// function sum(num1, num2) {

//     return num1 + num2;
// }

// console.log(sum(10,100));

// var arrowFunction = () => alert('test');
// arrowFunction();

// var testFunction = name => alert('hello' + name )
// testFunction("Enes");

// // var localVar = "Digital School";

// // function dsFunction() {

// //     var localVar = "Digital School";
// //     alert(localVar);
// // }

// // dsFunction();

// // alert(localVar);

// // function toSeconds(min) {

// //     return min * 60;
// // }

// // console.log(toSeconds(20));

// function sipTrekendeshit( a, h) {

//     return 0.5 * a * h;

// }

// console.log(sipTrekendeshi(5,7));


// var car = {name:"BMW", color:"red", year:2020};

// var school = {
//     name:"Shkolla Digjitale",
//     subject:"Programim",
//     student:2000
// }


// alert(car .name);


var car = {
    name:"Mercedes",
    color:"red",
    year:2020,
    start:function()
 {
    alert("start");
}
}

car.start();

var computer = new Object();

computer.name = "Lenovo";
computer.RAM = "16GB";
computer.CPU = "iNTEL cORE";

computer.type = function() {

    return this.name + "," + this.RAM + "," + this.CPU;
}

delete computer.name;

