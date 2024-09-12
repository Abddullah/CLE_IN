import Toast from 'react-native-toast-message';
import { _storeData, _retrieveData } from '../../services/assynsStorage';


export const showError = (errMsg) => async dispatch => {
  dispatch({ type: 'IS_ERROR', payload: true });
  dispatch({ type: 'SET_ERROR_MSG', payload: errMsg });
  setTimeout(() => {
    dispatch({ type: 'IS_ERROR', payload: false });
    dispatch({ type: 'SET_ERROR_MSG', payload: '' });
  }, 5000);
};

export const getCurrentUser = (navigation) => async dispatch => {
  
};
