/**
 * Created by lixiaoyang on 2016/10/30.
 */
export const CLEAR_COMPLETED: string = 'CLEAR_COMPLETED';

export const clearCompleted = (ipArr: number[]) => {
  return (dispatch: any, getState: any) => {
    fetch(`/tomcat/shutdown/${ipArr.join('-')}`)
      .then((response: any) =>
        response.blob()
      )
      .then((myBlob: any) => {
        URL.createObjectURL(myBlob);
        console.log(myBlob);
      });
    dispatch({
      type: CLEAR_COMPLETED,
      payload: 123,
    });
  }
};