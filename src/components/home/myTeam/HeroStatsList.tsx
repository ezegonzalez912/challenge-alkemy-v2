import { Powerstats } from '../../../types/interfaces';
import { HeroCardStatItem } from './HeroCardStatItem';

interface Props {
    powerstats: Powerstats
}

export const HeroStatsList:React.FC<Props> = ({powerstats}) => {

    const {combat, durability, intelligence, power, speed, strength} = powerstats;

    return (
        <div className="hero-stats-list">
            <HeroCardStatItem value={combat} title={"Combat"}/>
            <HeroCardStatItem value={durability} title={"Durability"}/>
            <HeroCardStatItem value={intelligence} title={"Intelligence"}/>
            <HeroCardStatItem value={power} title={"Power"}/>
            <HeroCardStatItem value={speed} title={"Speed"}/>
            <HeroCardStatItem value={strength} title={"Strength"}/>
        </div>
    )
}

