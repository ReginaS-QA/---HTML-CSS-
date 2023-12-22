/* Это объявление переменной, мы наши кнопку по тегу */
var btn = document.querySelector('.btn');
/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
btn.addEventListener('click', () => {
	console.log('log: Что-то нажато');
	window.open("https://github.com/ReginaS-QA", "_blank");
})

var bYellow = document.querySelector('.bttn');

function changeBttn() {
	if(bYellow.classList.contains("bttn")) {
		bYellow.classList.replace("bttn", "bttn_pressed");
	} else {
		bYellow.classList.replace("bttn_pressed", "bttn");
	}
}

bYellow.addEventListener('click', () => {
	changeBttn();
})

