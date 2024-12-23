import Toast from 'react-native-toast-message';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import getFirebaseErrorMessage from '../../services/firebaseErrorHandler';
import { CommonActions } from '@react-navigation/native';
import { setItem, deleteItem, getItem } from '../../services/assynsStorage';

export const showError = (errMsg) => async dispatch => {
  dispatch({ type: 'IS_ERROR', payload: true });
  dispatch({ type: 'SET_ERROR_MSG', payload: errMsg });
  setTimeout(() => {
    dispatch({ type: 'IS_ERROR', payload: false });
    dispatch({ type: 'SET_ERROR_MSG', payload: '' });
  }, 5000);
};

export const getCurrentUser = (navigation) => async dispatch => {
  const user = await getItem('user')
  console.log(user, "Current_user");
  const launchApp = await getItem('launchApp')
  if (user) {
    dispatch({ type: 'SET_USER', payload: user });
    navigation.navigate('Tabs')
  }
  else {
    if (launchApp === undefined) {
      dispatch({ type: 'SET_USER', payload: {} });
      setItem('launchApp', true)
      navigation.navigate('GetStarted')
    } else {
      navigation.navigate('Signin')
    }
  }
  dispatch(fetchCategories());
  dispatch(fetchAditionalService());
};

export const loginUser = (credentials, isSelectedRemember, navigation) => async (dispatch) => {
  try {
    dispatch({ type: 'IS_LOADER', payload: true });
    const userCredential = await auth().signInWithEmailAndPassword(credentials.email, credentials.password);
    const user = userCredential.user._user;
    const userDoc = await firestore().collection('users').doc(user.uid).get();
    const userData = userDoc.data();
    isSelectedRemember && setItem('user', userData)
    !isSelectedRemember && deleteItem('user')
    dispatch({ type: 'SET_USER', payload: userData });
    dispatch({ type: 'IS_LOADER', payload: false });
    navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: 'Tabs' }], }));
    const customMessage = await getFirebaseErrorMessage('Login successful!');
    Toast.show({ type: 'success', text1: customMessage, position: 'bottom' });
  } catch (error) {
    console.log(error, 'loginUser_error');
    dispatch({ type: 'IS_LOADER', payload: false });
    const errorMessage = await getFirebaseErrorMessage(error.code,);
    Toast.show({ type: 'error', text1: errorMessage, position: 'bottom' });
  }
};

export const registerUser = (credentials, navigation) => async (dispatch) => {
  if (credentials.password !== credentials.rePassword) {
    const customMessage = await getFirebaseErrorMessage('Passwords do not match.');
    Toast.show({ type: 'error', text1: customMessage, position: 'bottom' });
    return;
  }
  try {
    dispatch({ type: 'IS_LOADER', payload: true });
    const userCredential = await auth().createUserWithEmailAndPassword(credentials.email, credentials.password);
    const userId = userCredential.user.uid;
    await firestore().collection('users').doc(userId).set({
      fullName: credentials.fullName,
      email: credentials.email,
      role: credentials.role,
      dob: credentials.dob,
      phone: credentials.phone,
      gender: credentials.gender,
      address: credentials.address,
      profilePhoto: credentials.profilePhoto,
      userId: userId,
      createdAt: firestore.FieldValue.serverTimestamp(),
    });
    dispatch({ type: 'IS_LOADER', payload: false });
    const customMessage = await getFirebaseErrorMessage('User registered successfully!');
    Toast.show({ type: 'success', text1: customMessage, position: 'bottom' });
    navigation.navigate('Signin')
  } catch (error) {
    console.log(error, 'registerUser_error');
    dispatch({ type: 'IS_LOADER', payload: false });
    const errorMessage = await getFirebaseErrorMessage(error.code,);
    Toast.show({ type: 'error', text1: errorMessage, position: 'bottom' });
  }
};

export const forgotPassword = (email, navigation, setemail) => async (dispatch) => {
  try {
    dispatch({ type: 'IS_LOADER', payload: true });
    await auth().sendPasswordResetEmail(email);
    const customMessage = await getFirebaseErrorMessage('Password reset email sent successfully.');
    Toast.show({ type: 'success', text1: customMessage, position: 'bottom' });
    setemail('')
    dispatch({ type: 'IS_LOADER', payload: false });
    navigation.navigate('Signin')
  } catch (error) {
    dispatch({ type: 'IS_LOADER', payload: false });
    const errorMessage = await getFirebaseErrorMessage(error.code,);
    Toast.show({ type: 'error', text1: errorMessage, position: 'bottom' });
  }
};

export const updateUser = (credentials, userId, navigation) => async (dispatch) => {
  try {
    dispatch({ type: 'IS_LOADER', payload: true });
    await firestore().collection('users').doc(userId).update(credentials);
    const userDoc = await firestore().collection('users').doc(userId).get();
    const userData = userDoc.data();
    setItem('user', userData)
    dispatch({ type: 'SET_USER', payload: userData });
    dispatch({ type: 'IS_LOADER', payload: false });
    const customMessage = await getFirebaseErrorMessage('User update successfully!');
    Toast.show({ type: 'success', text1: customMessage, position: 'bottom' });
    navigation.goBack()
  } catch (error) {
    console.log(error, 'updateUser_error');
    const errorMessage = await getFirebaseErrorMessage(error.code,);
    Toast.show({ type: 'error', text1: errorMessage, position: 'bottom' });
  }
};

export const logoutUser = (navigation) => async (dispatch) => {
  try {
    dispatch({ type: 'IS_LOADER', payload: true });
    await auth().signOut();
    deleteItem('user')
    dispatch({ type: 'SET_USER', payload: {} });
    dispatch({ type: 'IS_LOADER', payload: false });
    navigation.navigate('Signin')
  } catch (error) {
    navigation.navigate('Signin')
    console.log(error, 'logoutUser_error');
    dispatch({ type: 'IS_LOADER', payload: false });
    const errorMessage = await getFirebaseErrorMessage(error.code);
    Toast.show({ type: 'error', text1: errorMessage, position: 'bottom' });
  }
};

export const fetchCategories = (navigation) => async (dispatch) => {
  try {
    dispatch({ type: 'IS_LOADER', payload: true });
    const snapshot = await firestore().collection('categories').get();
    const categories = snapshot.docs.map((doc) => ({ ...doc.data(), }));
    dispatch({ type: 'SET_CATEGORIES', payload: categories });
    dispatch({ type: 'IS_LOADER', payload: false });
  } catch (error) {
    console.log(error, 'fetchCategories_error');
    dispatch({ type: 'IS_LOADER', payload: false });
    const errorMessage = await getFirebaseErrorMessage(error.code);
    Toast.show({ type: 'error', text1: errorMessage, position: 'bottom' });
  }
};

export const fetchAditionalService = (navigation) => async (dispatch) => {
  try {
    dispatch({ type: 'IS_LOADER', payload: true });
    const snapshot = await firestore().collection('additionalServices').get();
    const additionalServices = snapshot.docs.map((doc) => ({ ...doc.data(), }));
    console.log(additionalServices, 'additionalServices')
    dispatch({ type: 'SET_ADITIONAL_SERVICE', payload: additionalServices });
    dispatch({ type: 'IS_LOADER', payload: false });
  } catch (error) {
    console.log(error, 'fetchAditionalService_error');
    dispatch({ type: 'IS_LOADER', payload: false });
    const errorMessage = await getFirebaseErrorMessage(error.code);
    Toast.show({ type: 'error', text1: errorMessage, position: 'bottom' });
  }
};

