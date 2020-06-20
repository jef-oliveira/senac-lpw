const inFoto = document.querySelector('#inFoto');
const outFoto = document.querySelector('#outFoto');


inFoto.addEventListener('change', e => {
  const foto = e.target.files[0];
  const reader = new FileReader();

  outFoto.src = '';

  if (foto.type.startsWith('image/')) {
    reader.addEventListener('load', () => {
      outFoto.src = reader.result;
    });

    reader.readAsDataURL(foto);
  }
});