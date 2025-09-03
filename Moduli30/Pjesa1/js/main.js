// var x = 5;

// if (x>2) {

//     console.log("True")
// } else {
//     console.log("False")
// }

var button = document.getElementById("btn_id");
var text = document.getElementById("text_id");
var input = document.getElementById("input_id");

button.onclick = function() {
    if(input.value>10) {
        text.innerHTML = "inputi eshte me i madh se 10"
    }

    else if(input.value<10) {
        text.innerHTML = "inputi eshte me i vogel se 10"
    }

    else {
        text.innerHTML = "inputi eshte ekuivalent me 10"
    }
}

// button.onclick = function(){
//     text.innerHTML = input.value;
// }


var btn2 = document.querySelector("#btn2_id");
var ans = document.querySelector("#answer");
var input1 = document.querySelector("#input1_id");
var input2 = document.querySelector("#input2_id");

btn2.addEventListener('click', function() {
    ans.innerHTML = parseInt(input1.value) + parseInt(input2.value);
});