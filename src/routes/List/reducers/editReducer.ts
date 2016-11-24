/**
 * Created by lixiaoyang on 2016/10/29.
 */
import {HIDE, EDIT, EDITCHANGE} from '../actions/actionTypes';

const ACTION_HANDLERS = {
  [EDIT]: (state: any, action: any) => {
    const eData = action.data;
    return Object.assign({}, state, {
      visible: true,
      edit: {
        id: eData.id,
        goodsBrandName: {
          value: eData.goodsBrandName
        },
      }
    });
  },
  [HIDE]: (state: any, action: any) => {
    return Object.assign({}, state, {
      visible: false
    });
  },
  [EDITCHANGE]: (state: any, action: any) => {
    return Object.assign({}, state, {
      edit: Object.assign(state.edit, action.data)
    });
  },
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState: any = {
  visible: false, edit: {}
};
export default function listReducer(state = initialState, action: any) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
