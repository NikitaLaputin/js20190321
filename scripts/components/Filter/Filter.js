import BaseComponent from '../BaseComponent/BaseComponent.js';

export class Filter extends BaseComponent {
    constructor({element}) {
        super();

        this._el = element;
        this._el.addEventListener('input', debounce(e => {
            let query = e.target.value.toLowerCase();
            let inputEvent = new CustomEvent ('filter',
                {
                    detail: { query },
                }
            )
            this._el.dispatchEvent(inputEvent);
        }, 300));
        
        this._render();
    }

    _render() {
        this._el.innerHTML = `
            <div class="input-field">
            <input data-id="search" placeholder="Search crypto..." type="text">
            </div>
        `;
    }
}


function debounce(f, delay) {
    let timerId;

    return (...args) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            f.apply(this, args);
        }, delay);
    }
}