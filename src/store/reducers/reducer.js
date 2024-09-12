const initState = {
  isError: false,
  errorMsg: '',
  isLoader: false,
  user: {},
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
    default:
      return state;
  }
};
export default reducer;
