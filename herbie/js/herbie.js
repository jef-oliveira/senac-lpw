const data = {
  cars: [
    { id: 'fiesta', price: 50900 },
    { id: 'focus', price: 59200 },
    { id: 'ka', price: 45500 }
  ],
  optionals: [
    { id: 'alarme', price: 400 },
    { id: 'pintura', price: 1500 }
  ]
};

const inputs = document.querySelectorAll('input');
const image = document.querySelector('#imgCarro');
const price = document.querySelector('#outPreco');

const getIdFromInput = (input) => {
  return input.id.replace(input.type == 'radio' ? 'rb' : 'ck', '').toLowerCase();
};

const getImageSource = (input) => {
  return `img/${getIdFromInput(input)}.png`;
};

const getPrice = () => {
  const carInput = document.querySelector('input[type=radio]:checked');
  const optionalInputs = document.querySelectorAll('input[type=checkbox]:checked');

  const carPrice = data.cars.find(car => car.id == getIdFromInput(carInput)).price;
  const optionalsPrice = Array.from(optionalInputs).reduce((sum, optionalInput) => (
    sum + data.optionals.find(optional => optional.id == getIdFromInput(optionalInput)).price
  ), 0);

  return carPrice + optionalsPrice;
};

const handleInputChange = (input) => {
  if (input) {
    if (input.type == 'radio')
      image.src = getImageSource(input);

    price.innerText = getPrice().toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }
};


Array.from(inputs).forEach(input => input.addEventListener('change', e => handleInputChange(e.target)));
window.addEventListener('load', () => handleInputChange(document.querySelector('input[type=radio]:checked')));