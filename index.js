import { products } from './data.js';
import productsTemplate from './templates/products.hbs';

const app = document.querySelector('#app');

let items = [...products];

function render() {
  app.innerHTML = productsTemplate(items);
}

app.addEventListener('click', e => {
  if (e.target.classList.contains('delete-btn')) {
    const id = Number(e.target.closest('li').dataset.id);
    items = items.filter(item => item.id !== id);
    render();
  }
});

render();
