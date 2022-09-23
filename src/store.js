import { configureStore } from '@reduxjs/toolkit';
import userReducer from './datafile/user.reducer';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    Users: userReducer,
  },
  middleware: [thunk],
});

export default store;