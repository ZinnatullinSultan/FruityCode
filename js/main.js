const btnAuth = document.querySelectorAll('.header__btn');
const popup = document.querySelector('.popup');
const close = document.querySelectorAll('.popup__close');
const lostPassword = document.querySelector('.popup__lost-password');
const authCard = document.querySelector('.popup__card--auth');
const recoveryCard = document.querySelector('.popup__card--recovery');
const registrationCard = document.querySelector('.popup__card--registration');
const backBtn = document.querySelector('.popup__link--back');
const toRegBtn = document.querySelector('.popup__link--to-reg');
const toAuthBtn = document.querySelector('.popup__link--to-auth');
const previewBtn = document.querySelectorAll('.popup__preview');
const previewYes = document.querySelectorAll('.preview--yes');
const previewNo = document.querySelectorAll('.preview--no');

btnAuth.forEach((button) => {
  button.addEventListener('click', function () {
    popup.classList.add('popup--active');
  });
});
close.forEach((button) => {
  button.addEventListener('click', function () {
    popup.classList.remove('popup--active');
  });
});

lostPassword.addEventListener('click', function () {
  authCard.classList.add('hidden');
  recoveryCard.classList.remove('hidden');
});
backBtn.addEventListener('click', function () {
  authCard.classList.remove('hidden');
  recoveryCard.classList.add('hidden');
});
toRegBtn.addEventListener('click', function () {
  authCard.classList.add('hidden');
  registrationCard.classList.remove('hidden');
});
toAuthBtn.addEventListener('click', function () {
  authCard.classList.remove('hidden');
  registrationCard.classList.add('hidden');
});

previewBtn[0].addEventListener('click', function () {
  previewYes[0].classList.toggle('hidden');
  previewNo[0].classList.toggle('hidden');
});
previewBtn[1].addEventListener('click', function () {
  previewYes[1].classList.toggle('hidden');
  previewNo[1].classList.toggle('hidden');
});
previewBtn[2].addEventListener('click', function () {
  previewYes[2].classList.toggle('hidden');
  previewNo[2].classList.toggle('hidden');
});