for (let i = 0; i < 64; i++) {
  let divSquare = document.createElement("div");

  divSquare.className = "square";
  divSquare.style.width = "50px";
  divSquare.style.height = "50px";

  document.querySelector(".container").appendChild(divSquare);
}
