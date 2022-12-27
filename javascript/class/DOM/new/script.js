const todoTarget =document.querySelector("#todoTarget");
const testTarget =document.querySelector("#testTarget");
const inputTarget =document.querySelector("#inputTarget");

console.log(testTarget.childNodes);
const firstLi = todoTarget.querySelectorAll("li")[0];
console.log(firstLi);
// inputTarget.addEventListener("change", function(e){
//     testTarget.innerHTML= e.target.value;

// })
// document.addEventListener("event")
inputTarget.addEventListener("keypress", function(e){
    if(e.key === "Enter")
    testTarget.innerHTML= e.target.value;

})
const firstCB = document.querySelectorAll
