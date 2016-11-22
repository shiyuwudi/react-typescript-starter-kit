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
  return Object.assign({
    type: LIST
  }, data);
};
const dispatchListLoading = (data: boolean)=> {
  return {
    type: LIST_LOADING,
    data: data
  }
};

export const fetchList = (pagination: any) => {
  return (dispatch: any, getState: any) => {
    dispatch(dispatchListLoading(true));

    let formData = new FormData();
    for (let i in pagination) {
      formData.append(i, pagination[i]);
    }

    fetch('/erp/brand_list.htm', {
      credentials: 'same-origin',
      method: "POST",
      body: formData
    })
      .then((response: any) => response.json())
      .then((response: any) => {
        dispatch(dispatchList(response));
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