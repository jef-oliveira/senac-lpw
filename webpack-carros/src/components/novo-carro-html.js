export default function({ id, modelo, marca, ano, preco, destaque }) {
  const tr = document.createElement('tr');

  tr.setAttribute('data-id', id);
  tr.innerHTML = `
    <td>${modelo}</td>
    <td>${marca}</td>
    <td>${ano}</td>
    <td>${preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
    <td class="text-center acoes">
      <i class="fas fa-times-circle text-danger mr-1 excluir"></i>
      <i class="${destaque ? 'fas' : 'far'} fa-star text-warning destacar"></i>
    </td>
  `;

  if (destaque)
    tr.classList.add('destaque');

  return tr;
};