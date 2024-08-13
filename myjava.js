
document.getElementById('decreaseByOne').onclick = function () {
    // let output = document.getElementById('displayOne');
    // output.innerText = Number(output.innerText) - 1;
    document.getElementById('displayOne').innerText = Number(document.getElementById('displayOne').innerText) - 1;
};

document.getElementById('increaseByOne').onclick = function () {
    // let output = document.getElementById('displayOne');
    // output.innerText = Number(output.innerText) + 1;
    document.getElementById('displayOne').innerText = Number(document.getElementById('displayOne').innerText) + 1;
};

document.getElementById('increaseByTwo').onclick = function () {
    // let counter = document.getElementById('displayTwo');
    // counter.innerText = Number(counter.innerText) + 2;
document.getElementById('displayOne').innerText = Number(document.getElementById('displayOne').innerText) + 2;
};

document.getElementById('decreaseByTwo').onclick = function () {
    // let counter = document.getElementById('displayTwo');
    // counter.innerText = Number(counter.innerText) - 2;
    document.getElementById('displayOne').innerText = Number(document.getElementById('displayOne').innerText) - 2;
};

document.getElementById('butt').onclick = function () {
 document.getElementById('text').innerHTML = "It is done it" ;
// let display =  document.getElementById('text');
// display.innerText = "it is";
};