const COINS_URL = 'https://api.coinpaprika.com/v1/coins';

const getSingleCoinUrl = id => `https://api.coinpaprika.com/v1/coins/${id}/ohlcv/today/`;

const DataService = {

  getCurrencies() {
    return fetch(COINS_URL)
      .then(response => response.json())
        .then(response => response.slice(0, 10) )
          .then(
            async response => {
             await Promise.all(response.map(coin => 
                fetch(getSingleCoinUrl(coin.id)).then(result => result.json() )
              )).then(results => 
                response.forEach((resp, i) => {
                  resp.price = results[i][0].close;
                }))
              return response;
            }
          );
  },
}

export default DataService;

