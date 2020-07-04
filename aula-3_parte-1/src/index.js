import './style.css';
import WebpackLogo from './img/webpack-logo.png';

import { printMe } from './print';

function component () {
  const component = document.createElement('div');

  const logo = new Image();
  logo.src = WebpackLogo;
  logo.width = 300;

  const title = document.createElement('h4');
  title.innerHTML = 'Dia 03/07/2020!!';
  title.classList.add('date');

  component.appendChild(logo);
  component.appendChild(title);

  printMe();

  return component;
}

document.body.appendChild(component());