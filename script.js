function moveToNext(currentInput) {
    const nextInput = currentInput.nextElementSibling;
    if (nextInput) {
        try {
            nextInput.focus();
            console.log(`Focus moved to next input: ${nextInput.id}`); 
        } catch (error) {
            console.error(`Error moving focus: ${error}`);
        }
    } else {
        console.log("No next input field found.");
    }
}