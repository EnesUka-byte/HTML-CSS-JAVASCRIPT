var programmlang = ['HTML', 'CSS', 'JavaScript', 'Python', 'C#'];

// console.log(programmlang);

programmlang.push('Java');
console.log(programmlang);

programmlang.pop();
console.log(programmlang);

programmlang.unshift('Test');
console.log(programmlang);

programmlang.shift();
console.log(programmlang);

programmlang.splice(0, 4, 'C++');
console.log(programmlang);

console.log(Math.random()*100);
console.log (Math.floor(Math.random()*100));

var students = ['Gerti', 'Joni', 'Deon']

var [s1,s2,s3] = students;

console.log(s2);
console.log(s1);

var numbers = [1,2,3,4,5,6,7,8,9];

var[one, two, ...otherNumbers] = numbers;
console.log(one);
console.log(two);
console.log(otherNumbers);

