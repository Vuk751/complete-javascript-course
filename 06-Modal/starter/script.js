'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++) {
    btnsShowModal[i].addEventListener('click', openModal);
}

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

// UVEK GRUNI PONAVLJANJA U VARIJABLU!
// GLEDAJ DA DEFINISES STVARI KROZ VARIJABLU

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Keydown event
document.addEventListener('keydown', function (e) {
    console.log(e.key);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

// MOJA BALJEZGARIJA
// const selectHidden = document
//     .querySelectorAll('.hidden')
//     .forEach(hid => hid.style.display);

// document.querySelectorAll('.show-modal').forEach(ses =>
//     ses.addEventListener('click', function () {
//         document
//             .querySelectorAll('.hidden')
//             .forEach(hid => (hid.style.display = 'block'));
//     })
// );

// document.querySelector('.close-modal').addEventListener('click', function () {
//     document
//         .querySelectorAll('.hidden')
//         .forEach(hid => (hid.style.display = 'none'));
// });
