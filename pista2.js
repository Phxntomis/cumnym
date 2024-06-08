let step = 0;

function handleButtonClick(number) {
    if (number === 0 && step === 0) {
        step = 1;
    } else if (number === 1 && step === 1) {
        window.location.href = 'pista3.html';
    } else {
        alert('Presiona los botones en el orden correcto.');
    }
}