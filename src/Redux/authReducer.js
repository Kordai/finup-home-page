import ConnectToServer from "../API/ConnectToServer";

//Action type
const SET_USER = 'AUTH/SET_USER';
const SET_BACKDROP = 'AUTH/SET_BACKDROP';
const SET_OPEN_FORM_ACCOUNTANT = 'AUTH/SET_OPEN_FORM_ACCOUNTANT';
const SET_OPEN_FORM_CLIENT = 'AUTH/SET_OPEN_FORM_CLIENT';
const SET_OPEN_FORM_FNO = 'AUTH/SET_OPEN_FORM_FNO';

//Started props
let initialState = {
    openFormNewAccountant: false,
    openFormNewClient: false,
    openFormNewFNO: false,
    authUser: {
        id: 0,
    },
    backdrop: false,

};

//Reducers functions SET_LOGOUT
const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                authUser: action.user
            }
        case SET_OPEN_FORM_ACCOUNTANT:
            return {
                ...state,
                openFormNewAccountant: action.data
            }

        case SET_OPEN_FORM_CLIENT:
            return {
                ...state,
                openFormNewClient: action.data
            }

        case SET_OPEN_FORM_FNO:
            return {
                ...state,
                openFormNewFNO: action.data
            }


        default:
            return state;
    }
}

//Action Creators functions

const setUser = (data) => {
    return { type: 'AUTH/SET_USER', user: data }
}

const setOpenFormAccountant = (data) => {
    return { type: SET_OPEN_FORM_ACCOUNTANT, data }
}

const setOpenFormClient = (data) => {
    return { type: SET_OPEN_FORM_CLIENT, data }
}

const setOpenFormFNO = (data) => {
    return { type: SET_OPEN_FORM_FNO, data }
}

// //Thunk functions

export const authUserRequest = (obj) => {
    return async (dispatch) => {
        //dispatch(setErrorAuth(""))
        //dispatch(toggleIsFetching(true))
        const data = await ConnectToServer.getAuthUser(obj)
        if (data) {
            if (data.success === 1) {
                //dispatch(setAuthUser(data.authUser))
                // const pairDay = Math.ceil((new Date(parseInt(data.authUser.datePay.slice(6, 10)), parseInt(data.authUser.datePay.slice(3, 5)) - 1, parseInt(data.authUser.datePay.slice(0, 2)) + 1) - new Date()) / (1000 * 3600 * 24));
                // dispatch(setDayPay(pairDay))
                // if (pairDay > 0) {
                //     dispatch(setAuthUser(data.authUser))

                // } else {
                //     dispatch({ type: 'OLDAPPLICATION/SET_BACKDROP', data: false })
                //     dispatch(setUserPay(false))
                // }

            } else {
                console.log(data.message)
                //выход

                //dispatch(toggleIsFetching(false))
            }
        }
    }
}

export const addUserChatRequest = () => {
    return async (dispatch) => {
        const data = await ConnectToServer.addUserChat()
        if (data) {
            dispatch(setUser(data.user))
            console.log(data.user);
            localStorage.setItem('finupkzuserchat', JSON.stringify(data.user))
        }
    }
}

export const newAccountantRequest = (obj) => {
    return async (dispatch) => {
        const data = await ConnectToServer.sendNewAccountant(obj)
        if (data) {
            console.log(data);
            dispatch(setOpenFormAccountant(false))
        }
    }
}

export const newClientRequest = (obj) => {
    return async (dispatch) => {
        const data = await ConnectToServer.sendNewClient(obj)
        if (data) {
            console.log(data);
            dispatch(setOpenFormClient(false))
        }
    }
}

export const newFNORequest = (obj) => {
    return async (dispatch) => {
        const data = await ConnectToServer.sendNewFNO(obj)
        if (data) {
            console.log(data);
            dispatch(setOpenFormFNO(false))
        }
    }
}

export default authReducer;