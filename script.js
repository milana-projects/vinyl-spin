document.addEventListener("DOMContentLoaded", function () {
    // Устанавливаем стартовое время в секундах (1 час, 48 минут, 47 секунд = 6527 секунд)
    let totalSeconds = (1 * 3600) + (48 * 60) + 47;

    // Ищем наши обновленные блоки на странице
    const hoursElement = document.querySelector('.timer__hours');
    const minutesElement = document.querySelector('.timer__minutes');
    const secondsElement = document.querySelector('.timer__seconds');

    function updateTimer() {
        if (totalSeconds <= 0) {
            clearInterval(timerId);
            if (hoursElement) hoursElement.textContent = "00";
            if (minutesElement) minutesElement.textContent = "00";
            if (secondsElement) secondsElement.textContent = "00";
            return;
        }

        // Переводим общие секунды в часы, минуты и остаток секунд
        let hours = Math.floor(totalSeconds / 3600);
        let minutes = Math.floor((totalSeconds % 3600) / 60);
        let seconds = totalSeconds % 60;

        // Если число меньше 10, добавляем впереди ноль для красоты ("05" вместо "5")
        if (hoursElement) hoursElement.textContent = hours < 10 ? "0" + hours : hours;
        if (minutesElement) minutesElement.textContent = minutes < 10 ? "0" + minutes : minutes;
        if (secondsElement) secondsElement.textContent = seconds < 10 ? "0" + seconds : seconds;

        totalSeconds--; // Уменьшаем время на 1 секунду
    }

    // Запускаем тиканье каждую секунду (1000 миллисекунд)
    const timerId = setInterval(updateTimer, 1000);
});