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
    const formData = new FormData(e.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });
}
