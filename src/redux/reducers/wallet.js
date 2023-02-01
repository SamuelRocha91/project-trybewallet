import { SAVE_CURRENCIES } from '../actions';

const inittialState = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = inittialState, action) => {
  switch (action.type) {
  case SAVE_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  default: return state;
  }
};

export default wallet;
