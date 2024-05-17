//import ConnectToServer from "../APIConnect/ConnectToServer";

//Action type
//const SET_CHECK_MENU = 'WORKOUT/SET_CHECK_MENU';
// const SET_NEW_PERSONAL_WORKOUT = 'WORKOUT/SET_NEW_PERSONAL_WORKOUT';

//Started props
let initialState = {
    openMenu: true,
    main: [
        { label: "Home", to: "/" },
        { label: "MVP Demo", to: "/MVP" },
        // { label: "Trainers", to: "/trainers" },
        // { label: "Clubs", to: "/clubs" },
        // { label: "Personal workouts", to: "/personalWorkouts" },
        // { label: "Group workouts", to: "/groupWorkouts" },
        // { label: "Challenge", to: "/challenge" }

    ],
    room: [
        { label: "Info", to: "/room/dashboard" },
        { label: "Workouts", to: "/room/workout" },
        { label: "News", to: "/room/news" },
        { label: "Subscription", to: "/room/subscription" },
        { label: "Settings", to: "/room/settings" }

    ]

};

//Reducers functions
const menuReducer = (state = initialState, action) => {

    switch (action.type) {


            // case SET_CHECK_MENU:
            //     return {
            //         ...state,
            //         openMenu: action.checkMenu
            //     }
        //     case SET_USER_ID:
        //         return {
        //             ...state,
        //             userId: action.userId
        //         }
        //     case SET_ERROR_AUTH:
        //         return {
        //             ...state,
        //             errorAuth: action.errorAuth
        //         }
        default:
            return state;
    }
}

//Action Creators functions
// export const setNewTemplate = (newTemplate) => {
//     let temp = {
//         id: initialState.templatesWorkout.length + 1,
//         name: "STEP TO BEGIN",
//         reating: 0,
//         fitnessCenterId: 0,
//         maxSeats: 30,
//         text: "",
//         img: "",
//         levelId: 0,
//         address: "",
//         trainingArea: "",
//         location: "",
//         date: "",
//         creatorId: 1
//     }
//     newTemplate = { ...temp, ...newTemplate }
//     return { type: SET_NEW_TEMPLATE, newTemplate }
// }

// export const setNewCheckMenu = (checkMenu) => {    
//     return { type: SET_CHECK_MENU, checkMenu }
// }


// const setErrorAuth = (errorAuth) => {
//     return { type: SET_ERROR_AUTH, errorAuth }
// }

// const setUserId = (userId) => {
//     return { type: SET_USER_ID, userId }
// }

// const toggleIsFetching = (isFetching) => {
//     return { type: TOGGLE_IS_FETCHING, isFetching }
// }

//Thunk functions
// export const getAuthUser = (id) => {
//     return async (dispatch) => {
//         dispatch(toggleIsFetching(true))
//         const data = await ConnectToServer.getUser(id)
//         dispatch(setAuthUser(data.user))
//         dispatch(toggleIsFetching(false))
//     }
// }

// export const authUser = (login) => {
//     return async (dispatch) => {
//         dispatch(toggleIsFetching(true))
//         const data = await ConnectToServer.authUser(login)
//         if (data.success === 1) {
//             dispatch(setUserId(data.user.id))
//             dispatch(getAuthUser(data.user.id))
//             dispatch(toggleIsFetching(false))
//         } else {
//             dispatch(setErrorAuth(data.message))
//             dispatch(toggleIsFetching(false))
//         }
//     }
// }

// export const logoutUser = () => {
//     return (dispatch) => {
//         dispatch(setUserId(null))
//         dispatch(setAuthUser({
//             id: null,
//             photo: null,
//             login: null,
//             firstName: null,
//             lastName: null
//         }))
//     }
// }

export default menuReducer;