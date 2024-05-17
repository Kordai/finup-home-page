import  {applyMiddleware, combineReducers, createStore} from 'redux';
import { thunk } from 'redux-thunk';
import authReducer from './authReducer';
import langReducer from './langReducer';
import globalSattingsReducer from './globalSattingsReducer';
import chatReducer from './chatReducer';

let reducers = combineReducers({      
    auth: authReducer,    
    language: langReducer,    
    globalSattings: globalSattingsReducer,
    chat: chatReducer,
});

//подключение devtools chrome - выявление ошибок через браузер хром
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
let store = createStore(reducers, applyMiddleware(thunk));
//window.store = store;// глобальная переменная для проверки store
export default store;