import ConnectToServer from "../API/ConnectToServer";

//Action type
const SET_USER = 'AUTH/SET_USER';
const SET_PAY = 'AUTH/SET_PAY';
const SET_DAY_PAY = 'AUTH/SET_DAY_PAY';
const SET_USER_KEY = 'AUTH/SET_USER_KEY';
const UPDATE_PASSWORD = 'AUTH/UPDATE_PASSWORD';
const SET_BACKDROP = 'AUTH/SET_BACKDROP';
const SET_ERROR_MESSAGE = 'AUTH/SET_ERROR_MESSAGE';
const SET_ERROR_COLLAPSE = 'AUTH/SET_ERROR_COLLAPSE';
const SET_REG_ERROR_COLLAPSE = 'AUTH/SET_REG_ERROR_COLLAPSE';
const SET_OPEN_FORM = 'AUTH/SET_OPEN_FORM';
const SET_OPEN_FORM_PASS = 'AUTH/SET_OPEN_FORM_PASS';
const SET_OPEN_FORM_REGISTRATION = 'AUTH/SET_OPEN_FORM_REGISTRATION';


//Started props
let initialState = {
    emailUnRegistered: false,
    registrationForm: false,
    updateAuthUserForm: false,
    updateLoginAuthUserForm: false,
    notPay: true,
    dayPay: 0,
    logout: false,
    login: true,
    errorAuth: "",
    userId: 0,
    userKey: "",
    authUser: {
        id: 0,
        phone: "",
    },
    backdrop: false,
    formOpen: false,
    formOpenPass: false,
    formOpenRegistration: false,
    openCollapseError: false,
    openCollapseRegError: false,
};

//Reducers functions SET_LOGOUT
const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                authUser: action.user
            }

        case SET_PAY:
            return {
                ...state,
                notPay: action.data
            }

        case SET_DAY_PAY:
            return {
                ...state,
                dayPay: action.data
            }

        case SET_USER_KEY:
            return {
                ...state,
                userId: action.data.userId,
                userKey: action.data.userKey
            }

        case UPDATE_PASSWORD:
            return {
                ...state,
                authUser: { ...state.authUser, password: action.data }
            }

        case SET_BACKDROP:
            return {
                ...state,
                backdrop: action.data
            }

        case SET_OPEN_FORM:
            return {
                ...state,
                formOpen: action.data
            }

        case SET_ERROR_MESSAGE:
            return {
                ...state,
                errorAuth: action.data
            }

        case SET_ERROR_COLLAPSE:
            return {
                ...state,
                openCollapseError: action.data
            }

        case SET_REG_ERROR_COLLAPSE:
            return {
                ...state,
                openCollapseRegError: action.data
            }

        case SET_OPEN_FORM_PASS:
            return {
                ...state,
                formOpenPass: action.data
            }

        case SET_OPEN_FORM_REGISTRATION:
            return {
                ...state,
                formOpenRegistration: action.data
            }

        default:
            return state;
    }
}

//Action Creators functions

const setAuthUser = (data) => {
    return { type: SET_USER, user: data }
}

// const setUserPay = (data) => {
//     return { type: SET_PAY, data }
// }

// const setDayPay = (data) => {
//     return { type: SET_DAY_PAY, data }
// }

const setUserKey = (data) => {
    return { type: SET_USER_KEY, data }
}

const updatePasswordUser = (data) => {
    return { type: UPDATE_PASSWORD, data }
}

const setBackdrop = (data) => {
    return { type: SET_BACKDROP, data }
}

const setErrorMessage = (data) => {
    return { type: SET_ERROR_MESSAGE, data }
}

const setCollapseError = (data) => {
    return { type: SET_ERROR_COLLAPSE, data }
}

const setRegCollapseError = (data) => {
    return { type: SET_REG_ERROR_COLLAPSE, data }
}

const setOpenForm = (data) => {
    return { type: SET_OPEN_FORM, data }
}

const setOpenFormPass = (data) => {
    return { type: SET_OPEN_FORM_PASS, data }
}

const setOpenFormRegistration = (data) => {
    return { type: SET_OPEN_FORM_REGISTRATION, data }
}

// //Thunk functions

export const authUserRequest = (obj) => {
    return async (dispatch) => {
        //dispatch(setErrorAuth(""))
        //dispatch(toggleIsFetching(true))
        const data = await ConnectToServer.getAuthUser(obj)
        if (data) {
            if (data.success === 1) {
                dispatch(setAuthUser(data.authUser))
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
                localStorage.clear("finupkzuser")
                window.location.reload()
                //dispatch(toggleIsFetching(false))
            }
        }
    }
}

export const authUserCheckRequest = (obj) => {
    return async (dispatch) => {
        //dispatch(setErrorAuth(""))
        dispatch(setBackdrop(true))
        const data = await ConnectToServer.getCheckAuthUser(obj)
        if (data.success === 1) {
            dispatch(setUserKey({ userId: data.id, userKey: data.userKey }))
            localStorage.setItem("finupkzuser", JSON.stringify({ userId: data.id, userKey: data.userKey }))
            dispatch(setBackdrop(false))
        } else {
            console.log(data.message)
            dispatch(setErrorMessage(data.message))
            dispatch(setCollapseError(true))
            setTimeout(() => dispatch(setCollapseError(false)), 5000)
            dispatch(setBackdrop(false))
        }

    }
}

export const updateAuthUserRequest = (obj) => {
    return async (dispatch) => {
        dispatch(setBackdrop(true))
        const data = await ConnectToServer.putAuthUser(obj)
        if (data.success === 0) {
            console.log(data.message)
            dispatch(setBackdrop(false))
        } else {
            if (data.success === 1) {
                dispatch(authUserRequest({ id: obj.id, userKey: obj.userKey }))
                dispatch(setBackdrop(false))
                dispatch(setOpenForm(false))
            }
        }
    }
}

export const updateUserPwdRequest = (obj) => {
    return async (dispatch) => {
        dispatch(setBackdrop(true))
        const data = await ConnectToServer.putPassword(obj)
        if (data.success === 0) {
            console.log(data.message)
            dispatch(setBackdrop(false))
        } else {
            if (data.success === 1) {
                dispatch(updatePasswordUser(data.pwd))
                dispatch(setBackdrop(false))
                dispatch(setOpenFormPass(false))
            }
        }
    }
}

export const addUserPwdRequest = (obj) => {
    return async (dispatch) => {
        //dispatch(setBackdrop(true))
        const data = await ConnectToServer.addUser(obj)        
        if (data.success === 0) {
            dispatch(setBackdrop(false))
            dispatch(setErrorMessage(data.message))
            dispatch(setRegCollapseError(true))
            setTimeout(() => dispatch(setRegCollapseError(false)), 5000)
            console.log(data);
        } else {
            if (data.success === 1) {
                dispatch(setBackdrop(false))
                dispatch(setOpenFormRegistration(false))
                dispatch(authUserCheckRequest(obj))
                console.log(data);
            } else {
                if (data.success === 2) {
                    dispatch(setBackdrop(false))
                    dispatch(setErrorMessage(data.message))
                    dispatch(setRegCollapseError(true))
                    setTimeout(() => dispatch(setRegCollapseError(false)), 5000)
                    console.log(data);
                }
            }
        }
    }
}

export default authReducer;