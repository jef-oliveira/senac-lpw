const options = document.querySelector('#divFrutas');
const successMessage = document.querySelector('#mensaOk');
const errorMessage = document.querySelector('#mensaErro');
const instructions = document.querySelector('#outFrutas');
const gameStage = document.querySelector('#divJogo');
const verifyButton = document.querySelector('#btVerificar');
const retryButton = document.querySelector('#btNovamente');


const optionsData = [
  { id: 'imgBanana', name: 'Banana', src: 'banana.jpg' },
  { id: 'imgMorango', name: 'Morango', src: 'morango.jpg' },
  { id: 'imgLaranja', name: 'Laranja', src: 'laranja.jpg' },
  { id: 'imgMaca', name: 'Maçã', src: 'maca.jpg' },
  { id: 'imgUva', name: 'Uva', src: 'uva.jpg' },
];

let requirements;


const randomAmount = (max = 5) => Math.floor(Math.random() * max) + 1;

const showElement = (element, show = true) => {
  if (show)
    element.classList.remove('d-none');
  else
    element.classList.add('d-none');
};

const hideElement = (element, hide = true) => {
  if (hide)
    element.classList.add('d-none');
  else
    element.classList.remove('d-none');
};

const checkVerifyButton = () => {
  showElement(verifyButton, Array.from(gameStage.children).length);
};

const resetGame = () => {
  hideElement(errorMessage);
  hideElement(successMessage);
  hideElement(retryButton);
  hideElement(verifyButton);

  Array.from(gameStage.children).forEach(element => element.remove());

  requirements = optionsData.map(({ id, name }) => ({ id, name, total: randomAmount() }));
  instructions.innerText = requirements.map(({ name, total }) => `${total} ${name}${total > 1 ? 's' : ''}`).join(' :: ');
};

const finishGame = () => {
  showElement(retryButton);

  const fruits = Array.from(gameStage.children);

  const expectedLength = requirements.reduce((total, requiredFruit) => total + requiredFruit.total, 0);
  if (fruits.length != expectedLength) {
    showElement(errorMessage);
    return;
  }

  const incorrectAmount = requirements.some(({ id, total }) => (
    total != fruits.filter(fruit => fruit.dataset.id == id).length
  ));
  if (incorrectAmount) {
    showElement(errorMessage);
    return;
  }

  const mixed = fruits.every((fruit, index) => (
    index == 0 || fruits[index - 1].dataset.id != fruit.dataset.id
  ));
  if (!mixed) {
    showElement(errorMessage);
    return;
  }

  showElement(successMessage);
};

const init = () => {
  for ({ id, name, src } of optionsData) {
    const img = document.createElement('img');
    img.id = id;
    img.src = src;
    img.alt = name;
    img.height = 120;
    options.appendChild(img);
  }

  resetGame();
};

const addFruit =(id) => {
  const { src, name } = optionsData.find(option => option.id == id);
  const img = document.createElement('img');
  img.dataset.id = id;
  img.src = src;
  img.alt = name;
  img.height = 60;
  gameStage.appendChild(img);
};


options.addEventListener('click', e => {
  if (e.target.tagName == 'IMG')
    addFruit(e.target.id);

  checkVerifyButton();
});

gameStage.addEventListener('click', e => {
  if (e.target.tagName == 'IMG')
    e.target.remove();

  checkVerifyButton();
});

verifyButton.addEventListener('click', finishGame);

retryButton.addEventListener('click', resetGame);

init();