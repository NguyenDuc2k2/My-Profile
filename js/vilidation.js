const checkValue = (idInput, error) => {
    let value = document.getElementById(idInput).value;
    const inputError = document.getElementById(error);
    let regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    if (value.trim() === '') {
        if (idInput === 'name') {
            inputError.innerHTML = 'Họ tên không được để trống'
        } else if (idInput === 'email') {
            inputError.innerHTML = ' Email không được để trống'
        } else if (idInput === 'message') {
            inputError.innerHTML = 'Lời nhắn không được để trống'
        } else {
            inputError.innerHTML = 'Chủ đề không được để trống'
        }
        return false;
    } else {
        if (idInput === 'email' && !regexEmail.test(value)) {
            inputError.innerHTML = 'Email chưa đúng';
            return false;
        } else {
            inputError.innerHTML = '';
            return true;
        }
    }
}

document.getElementById('name').onblur = () => {
    checkValue('name', 'name__errror');
}

document.getElementById('email').onblur = () => {
    checkValue('email', 'email__error');
}

document.getElementById('message').onblur = () => {
    checkValue('message', 'error__message');
}

document.getElementById('subject').onblur = () => {
    checkValue('subject', 'subject__error');
}

const checkValueAll = () => {
    let checkValid =
        checkValue('name', 'name__errror') &
        checkValue('subject', 'subject__error') &
        checkValue('email', 'email__error') &
        checkValue('message', 'error__message');
    if (checkValid === 1) {
        return true;
    } else {
        return false;
    }
}

document.getElementById('contactMessage').onsubmit = (e) => {
    e.preventDefault();
    if (checkValueAll()) {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
        document.getElementById('subject').value = '';
    } else {
        return;
    }
}
