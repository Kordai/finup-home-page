import ConnectToServer from "../API/ConnectToServer";

//Action type
const SET_USER = 'AUTH/SET_USER';
const SET_BACKDROP = 'AUTH/SET_BACKDROP';

//Started props
let initialState = {  
    
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

        

        default:
            return state;
    }
}

//Action Creators functions

const setUser = (data) => {
    return { type: SET_USER, user: data }
}

const setBackdrop = (data) => {
    return { type: SET_BACKDROP, data }
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
        console.log(data);
        if (data) {
            dispatch(setUser(data.user))
            localStorage.setItem('finupkzuserchat', JSON.stringify(data.user))
        }
    }
}

export default authReducer;