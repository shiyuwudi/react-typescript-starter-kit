import {message} from 'antd';
import {LIST, LIST_LOADING, DETAIL, HIDE, ROWSELECT, EDIT, EDITCHANGE, SAVE} from './actionTypes';
import {listApi, editApi, saveApi} from './service';

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

export const fetchList = (pagination: any) => {
  return (dispatch: any, getState: any) => {
    dispatch(dispatchListLoading(true));
    listApi(pagination)
      .then((response: any) => {
        dispatch(dispatchList(response));
      })
      .catch((err) => {
        dispatch(dispatchListLoading(false));
        console.log('rejected:', err);
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
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    dispatch({
      type: ROWSELECT,
      selectedRowKeys,
      selectedRows
    });
  };
});

export const onFormChange = (data: any) => {
  return (dispatch: any, getState: any) => {
    dispatch({
      type: EDITCHANGE,
      data: data
    });
  };
};

export const onFormSubmit = (form: any) => {
  return (dispatch: any, getState: any) => {
    saveApi(form)
      .then((response: any) => {
        if (response.status !== 'BRAND_IS_SAVED') {
          let error: any = new Error();
          error.status = response.status;
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
        message.error('保存失败');
      });
  };
};
