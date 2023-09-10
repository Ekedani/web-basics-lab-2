document.querySelector('.task-form').addEventListener('submit', onFormSubmit);

const formValidators = {
    name: new RegExp('^\\p{L}+\\s\\p{L}\\.\\p{L}\\.$'),
    group: new RegExp('^\\p{L}{2}-\\d{2}$'),
    variant: new RegExp('^\\d{2}$'),
    phone: new RegExp('^\\(\\d{3}\\)-\\d{3}-\\d{2}-\\d{2}$'),
    idCard: new RegExp('^\\p{L}{2}\\s№\\d{6}$'),
}

function onFormSubmit(e) {
    e.preventDefault();
    resetValidity(e.target);
    const formData = new FormData(e.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });
    const errors = validateForm(formDataObject);
    if (Object.keys(errors).length) {
        for (const key in errors) {
            e.target.querySelector(`[name="${key}"]`).classList.add('invalid');
        }
    }
}

function resetValidity(formElement) {
    formElement.querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));
}

function validateForm(formDataObject) {
    const errors = {};
    console.log(formDataObject);
    for (const key in formDataObject) {
        if (!formValidators[key]) continue;
        if (!formValidators[key].test(formDataObject[key])) {
            errors[key] = 'Invalid value';
        }
    }
    console.log(errors);
    return errors;
}
