document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.num, .operation, #equal, #clear');
    const clearHistoryBtn = document.getElementById('clearHistory');
    const powerToggle = document.getElementById('powerToggle');
    const historyList = document.getElementById('history');
    const calcWrapper = document.getElementById('calcWrapper');
    const photo = document.getElementById('photo');

    let currentInput = '';
    let history = JSON.parse(localStorage.getItem('history')) || [];
    let isOn = false;

    // Функция отображения истории
    const renderHistory = () => {
        historyList.innerHTML = '';
        history.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            historyList.appendChild(li);
        });
    };

    // Обновление отображения дисплея
    const updateDisplay = () => {
        display.value = currentInput || '0';
    };

    // Управление состоянием калькулятора (вкл/выкл)
    const togglePower = () => {
        isOn = !isOn;
        powerToggle.textContent = isOn ? 'Выключить калькулятор' : 'Включить калькулятор';

        // Управление видимостью компонентов
        calcWrapper.classList.toggle('hidden', !isOn);
        photo.classList.toggle('hidden', isOn);

        if (!isOn) {
            currentInput = '';
            updateDisplay();
        }
    };

    // Привязка событий к кнопкам калькулятора
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (!isOn) return;
            handleInput(button.textContent, button.id);
        });
    });

    // Функция обработки ввода
    const handleInput = (input, id = null) => {
        if (id === 'clear') {
            currentInput = '';
        } else if (id === 'equal' || input === '=') {
            try {
                const result = eval(currentInput);
                history.push(`${currentInput} = ${result}`);
                if (history.length > 5) history.shift();
                localStorage.setItem('history', JSON.stringify(history));
                renderHistory();
                currentInput = result.toString();
            } catch {
                currentInput = 'Ошибка';
            }
        } else {
            currentInput += input;
        }
        updateDisplay();
    };

    // Поддержка ввода с клавиатуры
    document.addEventListener('keydown', (event) => {
        if (!isOn) return;

        if (/^[0-9+\-*/.]$/.test(event.key)) {
            // Числа и операции
            handleInput(event.key);
        } else if (event.key === 'Enter') {
            // Клавиша Enter (равно)
            handleInput('=', 'equal');
        } else if (event.key === 'Backspace') {
            // Удаление последнего символа
            currentInput = currentInput.slice(0, -1);
            updateDisplay();
        } else if (event.key === 'Escape') {
            // Полная очистка ввода
            handleInput('', 'clear');
        }
    });

    // Очистка истории
    clearHistoryBtn.addEventListener('click', () => {
        if (!isOn) return;
        history = [];
        localStorage.setItem('history', JSON.stringify(history));
        renderHistory();
    });

    // Начальное состояние: калькулятор выключен
    renderHistory();
    calcWrapper.classList.add('hidden');
    photo.classList.remove('hidden');

    // Событие на включение/выключение калькулятора
    powerToggle.addEventListener('click', togglePower);
});

document.addEventListener('DOMContentLoaded', function () {
    const photo = document.getElementById('photo');
    const ratingMenu = document.getElementById('ratingMenu');
    const ratingSlider = document.getElementById('ratingSlider');
    const sliderValue = document.getElementById('sliderValue');
    const rateButton = document.getElementById('rateButton');
    const fullScreenPhoto = document.getElementById('fullScreenPhoto');
    const fullscreenImage = document.getElementById('fullscreenImage');

    // Обработчик клика по фото — открытие/закрытие меню
    photo.addEventListener('click', function () {
        ratingMenu.style.display = (ratingMenu.style.display === 'none' || ratingMenu.style.display === '') ? 'block' : 'none';
    });

    // Устанавливаем значение ползунка на 20 по умолчанию
    ratingSlider.value = 20;

    // Обработчик изменения ползунка
    ratingSlider.addEventListener('input', function () {
        let value = ratingSlider.value;

        // Если значение меньше 20, то возвращаем его на 20
        if (value < 20) {
            ratingSlider.value = 20;
        }

        // Обновляем отображаемое значение рядом с ползунком
        sliderValue.textContent = ratingSlider.value;
    });

    // Обработчик кнопки "Оценить" — отправка AJAX-запроса
    rateButton.addEventListener('click', function () {
        const rating = ratingSlider.value;

        // Вымышленный URL для отправки данных
        const url = 'https://example.com/api/rate';

        // Данные для отправки
        const data = {
            rating: rating
        };

        // Отправка AJAX-запроса с помощью fetch
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.ok) {
                    alert('Оценка успешно отправлена!');
                } else {
                    alert('Произошла ошибка при отправке оценки.');
                }
            })
            .catch(error => {
                console.error('Ошибка:', error);
                alert('Произошла ошибка при отправке оценки.');
            });

        // Открытие изображения на весь экран
        fullScreenPhoto.style.display = 'flex';
    });

    // Закрытие модального окна с изображением при клике на него
    fullScreenPhoto.addEventListener('click', function () {
        fullScreenPhoto.style.display = 'none';
    });
});