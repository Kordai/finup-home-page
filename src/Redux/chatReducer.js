import ConnectToServer from "../API/ConnectToServer";

//Action type
const SET_ALL_CHATS = 'CHATS/SET_ALL_CHATS';
const SET_USERS_CHAT = 'CHATS/SET_USERS_CHAT';
const SET_MESSAGES = 'CHATS/SET_MESSAGES';
const SET_MESSAGE = 'CHATS/SET_MESSAGE';
const SET_ALL_MESSAGES_STATUS = 'CHATS/SET_ALL_MESSAGES_STATUS';
const SET_MESSAGES_STATUS = 'CHATS/SET_MESSAGES_STATUS';
const SET_BACKDROP = 'CHATS/SET_BACKDROP';
const UPLOAD_FILE = 'CHATS/UPLOAD_FILE';

//Started props
let initialState = {
    isFetching: false,
    backdrop: false,
    file: '',
    chats_id: [],
    chat_users: [],
    chat_messeges: [],
    status_chat_messeges: [],
};

//Reducers functions
const chatReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_ALL_CHATS:
            return {
                ...state,
                chats_id: action.chats
            }

        case SET_USERS_CHAT:
            return {
                ...state,
                chat_users: action.users
            }

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

        case SET_ALL_MESSAGES_STATUS:
            return {
                ...state,
                status_chat_messeges: action.status
            }

        case SET_MESSAGES_STATUS:
            return {
                ...state,
                status_chat_messeges: [...state.status_chat_messeges, action.status]
            }

        case SET_BACKDROP:
            return {
                ...state,
                backdrop: action.data
            }

        case UPLOAD_FILE:
            return {
                ...state,
                file: action.file
            }

        default:
            return state;
    }
}

//Action Creators functions
const setChats = (chats) => {
    return { type: SET_ALL_CHATS, chats }
}

const setUsers = (users) => {
    return { type: SET_USERS_CHAT, users }
}

const setMesseges = (messeges) => {
    return { type: SET_MESSAGES, messeges }
}

const setMessege = (messege) => {
    return { type: SET_MESSAGE, messege }
}

const setALLStatus = (status) => {
    return { type: SET_ALL_MESSAGES_STATUS, status }
}

const setStatus = (status) => {
    return { type: SET_MESSAGES_STATUS, status }
}

const setBackdrop = (data) => {
    return { type: SET_BACKDROP, data }
}

const setFile = (file) => {
    return { type: UPLOAD_FILE, file }
}

//Thunk functions
export const chatsRequest = (obj) => {
    return async (dispatch) => {
        const data = await ConnectToServer.getALLChats(obj)
        if (data.success === 1) {
            dispatch(setChats(data.chats))
            dispatch(setUsers(data.users))
            dispatch(setMesseges(data.messeges))
            dispatch(setALLStatus(data.status))
        } else {
            console.log(data.message)
            dispatch(setChats([]))
            dispatch(setUsers([]))
            dispatch(setMesseges([]))
            dispatch(setALLStatus([]))
            //dispatch(toggleIsFetching(false))
        }
    }
}

export const newMessage = (obj, mycomp) => {
    return async (dispatch) => {
        const data = await ConnectToServer.setMessage(obj)
        if (data.success === 1) {
            dispatch(setMessege(obj))
        } else {
            console.log(data.message)
            //dispatch(toggleIsFetching(false))
        }
    }
}

export const setStatusMessageRequest = (obj) => {
    return async (dispatch) => {
        const data = await ConnectToServer.setStatusMessage(obj)
        if (data.success === 1) {
            dispatch(setStatus(obj))
            //console.log(data);
        } else {
            console.log(data.message)
            //dispatch(toggleIsFetching(false))
        }
    }
}

export const uploadFileRequest = (file, chat_id) => {
    return async (dispatch) => {
        dispatch(setBackdrop(true))
        const data = await ConnectToServer.putFileChat(file, chat_id)

        if (data.success === 1) {
            dispatch(setFile(data.img))
            console.log(data.img);
            dispatch(setBackdrop(false))
        } else {
            console.log('ERROR UPLOAD FILE');
            dispatch(setBackdrop(false))
        }

    }
}

export default chatReducer;