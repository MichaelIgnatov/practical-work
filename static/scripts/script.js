function addInterest() {
    const div = document.createElement('div');
    div.classList.add('interest-input');
    div.innerHTML = `
        <input type="checkbox" name="interests" value="">
        <input type="text" placeholder="Введите интерес" oninput="this.previousElementSibling.value = this.value">
        <span class="error"></span>
    `;
    document.getElementById('additionalInterests').appendChild(div);  
}

function updateCount() {
    const comments = document.getElementById('comments');
    const count = comments.value.length;
    document.getElementById('charCount').innerText = `${count}/200`;
}

function validateForm() {
    let isValid = true;

    // Сброс ошибок
    document.getElementById('nameError').innerText = '';
    document.getElementById('ageError').innerText = '';
    document.getElementById('interestError').innerText = '';
    document.getElementById('commentError').innerText = '';

    // Валидация имени
    const name = document.getElementById('name').value.trim();
    if (!name) {
        document.getElementById('nameError').innerText = 'Имя не должно быть пустым.';
        isValid = false;
    }

    // Валидация возраста
    const age = document.getElementById('age').value;
    if (age < 1 || age > 120) {
        document.getElementById('ageError').innerText = 'Возраст должен быть числом от 1 до 120.';
        isValid = false;
    }

    // Валидация пола
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.getElementById('ageError').innerText = 'Пожалуйста, выберите пол.';
        isValid = false;
    }

    // Валидация интересов
    const interests = document.querySelectorAll('input[name="interests"]:checked');
    if (interests.length === 0) {
        document.getElementById('interestError').innerText = 'Выберите хотя бы один интерес.';
        isValid = false;
    }

    // Валидация комментариев
    const comments = document.getElementById('comments').value;
    if (comments.length > 200) {
        document.getElementById('commentError').innerText = 'Комментарий не должен превышать 200 символов.';
        isValid = false;
    }

    // Если форма валидна, выводим данные
    if (isValid) {
        displayData(name, age, gender.value, interests, comments);
    }

    return false;
}

function displayData(name, age, gender, interests, comments) {
    const output = document.getElementById('output');
    output.innerHTML = `
        <h2>Введённые данные:</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Возраст:</strong> ${age}</p>
        <p><strong>Пол:</strong> ${gender}</p>
        <p><strong>Интересы:</strong> ${Array.from(interests).map(i => i.value).join(', ')}</p>
        <p><strong>Комментарии:</strong> ${comments}</p>
    `;
}