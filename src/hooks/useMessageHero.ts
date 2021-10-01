import { useContext, useEffect, useState } from "react"
import { HeroesContext } from "../context/heroes/HeroesContext";
import { Hero } from "../types/interfaces";

export const useMessageHero = (hero: Hero) => {

    const { myTeam } = useContext(HeroesContext);
    const [message, setMessage] = useState<string>("")

    const { heroes, alignment } = myTeam;
    const { biography } = hero;

    useEffect(() => {
        if(heroes.length === 6){
            return setMessage("Full team")
        }
        if(biography.alignment === "bad" && alignment.bad === 3){
            return setMessage("Complete bad heroes")
        }
        if(biography.alignment === "good" && alignment.good === 3){
            return setMessage("Complete good heroes")
        }
        setMessage("")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [myTeam])

    return message;
}
