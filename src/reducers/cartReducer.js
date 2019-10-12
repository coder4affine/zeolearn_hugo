const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_ITEM':
      return [...state, payload];

    default:
      return state;
  }
};