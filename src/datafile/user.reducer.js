import { USERS_DATA_RECIVED, SHOW_SPINNER } from './user.actions';

const initialState = {
  userData: [],
  isFetching: true,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_DATA_RECIVED: {
      return {
        ...state,
        userData: action.payload,
        isFetching: false,
      };
    }
      
    case SHOW_SPINNER: {
      return {
        ...state,
        isFetching: true,
      };
    }
    default:
      return state;
  }
};
export default userReducer;
