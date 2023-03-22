const fontChangeSize = document.getElementById('font-size-control');
const textchange = document.getElementById('text');

fontChangeSize.addEventListener('input', (event) => {
    textchange.style.fontSize = event.currentTarget.value + 'px'
});