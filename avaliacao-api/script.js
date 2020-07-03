const quotesAPI = 'http://quotes.stormconsultancy.co.uk';
const imagesAPI = 'https://picsum.photos';
const timestamp = new Date().getTime();

const container = document.querySelector('.container');
const quote = document.querySelector('.content q');
const author = document.querySelector('.content span');
const favorite = document.querySelector('.controls .favorite');
const refreshFavorite = document.querySelector('.controls .refresh-favorite');
const refreshRandom = document.querySelector('.controls .refresh-random');


let currentQuote, favoriteQuotes = [];

const loadFavorites = () => {
  const storeContent = localStorage.getItem('_coding_quotes-store');
  favoriteQuotes = JSON.parse(storeContent || '{ "favoriteQuotes": [] }').favoriteQuotes;
};

const isFavorite = () => {
  return favoriteQuotes.includes(currentQuote.id);
};

const randomFavorite = () => {
  if (favoriteQuotes.length == 1)
    return favoriteQuotes[0];

  const otherFavorites = favoriteQuotes.filter(quoteId => quoteId != currentQuote.id);

  if (otherFavorites.length == 1)
    return otherFavorites[0];
  else
    return _.shuffle(otherFavorites).pop();
}

const addOrRemoveFavorite = () => {
  if (isFavorite())
    favoriteQuotes = favoriteQuotes.filter(quoteId => quoteId != currentQuote.id);
  else
    favoriteQuotes.push(currentQuote.id);

  localStorage.setItem('_coding_quotes-store', JSON.stringify({ favoriteQuotes }));
  updateControls();
};

const updateControls = () => {
  if (isFavorite()) {
    favorite.children[0].classList.add('fas');
    favorite.children[0].classList.remove('far');
    favorite.children[1].innerText = 'Unmark as favorite';
  } else {
    favorite.children[0].classList.add('far');
    favorite.children[0].classList.remove('fas');
    favorite.children[1].innerText = 'Mark as favorite';
  }

  if (!favoriteQuotes.length)
    refreshFavorite.classList.add('hidden');
  else
    refreshFavorite.classList.remove('hidden');
};

const updateContent = () => {
  quote.innerText = currentQuote.quote;
  author.innerText = currentQuote.author;

  container.style.background = `url('${imagesAPI}/seed/${timestamp}-${currentQuote.id}/${screen.width}/${screen.height}')`;
  updateControls();
};

const generateFavoriteContent = async () => {
  currentQuote = await (await fetch(`${quotesAPI}/quotes/${randomFavorite()}.json`)).json();
  updateContent();
};

const generateRandomContent = async () => {
  currentQuote = await (await fetch(`${quotesAPI}/random.json`)).json();
  updateContent();
};


favorite.addEventListener('click', addOrRemoveFavorite);
refreshFavorite.addEventListener('click', generateFavoriteContent);
refreshRandom.addEventListener('click', generateRandomContent);

window.addEventListener('load', () => {
  loadFavorites();
  generateRandomContent();
});
