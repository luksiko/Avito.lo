'use strict';
const modalAdd = document.querySelector('.modal__add'),
	modalItem = document.querySelector('.modal__item'),
	addAd = document.querySelector('.add__ad'),
	modalBtnSubmit = document.querySelector('.modal__btn-submit'),
	modalSubmit = document.querySelector('.modal__submit'),
	catalog = document.querySelector('.catalog');

addAd.addEventListener('click', () => {
	modalAdd.classList.remove('hide');
	modalBtnSubmit.disabled = true;
});

catalog.addEventListener('click', (event) => {
	const target = event.target;
	if (target.closest('li') || target === modalItem) {
		console.log(target);
		modalItem.classList.remove('hide');
		modalSubmit.reset();
	}
});

function close(item) {
	item.addEventListener('click', (event) => {
		const target = event.target;
		if (target.classList.contains('modal__close') || target === item) {
			item.classList.add('hide');
			modalSubmit.reset();
		}
	});
}

function escape(item) {
	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') {
			item.classList.add('hide');
		}
	});
}

close(modalItem);
close(modalAdd);
escape(modalItem);
escape(modalAdd);
