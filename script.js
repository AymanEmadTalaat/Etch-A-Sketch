//After you open the webpage you will get an alert message
// The message tells you to enter the number of squares per side for the new grid
//for example 16, after that you'll have a brand new 16x16 grid pop up
//The total amount of pixels used won't change (e.g., 600px wide)
//You can enter 1(1x1 grid) up to 100(100x100 grid)
//You'll also have the option to clear the grid and enter a new one
//There is an option to remove the borders
//Each time you hover over a square, it will change to a different color randomly

const container = document.querySelector(".container");
const txt = document.querySelector("#txt");
const enterGrid = document.querySelector("#enter-grid");
const clear = document.querySelector("#clear");
const toggle = document.querySelector("#toggle");

function welcome() {
  alert(
    "Welcome to Etch-a-sketch!, Enter the number of squares per side for the new grid"
  );
}

welcome();

enterGrid.addEventListener("click", () => {
  container.textContent = " ";
  chooseGrid();
});

/* Choose the number of squares per side */
function chooseGrid() {
  let txtValue = txt.value;

  /* The horizontal divs */
  for (let i = 1; i <= txtValue; i++) {
    if (txtValue > 100) {
      alert("Invalid value");
      break;
    } else if (txtValue == 1) {
      break;
    }

    let div = document.createElement("div");

    /* The vertical divs */
    for (let j = 1; j <= txtValue; j++) {
      let divTwo = document.createElement("div");
      div.appendChild(divTwo);
      divTwo.style.cssText = "border-bottom: 1px solid #000; flex: 1;";

      function randomColor() {
        let color = [];
        for (let i = 0; i < 3; i++) {
          color.push(Math.floor(Math.random() * 256));
        }
        return "rgb(" + color.join(", ") + ")";
      }

      /* change the div's color to a random color when hovering */
      divTwo.addEventListener("mouseover", () => {
        divTwo.style.backgroundColor = randomColor();
      });

      /* Remove the border for the vertical divs */
      toggle.addEventListener("click", () => {
        divTwo.style.border = "none";
      });
    }
    container.appendChild(div);

    /* Remove the border for the horizontal divs */
    toggle.addEventListener("click", () => {
      div.style.border = "none";
    });
  }
}

/* Clear the existing grid */
clear.addEventListener("click", () => {
  container.textContent = " ";
  txt.value = " ";
});
