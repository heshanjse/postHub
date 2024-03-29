import { ADD_MESSAGE, DELETE_MESSAGE, UPDATE_MESSAGE, SEARCH_MESSAGE } from "./actionType";


export const addMessage =  (text) => {
    return {
        type: ADD_MESSAGE,
        payload: { text }
    }
    // return (dispatch) => {  
    //     let request = {
    //         url: 'add',
    //         data: {body: text}
    //     };
    //     apipost(request)
    //     .then(data => {
    //         console.log(data);
    //         dispatch({
    //             type: ADD_MESSAGE,
    //             payload: { text }
    //         });
    //     });
    // }
}

export const deleteMessage = (id) => {
    return {
        type: DELETE_MESSAGE,
        payload: { id }
    };
}

export const updateMessage = (id, text) => {
    return {
        type: UPDATE_MESSAGE,
        payload: { id, text }
    };
}

export const searchMessages = (textList) => {
    return {
        type: SEARCH_MESSAGE,
        payload: textList
    };
}