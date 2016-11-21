/**
 * Created by lixiaoyang on 2016/10/29.
 */
import {
  LIST,
  LIST_LOADING
} from '../actions/action';

const ACTION_HANDLERS = {
  [LIST]: (state: any, action: any) => {
    return {
      data: action.data,
      listLoading: false
    };
  },
  [LIST_LOADING]: (state: any, action: any) => {
    return {
      listLoading: action.data
    };
  },
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState: any = {
  delLoading: false
};
export default function listReducer(state = initialState, action: any) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
