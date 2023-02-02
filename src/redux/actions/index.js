export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';
export const SAVE_EXPENSES = 'SAVE_EXPENSES';

const URL_BASE = 'https://economia.awesomeapi.com.br/json/all';

export const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  payload: email,
});

const saveCurrencies = (currencies) => ({
  type: SAVE_CURRENCIES,
  payload: currencies.filter((currencie) => currencie !== 'USDT'),
});

const saveExpenses = (data, state) => ({
  type: SAVE_EXPENSES,
  payload: {
    exchangeRates: data,
    ...state,
  },
});

export const fetchApiExpenses = (state) => (dispatch) => {
  fetch(URL_BASE)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(state);
      dispatch(saveExpenses(data, state));
    });
};

export const fetchApiCurrencies = () => (dispatch) => {
  fetch(URL_BASE)
    .then((response) => response.json())
    .then((data) => {
      const values = Object.keys(data);
      dispatch(saveCurrencies(values));
    });
};
