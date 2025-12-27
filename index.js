import { products } from './data.js';
import Handlebars from 'handlebars';

const templateSource = `
<ul>
  {{#each this}}
    <li data-id="{{id}}">
      <strong>{{name}}</strong> — {{price}}$<br>
      {{description}}
      <button class="delete-btn">Delete</button>
    </li>
  {{/each}}
</ul>
`;

const productsTemplate = Handlebars.compile(templateSource);

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
