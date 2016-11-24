import {message} from 'antd';
import {
  LIST, LIST_LOADING, HIDE, ROW_SELECT, EDIT, EDIT_CHANGE, SAVE_LOADING,
  DELETE_LOADING
} from './actionTypes';
import {listApi, editApi, saveApi, deleteApi} from './service';

const dispatchList = (data: any[]) => Object.assign({
  type: LIST
}, data);
const dispatchListLoading = (data: boolean) => ({
  type: LIST_LOADING,
  data: data
});
const dispatchEdit = (data: any) => ({
  type: EDIT,
  data: data
});
const dispatchHide = () => ({
  type: HIDE
});
const dispatchSaveLoading = (data: boolean) => ({
  type: SAVE_LOADING,
  data: data
});
const dispatchDeleteLoading = (data: boolean) => ({
  type: DELETE_LOADING,
  data: data
});
const dispatchRowSelectChange = (selectedRowKeys: any, selectedRows: any) => ({
  type: ROW_SELECT,
  selectedRowKeys,
  selectedRows
});
const dispatchFormChange = (data: any) => ({
  type: EDIT_CHANGE,
  data: data
});

export const fetchList = (pagination: any) => {
  return (dispatch: any, getState: any) => {
    dispatch(dispatchListLoading(true));
    listApi(pagination)
      .then((response: any) => {
        dispatch(dispatchList(response));
      })
      .catch((err) => {
        dispatch(dispatchListLoading(false));
      });
  };
};

export const fetchEdit = (id: any) => {
  return (dispatch: any, getState: any) => {
    if (id !== -1) {
      editApi({id})
        .then((response: any) => {
          dispatch(dispatchEdit(response.data));
        })
        .catch((err) => {
          dispatch(dispatchEdit({}));
        });
    } else {
      dispatch(dispatchEdit({}));
    }
  };
};

export const hide = () => {
  return (dispatch: any, getState: any) => {
    dispatch(dispatchHide());
  };
};

export const onRowSelectChange = ((selectedRowKeys: any, selectedRows: any) => {
  return (dispatch: any, getState: any) => {
    dispatch(dispatchRowSelectChange(selectedRowKeys, selectedRows));
  };
});

export const onFormChange = (data: any) => {
  return (dispatch: any, getState: any) => {
    dispatch(dispatchFormChange(data));
  };
};

export const onFormSubmit = (form: any) => {
  return (dispatch: any, getState: any) => {
    dispatch(dispatchSaveLoading(true));
    saveApi(form)
      .then((response: any) => {
        if (response.status !== 'BRAND_IS_SAVED') {
          let error: any = new Error();
          error.msg = response.msg;
          throw error;
        }
        message.success('保存成功');
        dispatch(dispatchHide());
        dispatch(dispatchListLoading(true));
        return listApi({});
      })
      .then((response: any) => {
        dispatch(dispatchList(response));
      })
      .catch((err) => {
        dispatch(dispatchListLoading(false));
        dispatch(dispatchSaveLoading(false));
        if (!err.msg) {
          message.error('保存失败');
        }
      });
  };
};
export const fetchDelete = (ids: any[]) => {
  return (dispatch: any, getState: any) => {
    dispatch(dispatchDeleteLoading(true));
    deleteApi({ids: ids.join(',')})
      .then((response: any) => {
        if (response.status !== 'BRAND_IS_DELETED') {
          let error: any = new Error();
          error.msg = response.msg;
          throw error;
        }
        message.success('删除成功');
        dispatch(dispatchRowSelectChange([], []));
        dispatch(dispatchListLoading(true));
        dispatch(dispatchDeleteLoading(false));
        return listApi({});
      })
      .then((response: any) => {
        dispatch(dispatchList(response));
      })
      .catch((err) => {
        dispatch(dispatchDeleteLoading(false));
        if (!err.msg) {
          message.success('删除失败');
        }
      });
  };
};
export const onSearch = (form: any[]) => {
  return (dispatch: any, getState: any) => {
    dispatch(dispatchListLoading(true));
    listApi(form)
      .then((response: any) => {
        dispatch(dispatchList(response));
      })
      .catch((err) => {
        dispatch(dispatchListLoading(false));
      });
  };
};
