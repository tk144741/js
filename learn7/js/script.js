const isAgreed = document.querySelector("#check");
const btn = document.querySelector("#btn");

isAgreed.addEventListener("change", () => {
  console.log(btn.disabled);
    btn.disabled = !isAgreed.checked;
});

