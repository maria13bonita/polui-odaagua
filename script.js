// Função para alternar o modo de alto contraste
function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

// Função para aumentar o tamanho do texto
function increaseTextSize() {
    const currentSize = window.getComputedStyle(document.body).fontSize;
    const newSize = parseFloat(currentSize) * 1.2 + 'px';
    document.body.style.fontSize = newSize;
}

// Função para diminuir o tamanho do texto
function decreaseTextSize() {
    const currentSize = window.getComputedStyle(document.body).fontSize;
    const newSize = parseFloat(currentSize) * 0.8 + 'px';
    document.body.style.fontSize = newSize;
}
