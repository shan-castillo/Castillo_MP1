// let menu = document.getElementById("menu-icon");
// let navbar = document.querySelector(".navbar");

// menu.onclick = function() {
//     menu.classList.toggle("bx-x");
//     navbar.classList.toggle("active");
// };

// window.onscroll = function() {
//     menu.classList.remove("bx-x");
//     navbar.classList.remove("active");
// };

// var btn = $(".btn");

// $(btn).hover(
//     function() {
//         console.log("grah");
// },
//     function() {

// });
//leftover when the website used to have dynamic scaling with @media rules
  const currencySelect = document.getElementById("currency-select");
  const phpCells = document.querySelectorAll("td.php");
  const usdCells = document.querySelectorAll("td.usd");

  currencySelect.addEventListener("change", function () {
    const selected = this.value;

    phpCells.forEach(td => {
      td.style.display = (selected === "php") ? "table-cell" : "none";
    });

    usdCells.forEach(td => {
      td.style.display = (selected === "usd") ? "table-cell" : "none";
    });
  });