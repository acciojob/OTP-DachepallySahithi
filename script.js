function moveToNext(current) {
    if (current.value.length === current.maxLength) {
        var next = current.nextElementSibling;
        if (next) {
            next.focus();
        }
    }
}

function handleBackspace(current) {
    if (current.value === '') {
        var prev = current.previousElementSibling;
        if (prev) {
            prev.focus();
        }
    }
}