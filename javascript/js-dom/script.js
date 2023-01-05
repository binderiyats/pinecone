// console.log(document.getElementById("listParent"));
// const firstLi = document.querySelector("#listParent > li");
// console.log(firstLi);
// const allLis = document.querySelectorAll("li");
// console.log(allLis);

// firstLi.innerHTML = "<a href='#'>Link</a>";
// firstLi.innerHTML += `Text`;
// firstLi.textContent = "Updated";
// firstLi.style.backgroundColor = "red";

// const img = document.querySelector("img");
// const imgSrc = img.src;
// img.src = "updated";

// console.log(imgSrc);

// const btn = document.querySelector("button");

// function btnHandler() {
//   firstLi.style.backgroundColor = "green";
// }

// btn.addEventListener("click", btnHandler);
let count = 0;
const counter = () => {
  count++;
  const holder = document.querySelector("p");
  holder.innerHTML = count;
};

const btn = document.querySelector(".count-btn");
btn.addEventListener("click", counter);
