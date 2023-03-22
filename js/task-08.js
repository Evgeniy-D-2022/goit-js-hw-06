const formLogin = document.querySelector('.login-form');

formLogin.addEventListener('submit', onFormEvent);

function onFormEvent(event) {
    event.preventDefault();
    const formEl = event.currentTarget.elements;
    const formEmail = formEl.email;
    const formPassword = formEl.password;
    const formData = {
        formEmail,
        formPassword
    };
    console.log(formData);

    if (formEmail.value === '' || formPassword.value === '') {
        alert('All fields must be filled');
    } else {
        alert('The form submitted');
        console.log(`Email: ${formEmail.value} and password ${formPassword.value}`);
    }
    event.currentTarget.reset();
};


