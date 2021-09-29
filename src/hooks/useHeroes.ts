import { useState } from "react";
import { heroesByName } from "../services/heroes"
import { Hero, ResHeroByName as Response} from "../types/interfaces";

export const useHeroes = () => {

    const [heroes, setHeroes] = useState<Hero[]>([])
    const [load, setLoad] = useState<Boolean>(false)

    const getHeroesByName = (name: string) => {
        setLoad(true)
        const res = new Promise ((resolve) => {
            heroesByName(name)
            .then((res: Response) => {
                if(res.data.response !== "error"){
                    setHeroes(res.data.results)
                }
                setLoad(false)
                return resolve("ok")
            })
            .catch( () => {
                setLoad(false)
                return resolve("ok")
            })
        })

        return res
    }

    return { heroes, getHeroesByName, load } as const;
}
