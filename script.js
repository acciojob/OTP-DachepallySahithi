document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll(".code");

  inputs.forEach((input, index) => {
    // Assign unique IDs for testing
    input.setAttribute("id", `code-${index + 1}`);

    // Handle input typing
    input.addEventListener("input", (e) => {
      const value = e.target.value;

      if (value) {
        // Move to the next input if the current field is filled
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      }
    });

    // Handle backspace key
    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace") {
        if (!e.target.value && index > 0) {
          // Move focus to the previous input
          inputs[index - 1].focus();
        }
      }
    });

    // Ensure input fields only accept numbers
    input.addEventListener("keypress", (e) => {
      if (!/[0-9]/.test(e.key)) {
        e.preventDefault();
      }
    });
  });

  // Focus the first input field on page load
  inputs[0].focus();
});
