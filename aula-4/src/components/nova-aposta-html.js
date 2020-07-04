export default function(aposta) {
  console.log('nova aposta html', aposta);
  const li = document.createElement('li');

  li.innerText = `${aposta.nome} - ${aposta.peso}gr`;
  li.classList.add('list-group-item');
  li.setAttribute('data-id', aposta.id);

  return li;
};