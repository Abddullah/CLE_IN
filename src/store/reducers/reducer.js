const initState = {
  isError: false,
  errorMsg: '',
  isLoader: false,
  user: {},
  // savedCords: [24.963673, 67.06837], // Nagan chowrangi location
  // savedCords: [24.8854, 67.0159], // Golimar location
  // savedCords: [24.979781, 67.067024], // saleem center
  savedCords: [],
  isLocation: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'IS_ERROR':
      return {
        ...state,
        isError: action.payload,
      };
    case 'SET_ERROR_MSG':
      return {
        ...state,
        errorMsg: action.payload,
      };
    case 'IS_LOADER':
      return {
        ...state,
        isLoader: !state.isLoader,
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'IS_LOCATION':
      return {
        ...state,
        isLocation: action.payload,
      };
    case 'SAVED_COORDS':
      return {
        ...state,
        savedCords: action.payload,
      }
    default:
      return state;
  }
};
export default reducer;
