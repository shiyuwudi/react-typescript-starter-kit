/**
 * Created by lixiaoyang on 2016/10/29.
 */
import {DETAIL, HIDE, EDIT} from '../actions/actionTypes';

const ACTION_HANDLERS = {
  [EDIT]: (state: any, action: any) => {
    return Object.assign({}, state, {
      visible: true
    });
  },

  [DETAIL]: (state: any, action: any) => {
    return {
      data: action.data,
      visible: true
    };
  },
  [HIDE]: (state: any, action: any) => {
    return {
      visible: false
    };
  },
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState: any = {visible: false};
export default function listReducer(state = initialState, action: any) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
