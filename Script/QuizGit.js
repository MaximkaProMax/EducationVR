// Создаем модальное окно
const modal = document.createElement('div');
modal.style.display = 'none';
modal.style.position = 'fixed';
modal.style.zIndex = '1';
modal.style.left = '0';
modal.style.top = '0';
modal.style.width = '100%';
modal.style.height = '100%';
modal.style.overflow = 'auto';
modal.style.backgroundColor = 'rgba(0,0,0,0.4)';
modal.style.backdropFilter = 'blur(5px)'; // Добавляем размытие
modal.style.opacity = '0'; // Начальная прозрачность для анимации
modal.style.transition = 'opacity 0.5s'; // Добавляем анимацию

const modalContent = document.createElement('div');
modalContent.style.backgroundColor = '#fefefe';
modalContent.style.margin = '10% auto';
modalContent.style.padding = '2vh';
modalContent.style.border = '1px solid #888';
modalContent.style.width = '30%';
modalContent.style.height = '50%';
modalContent.style.maxHeight = '50vh';
modalContent.style.borderRadius = '20px'; // Добавляем закругление углов
modalContent.style.textAlign = 'center'; // Центрируем текст
modalContent.style.fontSize = '2.5vh'; // Увеличиваем размер шрифта
modalContent.style.fontFamily = "'Montserrat', sans-serif"; // Изменяем шрифт на Montserrat
modalContent.style.boxShadow = '0 0px 10px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'; // Добавляем тень

modal.appendChild(modalContent);
document.body.appendChild(modal);

// Выбираем форму
const quizForm = document.querySelector('#quiz');

quizForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const answers = ['b', 'b', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'];
    let score = 0;

    for (let i = 1; i <= answers.length; i++) {
        const answer = event.target[`q${i}`].value;

        if (answer === answers[i - 1]) {
            score++;
        }
    }

    const percentage = Math.round(score / answers.length * 100);

    // Добавляем жирное выделение для "Поздравляем" и добавляем место для эмодзи конфети
    modalContent.innerHTML = `<br><strong>Поздравляем!</strong><br>
    <br>Вы набрали <strong> ${score} из ${answers.length} </strong> (${percentage}%) правильных ответов.<br>
    <img src="TestImages/confetti_emoji.png" alt="Тут картинка конфети" style="height: 20vh; max-height: 60vh; margin: 12%;">`;
    modal.style.display = 'block';
    setTimeout(() => modal.style.opacity = '1', 0); // Запускаем анимацию
});

// Закрываем модальное окно при клике вне его
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.opacity = '0'; // Запускаем анимацию исчезновения
        setTimeout(() => modal.style.display = 'none', 500); // Удаляем окно после анимации
    }
}
