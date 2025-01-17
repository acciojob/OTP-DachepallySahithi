const codeInputs = document.querySelectorAll('.code');

codeInputs.forEach((input, index) => {
  input.addEventListener('input', (event) => {
    const value = event.target.value;

    // If input is not empty and next input exists
    if (value && index < codeInputs.length - 1) {
      // Focus on the next input field
      codeInputs[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (event) => {
    // If backspace is pressed and there is a previous input field
    if (event.key === 'Backspace' && index > 0) {
      // Clear the current input field
      event.target.value = '';
      // Focus on the previous input field
      codeInputs[index - 1].focus();
    }
  });
});