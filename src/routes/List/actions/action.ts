import {LIST, LIST_LOADING, DETAIL, HIDE, ROWSELECT, EDIT} from "./actionTypes";

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
const dispatchEdit = (data: any)=> {
  return {
    type: EDIT,
    data: data
  };
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
    if (id != -1) {
      let formData = new FormData();
      formData.append('id', id);
      fetch('/erp/brand_load.htm', {
        credentials: 'same-origin',
        method: "POST",
        body: formData
      })
        .then((response: any) => response.json())
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
    dispatch({
      type: HIDE,
    });
  };
};

export const onRowSelectChange = ((selectedRowKeys: any, selectedRows: any)=> {
  return (dispatch: any, getState: any) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    dispatch({
      type: ROWSELECT,
      selectedRowKeys,
      selectedRows
    });
  };
});

