// ---------------------------- First Approach ---------------------------


// Counter Program Functionality :

const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const counter = document.getElementById("counter");

let count = 0;

decreaseBtn.onclick = function (){
    count--;
    // counter.textContent = count;
    // counter.innerText = count;
    counter.innerHTML = count;
    console.log(count);
}
resetBtn.onclick = function (){
    count = 0;
    counter.textContent = count;
    console.log(count);
}
increaseBtn.onclick = function (){
    count++;
    counter.textContent = count;
    console.log(count);
}


// ---------------------------- Second Approach ---------------------------


// Counter Program Functionality :

// const decreaseBtn = document.getElementById("decreaseBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const counter = document.getElementById("counter");

// let count = 0;

















