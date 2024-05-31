import ConnectToServer from "../API/ConnectToServer";

//Action type
const SET_MESSAGES = 'CHATS/SET_MESSAGES';
const SET_MESSAGE = 'CHATS/SET_MESSAGE';
const SET_BACKDROP = 'CHATS/SET_BACKDROP';
const SET_IS_FETCHING = 'CHATS/SET_IS_FETCHING';
const SET_THREAD_ID = 'CHATS/SET_THREAD_ID';
const SET_RUN_ID = 'CHATS/SET_RUN_ID';
const SET_MESSAGE_ID = 'CHATS/SET_MESSAGE_ID';

//Started props
let initialState = {
    isFetching: false,
    backdrop: false,
    chat_messeges: [{
        chat_id: 0,
        content: "Приветствую вас в чате бизнес-ассистента! Могу ответить на вопросы касательно ведения Бизнеса в Республике Казахстан.",
        date: "",
        time: "",
        type: 0,
        user_id: 0
    }],
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

        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
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

const setisFetching = (isFetching) => {
    return { type: SET_IS_FETCHING, isFetching }
} 

//Thunk functions

export const newMessage = (obj) => {

    return async (dispatch) => {
        const data = await ConnectToServer.setMessage(obj)
        if (data.success === 1) {
            console.log({ chat_id: obj.chat_id });
            dispatch(getAllMessages({ chat_id: obj.chat_id }))
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