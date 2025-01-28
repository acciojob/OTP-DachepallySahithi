const inputs = document.querySelectorAll(".code");

inputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    const value = e.target.value;
    if (value) {
      // Move to the next input field
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (!e.target.value && index > 0) {
        // Move to the previous input field
        inputs[index - 1].focus();
      }
    }
  });

  // Ensure focus starts at the first input field on load
  if (index === 0) {
    input.setAttribute("id", "code-1");
    input.focus();
  } else {
    input.setAttribute("id", `code-${index + 1}`);
  }
});
