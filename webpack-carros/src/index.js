import './style.css';
import { NovoCarroHTML } from './components';

const form = document.querySelector('form');
const tbody = document.querySelector('table tbody');

const mostraCarros = () => {
  db.collection('carros').orderBy('modelo').onSnapshot(snapshot => {
    tbody.innerHTML = '';
    snapshot.docs.forEach(doc => { 
      const carro = { id: doc.id, ...doc.data() };
      tbody.appendChild(NovoCarroHTML(carro));
    })
  });
};

form.addEventListener('submit', event => {
  event.preventDefault();

  const novoCarro = {
    modelo: form.modelo.value,
    marca: form.marca.value,
    ano: Number(form.ano.value),
    preco: Number(form.preco.value),
    destaque: false
  };

  db.collection('carros')
    .add(novoCarro)
    .catch(error => console.log('Erro', error));

  form.reset();
  form.modelo.focus();
});

tbody.addEventListener('click', ({ target }) => {
  const tr = target.closest('tr');
  const id = tr.getAttribute('data-id');

  if (target.classList.contains('excluir'))
    if (confirm(`Confirmar exclusão do modelo ${tr.cells[0].innerText}`))
      db.collection('carros').doc(id).delete()
      .catch(error => console.log('Erro', error));

  if (target.classList.contains('destacar'))
    db.collection('carros').doc(id).update({ destaque: !tr.classList.contains('destaque') })
      .catch(error => console.log('Erro', error));
});

window.addEventListener('load', mostraCarros);