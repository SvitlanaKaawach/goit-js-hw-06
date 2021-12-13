const form = document.querySelector('.login-form');
let alertMessage = '';

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const mail = formElements.email.value;
    const password = formElements.password.value;

    const FormData = {
        mail,
        password,
    };

    
    if (mail == '' || password == '', mail == '' && password == '')
    { message = alert("Please, fill in all the fields!\nЗаповніть будь ласка усі поля форми!" ); }
    form.reset();
    console.log(FormData);
}
 