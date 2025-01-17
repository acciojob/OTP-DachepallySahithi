const otpFields = document.querySelectorAll('.code');

otpFields.forEach((field, index) => {
  field.addEventListener('input', () => {
    if (field.value.length === 1 && index < otpFields.length - 1) {
      otpFields[index + 1].focus();
    }
  });

  field.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && field.value === '') {
      if (index > 0) {
        otpFields[index - 1].focus();
      }
    }
  });
});
