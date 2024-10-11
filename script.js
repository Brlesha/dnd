const textareas = document.querySelectorAll('.dynamic-textarea');
textareas.forEach(textarea => {
    textarea.addEventListener('input', () => {
        textarea.style.height = 'auto'; // Сбрасываем высоту
        textarea.style.height = textarea.scrollHeight + 'px'; // Устанавливаем высоту равной содержимому
    });
});

function perc_calc(event) {
    var perc_input = event.target.value; // Получаем значение конкретного input
    let perc_output; // Определяем переменную

    if (perc_input > 0 && perc_input <= 20) {
        perc_output = Math.floor((perc_input - 10) / 2); // Считаем результат
        if (perc_output > 0) { perc_output = '+' + perc_output; } // Корректно присваиваем результат
    } else {
        perc_output = 0; // Устанавливаем значение для else
    }

    console.log(perc_output); // Проверка в консоли

    // Отправляем результат на соответствующий <h> внутри того же блока
    event.target.closest('.perc').querySelector('.perc_value').innerHTML = perc_output;
}

// Находим все элементы с классом "perc_input" и добавляем обработчик событий
document.querySelectorAll('.perc_input').forEach(function(input) {
    input.oninput = perc_calc;
});

// Изменение цвета заднего фона

document.getElementById("colorButton").addEventListener("click", function() {
    const menu = document.getElementById("colorMenu");
    menu.classList.toggle("hidden");
});

const colorOptions = document.querySelectorAll("#colorMenu li");
const overlay = document.getElementById("overlay");

colorOptions.forEach(option => {
    option.addEventListener("click", function() {
        const color = this.getAttribute("data-color");
        overlay.style.backgroundColor = color;
        document.getElementById("colorMenu").classList.add("hidden");
    });
});

// Открытие окна для ввода своего цвета
document.getElementById("customColorOption").addEventListener("click", function() {
    document.getElementById("colorMenu").classList.add("hidden");
    document.getElementById("colorInputContainer").classList.remove("hidden");
});

// Применение пользовательского цвета
document.getElementById("applyColor").addEventListener("click", function() {
    const hexColor = document.getElementById("hexColorInput").value;
    if (/^#[0-9A-F]{6}$/i.test(hexColor)) {
        // Добавляем полупрозрачность к HEX-коду
        const rgbaColor = hexToRgba(hexColor, 0.7);
        overlay.style.backgroundColor = rgbaColor;
        document.getElementById("colorInputContainer").classList.add("hidden");
    } else {
        alert("Введите правильный HEX-код цвета (например, #FF5733)");
    }
});

// Функция для преобразования HEX в RGBA
function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Закрытие меню при клике вне него
document.addEventListener("click", function(event) {
    const menu = document.getElementById("colorMenu");
    const colorInputContainer = document.getElementById("colorInputContainer");
    if (!menu.contains(event.target) && !document.getElementById("colorButton").contains(event.target)) {
        menu.classList.add("hidden");
    }
    if (!colorInputContainer.contains(event.target) && event.target.id !== "customColorOption") {
        colorInputContainer.classList.add("hidden");
    }
});

//сохранение карты игрока

document.getElementById("savePngButton").addEventListener("click", function() {
    // Захватываем весь документ
    alert('я пока не понимаю как это реализовать( \n                     С уважением, Лев')
});
// 

//тройной чекбокс 

// Возможные состояния
const states = ['empty', 'filled', 'filled-bordered'];

// Добавляем делегирование событий на весь документ или контейнер чекбоксов
document.addEventListener("click", function(event) {
    const checkbox = event.target.closest('.custom-checkbox');

    // Проверяем, что клик был именно по элементу с классом custom-checkbox
    if (checkbox) {
        let currentStateIndex = states.findIndex(state => checkbox.classList.contains(state));

        // Удаляем текущее состояние
        checkbox.classList.remove(states[currentStateIndex]);

        // Переходим к следующему состоянию
        currentStateIndex = (currentStateIndex + 1) % states.length;

        // Применяем новое состояние
        checkbox.classList.add(states[currentStateIndex]);
    }
});