import { SAVE_CURRENCIES, SAVE_EXPENSES, DELETE_TAG } from '../actions';

const inittialState = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = inittialState, action) => {
  const newExpenses = state.expenses;
  console.log(newExpenses);
  console.log(newExpenses);
  switch (action.type) {
  case SAVE_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  case SAVE_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case DELETE_TAG:

    return {
      ...state,
      expenses: newExpenses.filter((expense) => expense.id !== action.payload),
    };
  default: return state;
  }
};

export default wallet;
