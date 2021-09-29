import { createContext, useReducer } from "react";
import { ActionsHeroes, Hero, MyTeam } from "../../types/interfaces";
import { heroesReducer } from "./heroesReducer";
import { initialHeroes } from "./initHeroes";

interface Context {
    myTeam: MyTeam,
    dispatch: React.Dispatch<ActionsHeroes>,
    heroInTeam: (hero: Hero) => Boolean
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const HeroesContext = createContext({} as Context);

export const HeroesProvider: React.FC<Props> = ({children}) => {
    
    const [myTeam, dispatch] = useReducer(heroesReducer, initialHeroes)

    const heroInTeam = (hero:Hero) => {
        return myTeam.heroes.includes(hero)
    }

    const data = {
        myTeam,
        dispatch,
        heroInTeam
    }

    return (
        <HeroesContext.Provider value={data}>
            {children}
        </HeroesContext.Provider>
    )
}