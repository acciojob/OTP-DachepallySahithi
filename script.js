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
        input.value = ""; // Clear the current input field
        codeInputs[index - 1].focus(); // Focus on the previous input field
      }
    }
  });
});