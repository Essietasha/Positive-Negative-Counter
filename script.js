const plusBtn = document.querySelector('.box3');
const minusBtn = document.querySelector('.box1');
const valueBtn = document.querySelector('.box2');

var myValue = 0;
function incrementValue(){
    myValue++;
    valueBtn.textContent = myValue;
    valueBtn.style.backgroundColor = 'green';
    if (myValue < 0) {
        valueBtn.style.backgroundColor = 'red';
    }else{
        valueBtn.style.backgroundColor = 'green';
}
}
function decreaseValue() {
    myValue--;
    valueBtn.textContent = myValue;
    if (myValue < 0) {
        valueBtn.style.backgroundColor = 'red';
    }else{
        valueBtn.style.backgroundColor = 'green';
}

}
plusBtn.addEventListener('click', incrementValue);
minusBtn.addEventListener('click', decreaseValue);













// for (let myVar = 0; myVar <= 10; myVar++) {
//     valueBtn.innerHTML = myVar;
// }

// function incrementValue() {
//     valueBtn.innerHTML = myVar;
//     // if (i > 1) {
//     //     valueBtn.innerHTML = i++;
//     // } else {
//     //     valueBtn.innerHTML = i - 1;
//     // }
// }