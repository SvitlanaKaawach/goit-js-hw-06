const form = document.querySelector('.login-form');


form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;

    const FormData = {
        mail, password,
    };

    
    if (mail == "" || password == '') { return window.alert("Please, fill in all the fields!"); }
   form.reset();
}
