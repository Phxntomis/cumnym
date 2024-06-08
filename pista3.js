let step = 0;

function handleButtonClick(number) {
    if (number === 7 && step === 0) {
        step = 1;
    } else if (number === 9 && step === 1) {
        window.location.href = 'inicio.html';
    } else {
        alert('Presiona los botones en el orden correcto.');
    }
}
