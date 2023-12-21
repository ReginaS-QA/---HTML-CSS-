/* Это объявление переменной, мы нашли элемент по тегу */
var btn = document.getElementById('btn_id');

/* Тут на элемент навешиваем обрабочик, который ждёт клика и тогда запустит логику */
btn.addEventListener('click', (event) => {
	console.log('log: Что-то нажато');
})

