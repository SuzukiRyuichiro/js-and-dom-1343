const list = document.querySelector("#players");
const jedi = list.querySelector(".red");

console.log(jedi);

const countries = document.querySelectorAll("#fifa-wins li");

countries.forEach((country) => {
  console.log(country.innerText);
});

const soccerList = document.querySelector("#fifa-wins");
soccerList.insertAdjacentHTML("beforeend", "<li>France (2 wins)");

const input = document.querySelector("#input");
console.log(input.value);
console.log(input.id);
