import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
        if(action.payload.code === 200)
        {
          return action.payload.user;
        }

        return false;
    default:
      return state;
  }
}