import { createContext, useEffect, useReducer } from "react"
import AuthModeReducer from "./AuthReducer";

const INITIAL_STATE = {
    currentUser: JSON.parse(localStorage.getItem("user")) || null,
  };
  

export const AuthModeContext = createContext(INITIAL_STATE);

export const AuthModeContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthModeReducer, INITIAL_STATE);

    useEffect(() =>{
        localStorage.setItem("user", JSON.stringify(state.currentUser));
    },[state.currentUser]);

    return(
        <AuthModeContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
            {children}
        </AuthModeContext.Provider>
    );
};