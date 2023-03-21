let counterValue = 0;

const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const spanValue = document.querySelector('#value');

btnDecrement.addEventListener('click', counterDecrement);
btnIncrement.addEventListener('click', counterIncrement);

function counterDecrement(value) {
    counterValue -= 1;
    spanValue.textContent = counterValue;
}

function counterIncrement(value) {
    counterValue += 1;
    spanValue.textContent = counterValue;
}