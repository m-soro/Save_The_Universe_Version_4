let allDivs = document.querySelectorAll(".grid-item");
let heroXaxis = ["13", "14", "15", "16"];
let heroFireAxis = ["9", "10", "11", "12"];
let alienXaxis = ["1", "2", "3", "4"];

allDivs.forEach((div) => {
  if (heroXaxis.includes(div.textContent)) {
    div.addEventListener("click", (event) => {
      let clicked = event.target.textContent;
      let adjacentDivNum = Number(clicked) - 4;

      allDivs.forEach((div) => {
        //prettier-ignore
        if (heroFireAxis.includes(div.textContent) || heroXaxis.includes(div.textContent)) {
          //prettier-ignore
            if (div.textContent !== clicked && div.textContent !== adjacentDivNum) {
            
            div.classList.remove("move");
            div.classList.remove("fire");

            event.target.classList.add("move");
            let adjacentDiv = document.querySelector(`.box${adjacentDivNum}`);
            setTimeout(() => adjacentDiv.classList.add("fire"), 500);
          }
        }
      });
    });
  }
});
