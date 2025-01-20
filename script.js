function moveToNext(currentInput) {
    if (currentInput.value.length === 1) {
        const nextInput = currentInput.nextElementSibling;
        if (nextInput) {
            nextInput.focus();
        }
    }
}

function handleBackspace(currentInput) {
    if (event.keyCode === 8 && currentInput.value === '') {
        const prevInput = currentInput.previousElementSibling;
        if (prevInput) {
            prevInput.focus();
            prevInput.value = '';
        }
    }
}