const API_URL_COINS = 'https://api.coincap.io/v2/assets?limit=10';
const API_URL_CONVERTER = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/brl.json';

const errorWarning = error => {
  const warning = document.getElementById('warning');
  warning.innerText = `Erro: ${error}`;
};

const addCoinsToCoinList = (list, valueBRL) => {
  const coinList = document.getElementById('coin-list');
  list.data.forEach(({ symbol, name, priceUsd }) => {
    const li = document.createElement('li');
    li.innerText = `${name} (${symbol}): US$ ${parseInt(priceUsd).toFixed(2)} ${valueBRL ? `OU R$ ${(valueBRL.brl * parseInt(priceUsd)).toFixed(2)}` : ''}`;
    coinList.appendChild(li);
  });
}

const fetchConverter = async () => {
  try {
    const res = await fetch(API_URL_CONVERTER)
    const data = await res.json();
    return data;
  } catch (error) {
    errorWarning(`Erro no conversor de moedas: ${error}`);
    return undefined;
  }
}

const fetchCoins = async () => {
  try {
    const res = await fetch(API_URL_COINS);
    const data = await res.json();
    return data;
  } catch (error) {
    errorWarning(`Erro na busca pelas cryto moedas: ${error}`);
    return undefined;
  }
}

const main = async () => {
  const coins = await fetchCoins();
  
  if (coins) {
    const converter = await fetchConverter();
    addCoinsToCoinList(coins, converter);
  }
}

main();