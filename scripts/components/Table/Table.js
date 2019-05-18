import BaseComponent from '../BaseComponent/BaseComponent.js';

export class Table extends BaseComponent {
  constructor({ data, element }) {
    super();
    
    this._el = element;

     
    this._render(data);

    this._el.addEventListener('click', e => {
      this._onRowClick(e);
    })
    this._el.addEventListener('input', e => {
      if(!e.target.closest('#search')) return;

      let rows = [...this._el.querySelectorAll('tbody tr')];
      rows.map(row => {
        if(!row.cells[0].textContent.toLowerCase().includes(e.target.value.toLowerCase()))
          row.classList.add('hidden');
        else row.classList.remove('hidden');
      });
    })
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
        <div class="input-field col s4">
          <input id="search" placeholder="Search crypto..." type="text">
        </div>
        <table class="data-table highlight"> 
          <thead>
            <tr>
              <th>Name</th>
              <th>Symbol</th>
              <th>Rank</th>
              <th>Price</th>
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
