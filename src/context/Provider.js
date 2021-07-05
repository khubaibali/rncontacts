import React,{createContext,useReducer} from 'react'
import auth from './reducers/auth'
import contacts from './reducers/contacts'
import authInitialState from './initialState/authState'
import contactsInitialState from './initialState/contactsInitialState'

export const GlobalContext = createContext({})
const GlobalProvider = ({children}) =>{
const [authState , authDispatch] = useReducer( auth,authInitialState)
const [contactsState , contactsDispatch] = useReducer( contacts,contactsInitialState)
return <GlobalContext.Provider value={authState,contactsState,authDispatch,contactsDispatch}>{children}</GlobalContext.Provider>

} 

export default GlobalProvider