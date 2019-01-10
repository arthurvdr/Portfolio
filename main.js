'use strict';

let burger = document.getElementById("burger-button");

burger.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle("open");
  burger.classList.toggle("open");
});


$("#switch").on("click", () => {
    if($("#switch").prop("checked")) {
        $(".wrapper").addClass("dark");
    } else {
      $(".wrapper").removeClass("dark");
    }
});