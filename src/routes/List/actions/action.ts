/**
 * Created by lixiaoyang on 2016/10/30.
 */
const PATH: string = 'GOODSBRAND/';
export const LIST: string = PATH + 'LIST';
export const LIST_LOADING: string = PATH + 'LIST_LOADING';
export const SHOW: string = PATH + 'SHOW';
export const EDIT: string = PATH + 'EDIT';
export const SAVE: string = PATH + 'SAVE';
export const SAVE_LOADING: string = PATH + 'SAVE_LOADING';

export const DETAIL: string = PATH + 'DETAIL';
export const HIDE: string = PATH + 'HIDE';

const dispatchList = (data: any[])=> {
  return {
    type: LIST,
    data: data
  }
};
const dispatchListLoading = (data: boolean)=> {
  return {
    type: LIST_LOADING,
    data: data
  }
};

export const fetchList = (ipArr: number[]) => {
  return (dispatch: any, getState: any) => {
    dispatch(dispatchListLoading(true));
    fetch('/erp/brand_list.htm', {
      credentials: 'same-origin'
    })
      .then((response: any) => response.json())
      .then((response: any) => {
        dispatch(dispatchList(response.data));
      })
      .catch((err) => {
        dispatch(dispatchListLoading(false));
        console.log("rejected:", err)
      });
  };
};

export const fetchEdit = (id: any) => {
  return (dispatch: any, getState: any) => {
    fetch('/erp/brand_list.htm')
      .then((response: any) => response.json())
      .then((json: any) => {
        dispatch({
          type: DETAIL,
          data: json,
        });
      });
  };
};

export const hide = () => {
  return (dispatch: any, getState: any) => {
    dispatch({
      type: HIDE,
    });
  };
};