function generator(length, complexity) {
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let allChars = '';

    switch (complexity) {
        case 1:
            allChars = lowerCase;
            break;
        case 2:
            allChars = lowerCase + upperCase;
            break;
        case 3:
            allChars = lowerCase + upperCase + numbers;
            break;
        case 4:
            allChars = lowerCase + upperCase + numbers + specialChars;
            break;
        default:
            throw new Error('Invalid complexity level. Choose between 1 and 4.');
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    return password;
}

function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function generatePassword(){
    const PASSWORDS = document.getElementById('passwords');
    PASSWORDS.innerHTML = ""
    const LENGTH = document.getElementById('length').value;
    const NUMBER = document.getElementById('number').value;
    for (let i = 0; i < NUMBER; i++) {
        PASSWORDS.innerHTML += "<p>" + escapeHtml(generator(LENGTH, 4)) + "</p>"
    }
}

