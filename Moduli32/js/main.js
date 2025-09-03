for(var i=0; i<10; i++) {
    console.log("Vlera e variables i eshte:"+i);
}


console.log("----------------------------------------------------------------------");

var person = {firstname:"Enes", lastname:"Uka", mosha:14};
var text = "";
var z;

for(z in person) {
    text += person[z];
}

console.log(text);

console.log("----------------------------------------------------------------------");

var names = ['Joni','Enes','Gerti','Adonis','Blerti','Geati']

var x;


for(x of names) {
    document.write(x + '<br>');
    console.log(x);
}

console.log("----------------------------------------------------------------------");

var a = 0;
do {


    a += 1;
    console.log(a);
}
while(a<5);

console.log("----------------------------------------------------------------------");

var b=0;
while(b<3) {
    b += 1;
}

console.log(b);


console.log("----------------------------------------------------------------------");

var test = ['1','2','3','4','5','6','7','8','9','10'];
var i;

for (i=0; i<students.length, i++;) {
    document.write(students[i]+'<br>')
}