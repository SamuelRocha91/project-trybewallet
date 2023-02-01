export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';
const URL_BASE = 'https://economia.awesomeapi.com.br/json/all';

export const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  payload: email,
});

const saveCurrencies = (currencies) => ({
  type: SAVE_CURRENCIES,
  payload: currencies.filter((currencie) => currencie !== 'USDT'),
});

export const fetchApiCurrencies = () => (dispatch) => {
  fetch(URL_BASE)
    .then((response) => response.json())
    .then((data) => {
      const values = Object.keys(data);
      dispatch(saveCurrencies(values));
    });
};
