import { SAVE_EMAIL } from '../actions';

const inittialState = {
  email: '',
};

const user = (state = inittialState, action) => {
  switch (action.type) {
  case SAVE_EMAIL:
    return {
      email: action.payload,
    };
  default: return state;
  }
};

export default user;
