const inputs = document.querySelectorAll('.code');

    inputs.forEach((input, index) => {
      input.addEventListener('input', (e) => {
        if (e.target.value.length > 0 && index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      });

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !input.value && index > 0) {
          inputs[index - 1].focus();
        }
      });

      input.addEventListener('paste', (e) => {
        e.preventDefault();
        const pasteData = e.clipboardData.getData('text').slice(0, inputs.length);
        pasteData.split('').forEach((char, i) => {
          if (inputs[i]) {
            inputs[i].value = char;
          }
        });
        const nextInput = pasteData.length - 1;
        if (inputs[nextInput]) {
          inputs[nextInput].focus();
        }
      });
    });