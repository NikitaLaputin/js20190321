const COINS_URL = 'https://api.coinpaprika.com/v1/coins';

const getSingleCoinUrl = id => `https://api.coinpaprika.com/v1/coins/${id}/ohlcv/today/`;

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
  
  lastQuery: '',
  lastProperty: '',
  descending: true,

  async getCurrencies({filter = { query: this.lastQuery}} = {}) {
    let data = await HttpService.sendRequest(COINS_URL);
    let activeCoins = data.filter(coin => coin.is_active);
    let filteredData = activeCoins.filter(coin => coin.name.toLowerCase().includes(filter.query));
    this._data = filteredData;
    return DataService.getCurrenciesPrices(filteredData.slice(0,10))
  },

  async getCurrenciesPrices(data) {
    const coinsUrls = data.map(coin => getSingleCoinUrl(coin.id));

    const coins = await HttpService.sendMultipleRequests(coinsUrls);
    return data.map((item, index) => {
      item.price = coins[index][0].close;
      return item;
    });
  },

  sort({type = '', column = ''} = {}) {
    if(!this._data) DataService.getCurrencies();


  }
}

export default DataService;

