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

      let cellIndex = e.target.cellIndex,
          sortBy = e.target.dataset.type;
      this._colSotred = (this._lastCol === cellIndex) ? !this._colSotred : false;
      this._lastCol = cellIndex;
      if(!sortBy) return;

      [...rows].sort( (a, b) => {
        let rowA = a.cells[cellIndex].textContent,
            rowB = b.cells[cellIndex].textContent;
        return (sortBy === 'string') ? 
          !this._colSotred ? 
            rowA.localeCompare(rowB) :
            rowB.localeCompare(rowA) : 
            !this._colSotred ? 
              +rowA - +rowB :
              +rowB - +rowA
        }
      ).forEach( row => {
          this._el.querySelector('tbody').append(row);
        });
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
              <th data-type="string">Name</th>
              <th data-type="string">Symbol</th>
              <th data-type="number">Rank</th>
              <th data-type="number">Price</th>
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
