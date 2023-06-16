// selecting elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');

// const allSections = document.querySelectorAll('.section');
// console.log(document.getElementsByClassName('btn'));
// const allButtons = document.getElementsByTagName('button');
// document.getElementById('section--1');

// creating/inserting elements
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved blabla...';
// message.innerHTML =
//   'We use cookies for improved blabla... <button class="btn btn--close-cookie">Got it!</button';

// header.append(message);

// header.after(message);

// delete elements
// document.querySelector('.btn--close-cookie').addEventListener('click', () => {
//   message.remove();
// });

// const template = '<div>Hello there</div>';
// message.insertAdjacentHTML('afterend', template);

// Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '103%';
// message.style.height = `${parseFloat(getComputedStyle(message).height) + 30}px`;

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
// const logo = document.querySelector('.nav__logo');

// console.log(logo.className);
// console.log(logo.getAttribute('src'));

// logo.alt = 'Minimalist Logo';
// logo.setAttribute('company', 'bankist');

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// Data attributes
// console.log(logo.dataset.versionNumber);

// Classes
// logo.classList.add('c');
// logo.classList.remove('c');
// logo.classList.toggle('c');
// logo.classList.contains('c');

// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('addEventListener: Great');

//   h1.removeEventListener('mouseenter', alertH1);
// };

// h1.addEventListener('mouseenter', alertH1);

// h1.onmouseenter = function (e) {
//     alert('addEventListener: Great');
//   };

// Event bubbling
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document
//   .querySelector('.nav__link')
//   .addEventListener('click', function (event) {
//     this.style.backgroundColor = randomColor();
//     console.log('LINK:', event.target, event.currentTarget);

//     // event.stopPropagation();
//   });

// document
//   .querySelector('.nav__links')
//   .addEventListener('click', function (event) {
//     this.style.backgroundColor = randomColor();
//     console.log('CONTAINER:', event.target, event.currentTarget);
//   });

// document.querySelector('.nav').addEventListener('click', function (event) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV:', event.target, event.currentTarget);
// });

// const h1 = document.querySelector('h1');

// downwards
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.children);

// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// upwards

// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// sideways
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });

document.addEventListener('DOMContentLoaded', event => {
  console.log('html parsed:', event);
});

window.addEventListener('load', event => {
  console.log('page loaded:', event);
});

// window.addEventListener('beforeunload', function (event) {
//   event.preventDefault();
//   console.log(event);
//   event.returnValue = '';
// });
