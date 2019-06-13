import BaseComponent from '../BaseComponent/BaseComponent.js';

export class Table extends BaseComponent {
  constructor({ data, element }) {
    super();
    
    this._el = element;

     
    this._render(data);

    let rows = [...this._el.querySelectorAll('tbody tr')];
    this._el.addEventListener('click', e => {
      this._onRowClick(e);
    });

    this._el.addEventListener('click', e => {
      if(!e.target.closest('th')) return;

      let headerClick = new CustomEvent('sort', {
        detail: {
          type: e.target.dataset.type,
          property: e.target.dataset.property,
        }
      });
      this._el.dispatchEvent(headerClick);
    })

    this._el.addEventListener('input', e => {
      if(!e.target.closest('#search')) return;

      rows.map(row => {
        if(!row.cells[0].textContent.toLowerCase().includes(e.target.value.toLowerCase()))
          row.classList.add('hidden');
        else row.classList.remove('hidden');
      });
    });
  }

  displayData(data) {
    this._render(data);
  }

  _onRowClick(e) {
    const target = e.target.closest('tbody tr');
    if (!target) return;

    const id = target.dataset.id;
    if (id) {
      let rowClickEvent = new CustomEvent('rowClick', {
        detail: { id },
      });
      this._el.dispatchEvent(rowClickEvent);
    }
  }
    
     _render(data) {
        this._el.innerHTML = `
        <table class="data-table highlight"> 
          <thead>
            <tr>
              <th data-type="string" data-property="name">Name</th>
              <th data-type="string" data-property="symbol">Symbol</th>
              <th data-type="number" data-property="rank">Rank</th>
              <th data-type="number" data-property="price">Price</th>
            </tr>
          </thead>
          <tbody>
            ${
              data.map(coin => `
                <tr data-id="${coin.id}">
                    <td>${coin.name}</td>
                    <td>${coin.symbol}</td>
                    <td>${coin.rank}</td>
                    <td>${coin.price}</td>
                </tr>
              `).join('')
            }
          </tbody>
        </table>
        `;
    }
}
