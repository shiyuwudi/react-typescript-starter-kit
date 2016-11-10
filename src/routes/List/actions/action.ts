/**
 * Created by lixiaoyang on 2016/10/30.
 */
const ZHIHU: string = 'ZHIHU';
export const LIST: string = ZHIHU + 'LIST';
export const DETAIL: string = ZHIHU + 'DETAIL';
export const HIDE: string = ZHIHU + 'HIDE';

export const fetchList = (ipArr: number[]) => {
  return (dispatch: any, getState: any) => {
    fetch('/api/4/news/latest')
      .then((response: any) => response.json())
      .then((json: any) => {
        dispatch({
          type: LIST,
          data: json,
        });
      });
  }
};

export const fetchDetail = (id: number)=> {
  return (dispatch: any, getState: any) => {
    fetch(`/api/4/news/${id}`)
      .then((response: any) => response.json())
      .then((json: any) => {
        dispatch({
          type: DETAIL,
          data: json,
        });
      });
  }
};

export const hide = ()=> {
  return (dispatch: any, getState: any) => {
    dispatch({
      type: HIDE,
    });
  }
}