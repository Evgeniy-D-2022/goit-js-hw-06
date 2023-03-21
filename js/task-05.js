const refs = {
  input: document.querySelector('#name-input'),
  spanName: document.querySelector('#name-output')
  }
refs.input.addEventListener('input', onInputChange);
  function onInputChange (event) {
    if (event.currentTarget.value.trim()!== "") {
      refs.spanName.textContent = event.currentTarget.value;
    }
  }