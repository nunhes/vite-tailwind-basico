// selecciona o contedor de palabras no documento HTML.
const wrapper = document.querySelector(".words");

// selecciona tódalas palabras individuais dentro do contedor.
const words = wrapper.querySelectorAll("span");

// selecciona a palabra actual dentro d contedor.
const currentWord = wrapper.querySelector("span.current");

// obtén o ancho de cada palabra e almacenao nun array.
const wordsWidths = Array.from(words).map((word) => word.offsetWidth);

// atopa o ancho máximo entre tódalas palabras.
const maxWordsWidth = Math.max(...wordsWidths);

// define as clases para a palabra actual e a seguinte.
const CURRENT_CLASS = "current";
const NEXT_CLASS = "next";

// establece a propiedade CSS '--width' co ancho da palabra actual para o contedor.
wrapper.style.setProperty("--width", `${currentWord.offsetWidth}px`);

// establece a propiedade CSS '--width-mobile' co ancho máximo de todalas palabras para o contedor.
wrapper.style.setProperty("--width-mobile", `${maxWordsWidth}px`);

// executa a función cada 1500 milisegundos (1.5 segundos).
setInterval(() => {
  // atopa a palabra actual e a seguinte dentro do contedor.
  const currentWord = wrapper.querySelector("span.current");
  const nextWord = wrapper.querySelector("span.next");

  // atopa a palabra seguinte á seguinte (si existe, do contrario, volve á primeira palabra).
  const nextNextWord = nextWord.nextElementSibling
    ? nextWord.nextElementSibling
    : wrapper.firstElementChild;

  // quita as clases 'current' e 'next' da palabra actual e a seguinte, respectivamente.
  currentWord.classList.remove(CURRENT_CLASS);
  nextWord.classList.remove(NEXT_CLASS);

  // agrega a clase 'current' á seguinte palabra e 'next' á palabra seguinte á seguinte.
  nextWord.classList.add(CURRENT_CLASS);
  nextNextWord.classList.add(NEXT_CLASS);

  // establece as propiedades CSS '--color' e '--color-bg' cos valores de color de datos da seguinte palabra.
  wrapper.style.setProperty("--color", nextWord.dataset.color);
  wrapper.style.setProperty("--color-bg", nextWord.dataset.bgColor);

  // establece a propiedade CSS '--width' co ancho da seguinte palabra para o contedor.
  wrapper.style.setProperty("--width", `${nextWord.offsetWidth}px`);
}, 1500);