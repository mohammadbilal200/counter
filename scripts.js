let count=0;
let counterNumber = document.getElementById("counter");
function increment(){
    count++;
    counterNumber.textContent=count;
}
function decrement(){
    count--;
    counterNumber.textContent=count;
}
function reset(){
    count=0;
    counterNumber.textContent=0;
}