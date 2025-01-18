const codeInputs = document.querySelectorAll(".code");

codeInputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    if (input.value !== "") {
      if (index < codeInputs.length - 1) {
        codeInputs[index + 1].focus();
      }
    }
  });

  input.addEventListener("keydown", (event) => {
    if (event.key === "Backspace") {
      if (index > 0) {
        codeInputs[index - 1].focus();
        codeInputs[index - 1].value = "";
      }
    }
  });
});