import {HYDRATE} from 'next-redux-wrapper';
import { combineReducers } from "redux";
import user from './user';
import post from './post';
import {sendPayload} from "next/dist/next-server/server/send-payload";

const rootReducer = combineReducers({
  index: (state={}, action) => {
    switch(action.type) {
      case HYDRATE:
        return {
          ...state,
          ...action.payload
        }
      default:
        return state;
    }
  },
  user,
  post
})

export default rootReducer;