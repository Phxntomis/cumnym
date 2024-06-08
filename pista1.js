let step = 0;

function handleButtonClick(number) {
    if (number === 2 && step === 0) {
        step = 1;
    } else if (number === 3 && step === 1) {
        window.location.href = 'pista2.html';
    } else {
        alert('Presiona los botones en el orden correcto.');
    }
}