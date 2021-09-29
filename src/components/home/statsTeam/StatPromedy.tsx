import { useContext } from "react"
import { HeroesContext } from "../../../context/heroes/HeroesContext"

interface Props {
    value: number,
    unit: string,
    title: string
}

export const StatPromedy: React.FC<Props> = ({value, unit, title}) => {

    const { myTeam } = useContext(HeroesContext)

    const promedy = (value:number) => {
        const promedy = value / myTeam.heroes.length
        return Math.trunc(promedy)
    }

    return (
        <>
            <p>{title}</p>
            <h2 className="c-primary">{promedy(value) ? promedy(value) : 0} {unit}</h2>
        </>
    )
}