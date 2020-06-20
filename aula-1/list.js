const list = document.querySelector('.list');
const searchForm = document.querySelector('#search-form');
const addForm = document.querySelector('#add-form');
const saveForm = document.querySelector('#save-form');


const init = () => {
  const store = localStorage.getItem('_list-store');
  const storedData = JSON.parse(store || '{ "list": [] }');

  for (item of storedData.list)
    list.innerHTML += itemHTML(item);
};

const itemHTML = item => {
  return `
  <li class="list-group-item d-flex justify-content-between align-items-center">
      ${item}
      <i class="fas fa-trash delete"></i>
  </li>
  `;
};

const applyFilter = searchTerm => {
  Array.from(list.children)
       .forEach(compra => {
          if (compra.innerText.toLowerCase().includes(searchTerm.toLowerCase()))
            compra.classList.remove('filtered');
          else
            compra.classList.add('filtered');
        });
};

const persist = () => {
  localStorage.setItem('_list-store', JSON.stringify({ 
    list: Array.from(list.children).map(item => item.innerText)
  }));
};


list.addEventListener('click', e => {
  if (e.target.classList.contains('delete') || !!e.target.closest('.delete'))
    e.target.closest('.list-group-item').remove();
});

searchForm.addEventListener('keyup', e => {
  applyFilter(e.target.value);
});

addForm.addEventListener('submit', e => {
  e.preventDefault();
  const item = addForm.item.value.trim();

  if (item.length) {
    list.innerHTML += itemHTML(item);
    addForm.reset();
  };
});

saveForm.addEventListener('submit', e => {
  e.preventDefault();
  persist();
});



init();