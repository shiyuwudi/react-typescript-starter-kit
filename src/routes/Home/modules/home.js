// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'

// ------------------------------------
// Actions
// ------------------------------------
export const shutdown = (ipArr) => {
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
            type: COUNTER_INCREMENT,
            payload: 123
        });
    }
}

/*  This is a thunk, meaning it is a function that immediately
 returns a function for lazy evaluation. It is incredibly useful for
 creating async actions, especially when combined with redux-thunk!

 NOTE: This is solely for demonstration purposes. In a real application,
 you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
 reducer take care of this logic.  */

export const doubleAsync = () => {
    return (dispatch, getState) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                dispatch(shutdown(getState().home))
                resolve()
            }, 200)
        })
    }
}

export const actions = {
    shutdown,
    doubleAsync
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [COUNTER_INCREMENT]: (state, action) => state + action.payload
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function homeReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]

    return handler ? handler(state, action) : state
}
