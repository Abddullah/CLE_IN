import Toast from 'react-native-toast-message';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
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
  setTimeout(() => {
    navigation.navigate('GetStarted')
  }, 2000);
};

export const signIn = (data, isSelectedRemember, navigation) => async dispatch => {
  if (data.email === 'provider@gmail.com') {
    dispatch({ type: 'SET_USER', payload: { email: data.email, role: 'provider' } });
    navigation.navigate('Tabs')
  }
  else {
    dispatch({ type: 'SET_USER', payload: { email: data.email, role: 'user' } });
    navigation.navigate('Tabs')
  }
};

export const registerUser = (credentials, navigation) => async (dispatch) => {
  if (credentials.password !== credentials.rePassword) {
    Toast.show({ type: 'error', text1: 'Passwords do not match.', position: 'bottom' });
    return;
  }
  try {
    dispatch({ type: 'IS_LOADER', payload: true });
    // Create user with Firebase Auth
    const userCredential = await auth().createUserWithEmailAndPassword(credentials.email, credentials.password);
    const userId = userCredential.user.uid;
    // Save additional user data to Firestore
    await firestore().collection('users').doc(userId).set({
      fullName: credentials.fullName,
      email: credentials.email,
      role: credentials.role,
      dob: credentials.dob,
      phone: credentials.phone,
      gender: credentials.gender,
      address: credentials.address,
      profilePhoto: credentials.profilePhoto,
      createdAt: firestore.FieldValue.serverTimestamp(),
    });
    dispatch({ type: 'IS_LOADER', payload: false });
    Toast.show({ type: 'success', text1: 'User registered successfully!', position: 'bottom' });
    navigation.replace('Signin')
  } catch (error) {
    console.log(error, 'registerUser_error');
    dispatch({ type: 'IS_LOADER', payload: false });
    Toast.show({ type: 'error', text1: error.code, position: 'bottom' });
  }
};
