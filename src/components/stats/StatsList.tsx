import { Powerstats } from '../../types/interfaces';
import { LineStyleStats } from './LineStyleStats';

interface Props {
    powerstats: Powerstats
}

export const StatsList:React.FC<Props> = ({powerstats}) => {

    const {combat, durability, intelligence, power, speed, strength} = powerstats;

    return (
        <div className="hero-stats-list">
            <LineStyleStats value={combat} title={"Combat"}/>
            <LineStyleStats value={durability} title={"Durability"}/>
            <LineStyleStats value={intelligence} title={"Intelligence"}/>
            <LineStyleStats value={power} title={"Power"}/>
            <LineStyleStats value={speed} title={"Speed"}/>
            <LineStyleStats value={strength} title={"Strength"}/>
        </div>
    )
}

