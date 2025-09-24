// var programmlang = ['HTML', 'CSS', 'JavaScript', 'Python', 'C#'];

// // console.log(programmlang);

// programmlang.push('Java');
// console.log(programmlang);

// programmlang.pop();
// console.log(programmlang);

// programmlang.unshift('Test');
// console.log(programmlang);

// programmlang.shift();
// console.log(programmlang);

// programmlang.splice(0, 4, 'C++');
// console.log(programmlang);

// console.log(Math.random()*100);
// console.log (Math.floor(Math.random()*100));

// var students = ['Gerti', 'Joni', 'Deon']

// var [s1,s2,s3] = students;

// console.log(s2);
// console.log(s1);

// var numbers = [1,2,3,4,5,6,7,8,9];

// var[one, two, ...otherNumbers] = numbers;
// console.log(one);
// console.log(two);
// console.log(otherNumbers);

// var x=5;

// if(x>2){
//     console.log("x value is greater than two");

// }else{
//     console.log("x value is less than two");
// }

// var input=document.getElementById("input_id");
// var button=document.getElementById("btn_id");
// var text=document.getElementById("text_id");

// button.onclick=function(){
//     text.innerHTML=input.value;
// }

// var input1=document.getElementById("input1_id");
// var input2=document.getElementById("input2_id");
// var btn2=document.getElementById("btn2_id");
// var ans=document.getElementById("answer");

// btn2.addEventListener("click",function(){
//     ans.innerHTML=parseInt(input1.value)+parseInt(input2.value);

// })
var i = 0;
for (i = 0; i < 5; i++) {
    console.log("value is: " + i);
}


var j = 0;
while(j<5){
    console.log(j);
    j=j+1;
}

var i = 6;

do{
    i=i+1;
    console.log(i);

}while(i<10);


var names = ['Steve','Bill','Mark'];
var y;

for(y of names){
    console.log(y);
}

var person={
    firstname:"John",
    lastName:"Doe",
    age:25

}

var z;

for(z in person){
    console.log(person[z]);
}