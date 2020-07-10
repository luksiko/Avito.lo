'use strict';

const dataBase = [];

const modalAdd = document.querySelector('.modal__add'),
	modalItem = document.querySelector('.modal__item'),
	addAd = document.querySelector('.add__ad'),
	modalBtnSubmit = document.querySelector('.modal__btn-submit'),
	modalSubmit = document.querySelector('.modal__submit'),
	catalog = document.querySelector('.catalog'),
	modalBtnWarning = document.querySelector('.modal__btn-warning');

const elementsModalSubmit = [...modalSubmit.elements].filter((elem) => elem.tagName !== 'BUTTON');


const escape = (event) => {
	if (event.key === 'Escape') {
		modalItem.classList.add('hide');
		modalAdd.classList.add('hide');
		document.removeEventListener('keydown', escape);
	}
};

const closeModal = function (event) {
	const target = event.target;
	if (target.closest('.modal__close') || target === this) {
		this.classList.add('hide');
		if (this === modalAdd) {
			modalSubmit.reset();
		}
	}
};
// Проверяем на введенные символы и разблокируем кнопку если введено
modalSubmit.addEventListener('input', () => {
	const validForms = elementsModalSubmit.every((elem) => elem.value);
	modalBtnSubmit.disabled = !validForms;
	modalBtnWarning.style.display = validForms ? 'none' : '';
});
modalSubmit.addEventListener('submit', (event) => {
	event.preventDefault();
	// создаем обьявления
	const itemObj = {};
		for (const elem of elementsModalSubmit) {
			itemObj[elem.name] = elem.value;
		}
	dataBase.push(itemObj);
	modalSubmit.reset();
	console.log(dataBase);
});

addAd.addEventListener('click', () => {
	modalAdd.classList.remove('hide');
	modalBtnSubmit.disabled = true;
	document.addEventListener('keydown', escape);
});

modalItem.addEventListener('click', closeModal);
modalAdd.addEventListener('click', closeModal);

catalog.addEventListener('click', (event) => {
	const target = event.target;
	if (target.closest('.card') || target === modalItem) {
		modalItem.classList.remove('hide');
		modalSubmit.reset();
		document.addEventListener('keydown', escape);
	}
});
