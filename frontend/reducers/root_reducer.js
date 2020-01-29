import { combineReducers } from "redux";

import sessionReducer from './session_reducer';

import sessionErrorsReducer from './session_errors_reducer';

import errorsReducer from './errors_reducer';

import entitiesReducer from './entities_reducer';

import uiReducer from "./ui_reducer";


const rootReducer = combineReducers({
    ui: uiReducer,
    session: sessionReducer, 
    sessionErrors: sessionErrorsReducer, 
    errors: errorsReducer, 
    entities: entitiesReducer
});

export default rootReducer;