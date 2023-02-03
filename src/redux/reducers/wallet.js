import { SAVE_CURRENCIES,
  SAVE_EXPENSES, DELETE_TAG, EDIT_TAG, EFETIVE_EDIT } from '../actions';

const inittialState = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = inittialState, action) => {
  const newExpenses = state.expenses;

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

  case EDIT_TAG:
    return {
      ...state,
      editor: true,
      idToEdit: action.payload,
    };
  case EFETIVE_EDIT:
    return {
      ...state,
      expenses: action.payload,
      editor: false,
    };
  default: return state;
  }
};

export default wallet;
