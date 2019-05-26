const COINS_URL = 'https://api.coinpaprika.com/v1/coins';

const getSingleCoinUrl = id => `${COINS_URL}/${id}/ohlcv/today/`;

const HttpService = {
  async sendRequest(url) {
    const result = await fetch(url);
    return result.json();
  },

  sendMultipleRequests(urls) {
    let requests = urls.map(url => this.sendRequest(url))
    return Promise.all(requests);
  }
}

const DataService = {
  defaultParams: {
    query: '', 
    type: '', 
    property: '',
    descending: true,
    lastProperty: '',
  },

  async getCurrencies({ filter } = {}) {
    const params = Object.assign(this.defaultParams, filter )
    let data = await HttpService.sendRequest(COINS_URL);
    let activeCoins = data.filter(coin => coin.is_active);
    this._filteredData = activeCoins.filter(coin => coin.name.toLowerCase().includes(params.query));

    //sorting with prices takes too long
    if(params.type && params.property) {
      this.defaultParams.descending = filter.property === this.defaultParams.lastProperty ? !this.defaultParams.descending : true;
      this._filteredData = DataService.sortCoins({type: params.type, property: params.property});      
    }

    return DataService.getCurrenciesPrices(this._filteredData.slice(0,10))
  },

  async getCurrenciesPrices(data) {
    const coinsUrls = data.map(coin => getSingleCoinUrl(coin.id));

    const coins = await HttpService.sendMultipleRequests(coinsUrls);
    return data.map((item, index) => {
      item.price = coins[index][0].close;
      return item;
    });
  },

  sortCoins({type, property}) {
    this.defaultParams.lastProperty = property;

    return this._filteredData.sort((a, b) => {
      switch(type) {
        case 'number':
          return this.defaultParams.descending ? (+a[property] - +b[property]) : (+b[property] - +a[property]);
        default:
          return this.defaultParams.descending ? a[property].localeCompare(b[property]) : b[property].localeCompare(a[property])
      }
    })
  }
}

export default DataService;

