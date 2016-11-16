/**
 * Created by lixiaoyang on 2016/10/30.
 */
const ZHIHU: string = 'ZHIHU/';
export const LIST: string = ZHIHU + 'LIST';
export const LIST_LOADING: string = ZHIHU + 'LIST_LOADING';
export const SHOW: string = ZHIHU + 'SHOW';
export const EDIT: string = ZHIHU + 'EDIT';
export const SAVE: string = ZHIHU + 'SAVE';
export const SAVE_LOADING: string = ZHIHU + 'SAVE_LOADING';

export const DETAIL: string = ZHIHU + 'DETAIL';
export const HIDE: string = ZHIHU + 'HIDE';

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
    fetch('http://localhost:70/erp/brand_list.htm', {
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

export const fetchDetail = (id: number) => {
  return (dispatch: any, getState: any) => {
    fetch(`/api/4/news/${id}`)
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