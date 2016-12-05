import {message} from 'antd';
import {
  LIST, LIST_LOADING, HIDE, ROW_SELECT, EDIT, EDIT_CHANGE, SAVE_LOADING,
  DELETE_LOADING
} from './actionTypes';
import {listApi, editApi, saveApi, deleteApi} from '../../../service/goodsBrandService';
import {DispatchListLoadingInterface} from '../../../interface/actionInterface';
import {GoodsBrand} from '../../../interface/goodsBrandInterface';
import {DTOInterface} from '../../../interface/dtoInterface';

const dispatchList = (data: DTOInterface, keyword: string) => Object.assign({
  type: LIST,
  keyword
}, data);
const dispatchListLoading: DispatchListLoadingInterface = (data: boolean) => ({
  type: LIST_LOADING,
  data: data
});
const dispatchEdit = (data: GoodsBrand) => ({
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
const dispatchRowSelectChange = (selectedRowKeys: number[], selectedRows: GoodsBrand[]) => ({
  type: ROW_SELECT,
  selectedRowKeys,
  selectedRows
});
const dispatchFormChange = (data: any) => ({
  type: EDIT_CHANGE,
  data: data
});

export const fetchList = (pagination: any = {}) => {
  return (dispatch: any, getState: any) => {
    let {
      currentPage,
      pageSize,
      keyword
    } = getState().listReducer.pagination;
    pagination.currentPage = pagination.currentPage || currentPage;
    pagination.pageSize = pagination.pageSize || pageSize;
    pagination.goodsBrandName = pagination.goodsBrandName || keyword;
    dispatch(dispatchListLoading(true));
    listApi(pagination)
      .then((response: DTOInterface) => {
        dispatch(dispatchList(response, pagination.goodsBrandName));
      })
      .always((err: any) => {
        dispatch(dispatchListLoading(false));
      });
  };
};

export const fetchEdit = (id: number) => {
  return (dispatch: any, getState: any) => {
    if (id !== -1) {
      editApi({id})
        .then((response: DTOInterface) => {
          dispatch(dispatchEdit(response.data));
        })
        .fail((err: any) => {
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

export const onRowSelectChange = ((selectedRowKeys: number[], selectedRows: GoodsBrand[]) => {
  return (dispatch: any, getState: any) => {
    dispatch(dispatchRowSelectChange(selectedRowKeys, selectedRows));
  };
});

export const onFormChange = (data: any) => {
  return (dispatch: any, getState: any) => {
    dispatch(dispatchFormChange(data));
  };
};

export const onFormSubmit = (form: GoodsBrand) => {
  return (dispatch: any, getState: any) => {
    dispatch(dispatchSaveLoading(true));
    saveApi(form)
      .then((response: DTOInterface) => {
        if (response.status !== 'BRAND_IS_SAVED') {
          message.error('保存失败');
          return;
        }
        message.success('保存成功');
        dispatch(dispatchHide());
        dispatch(dispatchListLoading(true));
        listApi({})
          .then((response: DTOInterface) => {
            dispatch(dispatchList(response, ''));
          });
      })
      .fail((err: any) => {
        message.error('保存失败');
      })
      .always((data: any) => {
        dispatch(dispatchListLoading(false));
        dispatch(dispatchSaveLoading(false));
      });
  };
};
export const fetchDelete = (ids: any[]) => {
  return (dispatch: any, getState: any) => {
    dispatch(dispatchDeleteLoading(true));
    deleteApi({ids: ids.join(',')})
      .then((response: DTOInterface) => {
        if (response.status !== 'BRAND_IS_DELETED') {
          message.error('删除失败');
          return;
        }
        message.success('删除成功');
        dispatch(dispatchListLoading(true));
        listApi({})
          .then((response: DTOInterface) => {
            dispatch(dispatchList(response, ''));
          });
      })
      .fail((err: any) => {
        message.success('删除失败');
      })
      .always((data: any) => {
        dispatch(dispatchDeleteLoading(false));
        dispatch(dispatchRowSelectChange([], []));
        dispatch(dispatchListLoading(false));
      });
  };
};
