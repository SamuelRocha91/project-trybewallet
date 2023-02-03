export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';
export const SAVE_EXPENSES = 'SAVE_EXPENSES';
export const DELETE_TAG = 'DELETE_TAG';
export const EDIT_TAG = 'EDIT_TAG';
export const EFETIVE_EDIT = 'EFETIVE_EDIT';

const URL_BASE = 'https://economia.awesomeapi.com.br/json/all';

export const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  payload: email,
});

export const actionDelete = (id) => ({
  type: DELETE_TAG,
  payload: id,
});

export const actionEditInit = (id) => ({
  type: EDIT_TAG,
  payload: id,
});

export const actionEfetiveEdit = (object) => ({
  type: EFETIVE_EDIT,
  payload: object,
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
