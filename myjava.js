
document.getElementById('decreaseByOne').onclick = function () {
    let output = document.getElementById('displayOne');
    output.innerText = Number(output.innerText) - 1;
};

document.getElementById('increaseByOne').onclick = function () {
    let output = document.getElementById('displayOne');
    output.innerText = Number(output.innerText) + 1;
};

document.getElementById('increaseByTwo').onclick = function () {
    let counter = document.getElementById('displayTwo');
    counter.innerText = Number(counter.innerText) + 2;
};

document.getElementById('decreaseByTwo').onclick = function () {
    let counter = document.getElementById('displayTwo');
    counter.innerText = Number(counter.innerText) - 2;
};