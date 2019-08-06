const audioReducer = (state, action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      return {
        ...state,
        additionalPrice: state.additionalPrice - action.item.price,
        car: {
          ...state.car,
          features: state.car.features.filter(x => x.id !== action.item.id),
        },
        store: [...state.store, action.item],
      };
    case 'BUY_ITEM':
      return {
        ...state,
        additionalPrice: state.additionalPrice + action.item.price,
        car: { ...state.car, features: [...state.car.features, action.item] },
        store: state.store.filter(x => x.id !== action.item.id),
      };
    default:
      return state;
  }
};

export default audioReducer;
