import { ActionsAuth, User } from "../../types/interfaces";
import { types } from "../../types/types";

export const initialUser: User = JSON.parse(localStorage.getItem("user-hero_app") || "") || {token: null}

export const authReducer = (state: User, action: ActionsAuth):User => {

    switch(action.type){
        case types.login:
            return {
                token: action.payload
            };
        case types.logout:
            return {
                token: action.payload
            }
        default:
            return state;
    }
}