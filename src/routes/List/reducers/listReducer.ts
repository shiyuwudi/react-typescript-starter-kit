/**
 * Created by lixiaoyang on 2016/10/29.
 */
import {
  LIST,
} from '../actions/action';

const ACTION_HANDLERS = {
  [LIST]: (state: any, action: any) => action.data,
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState: any[] = [];
export default function listReducer(state = initialState, action: any) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
