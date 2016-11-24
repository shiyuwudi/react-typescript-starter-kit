/**
 * Created by lixiaoyang on 2016/10/29.
 */
import {
  LIST,
  LIST_LOADING,
  ROW_SELECT,
  DELETE_LOADING
} from '../actions/actionTypes';

const ACTION_HANDLERS = {
  [LIST]: (state: any, action: any) => {
    return Object.assign({}, state, {
      data: action.data,
      pagination: {
        total: action.total,
        pageSize: action.pageSize,
        currentPage: action.currentPage,
      },
      listLoading: false
    });
  },
  [LIST_LOADING]: (state: any, action: any) => {
    return Object.assign({}, state, {
      listLoading: action.data
    });
  },
  [ROW_SELECT]: (state: any, action: any) => {
    return Object.assign({}, state, {
      selectedRowKeys: action.selectedRowKeys,
      selectedRows: action.selectedRows
    });
  },
  [DELETE_LOADING]: (state: any, action: any) => {
    return Object.assign({}, state, {
      delLoading: action.data
    });
  },
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState: any = {
  listLoading: false,
  delLoading: false,
  pagination: {},
  selectedRowKeys: [],
  selectedRows: [],
};
export default function listReducer(state = initialState, action: any) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
