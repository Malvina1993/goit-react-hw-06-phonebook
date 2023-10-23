import {createStore, combineReducers} from "redux"
import { devToolsEnhancer} from "@redux-devtools/extension";

import { filterReducer } from './filterReducer.js'
import {contactsReducer} from './contactsReducer.js'
const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
})

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);