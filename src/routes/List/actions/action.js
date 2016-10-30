/**
 * Created by lixiaoyang on 2016/10/30.
 */
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export const clearCompleted = (ipArr) => {
    return (dispatch, getState) => {
        fetch('/tomcat/shutdown/' + ipArr.join('-'))
            .then((response)=> {
                return response.blob();
            })
            .then(myBlob=> {
                URL.createObjectURL(myBlob);
                console.log(myBlob)
            });
        dispatch({
            type: CLEAR_COMPLETED,
            payload: 123
        });
    }
}