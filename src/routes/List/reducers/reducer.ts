/**
 * Created by lixiaoyang on 2016/10/29.
 */
import {
  CLEAR_COMPLETED,
} from '../actions/action';

const ACTION_HANDLERS = {
  [CLEAR_COMPLETED]: (state:any, action:any) => state + action.payload,
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0;
export default function listReducer(state = initialState, action:any) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
