// ------------------------- COUNTER'S FUNCTIONALITY : ----------------------------

// ---------------- First Approach (With Multiple Functions) ---------------

// ------------ First Method : --------------

// let count = 0;
// const counter = document.getElementById("counter");

// function Increase(){
//     count++;
//     counter.innerText = count;
// }
// function Decrease(){
//     count--;
//     counter.innerText = count;
// }
// function Reset(){
//     count = 0;
//     counter.innerText = count;
// }

// -------------------------------------------------------------------------------------------------

// ---------------- First Approach (With Multiple Functions) ---------------

// ------------ Second Method : --------------

// const decreaseBtn = document.getElementById("decreaseBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const counter = document.getElementById("counter");

// let count = 0;

// decreaseBtn.onclick = function () {
//   count--;
//   counter.textContent = count;
//   console.log("Decrease Function =>" , count);
//   // counter.innerText = count;
//   // counter.innerHTML = count;
// };
// resetBtn.onclick = function () {
//   count = 0;
//   counter.textContent = count;
//   console.log("Reset Function =>", count);
// };
// increaseBtn.onclick = function () {
//   count++;
//   counter.textContent = count;
//   console.log("Increase Function =>", count);
// };

// -------------------------------------------------------------------------------------------------

// ------------- Second Approach (With Single Function) ---------------

const counter = document.getElementById("counter");
let count = 0;

function Count(btnValue){

    if (btnValue === "increase") {
      count++;
    } else if (btnValue === "decrease") {
      count--;
    } else {
      count = 0;
    }

    counter.innerText = count;
    // counter.textContent = count;
}


// -------------------------------------------------------------------------------------------------
