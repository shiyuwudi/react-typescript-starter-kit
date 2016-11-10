/**
 * Created by lixiaoyang on 2016/10/30.
 */
const ZHIHU: string = 'ZHIHU';
export const LIST: string = ZHIHU + 'LIST';

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