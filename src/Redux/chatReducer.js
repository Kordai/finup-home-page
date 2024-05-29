import ConnectToServer from "../API/ConnectToServer";

//Action type
const SET_MESSAGES = 'CHATS/SET_MESSAGES';
const SET_MESSAGE = 'CHATS/SET_MESSAGE';
const SET_BACKDROP = 'CHATS/SET_BACKDROP';
const SET_THREAD_ID = 'CHATS/SET_THREAD_ID';
const SET_RUN_ID = 'CHATS/SET_RUN_ID';
const SET_MESSAGE_ID = 'CHATS/SET_MESSAGE_ID';

//Started props
let initialState = {
    isFetching: false,
    backdrop: false,
    chat_messeges: [],
    threadId: '',
    runId: '',
    messageId: '',

};

//Reducers functions
const chatReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_MESSAGES:
            return {
                ...state,
                chat_messeges: action.messeges
            }

        case SET_MESSAGE:
            return {
                ...state,
                chat_messeges: [...state.chat_messeges, action.messege]
            }

        case SET_BACKDROP:
            return {
                ...state,
                backdrop: action.data
            }

        case SET_THREAD_ID:
            return {
                ...state,
                threadId: action.threadId
            }

        case SET_RUN_ID:
            return {
                ...state,
                runId: action.runId
            }

        case SET_MESSAGE_ID:
            return {
                ...state,
                messageId: action.messageId
            }

        default:
            return state;
    }
}

//Action Creators functions

const setMesseges = (messeges) => {
    return { type: SET_MESSAGES, messeges }
}

const setMessege = (messege) => {
    return { type: SET_MESSAGE, messege }
}

const setBackdrop = (data) => {
    return { type: SET_BACKDROP, data }
}


//Thunk functions

export const newMessage = (obj, idChat) => {
    return async (dispatch) => {
        const data = await ConnectToServer.setMessage(obj)
        if (data.success === 1) {
            dispatch(getAllMessages(idChat))
        } else {
            console.log(data.message)
            //dispatch(toggleIsFetching(false))
        }
    }
}

export const getAllMessages = (idChat) => {
    return async (dispatch) => {
        const data = await ConnectToServer.getMessages(idChat)
        if (data.success === 1) {
            dispatch(setMesseges(data.messeges))
        } else {
            console.log(data.message)
            //dispatch(toggleIsFetching(false))
        }
    }
}

export default chatReducer;