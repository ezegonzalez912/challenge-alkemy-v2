import { useContext } from 'react';
import { HeroesContext } from '../../context/heroes/HeroesContext';
import { Powerstat } from '../../types/interfaces';
import { CircleStyleStats } from '../stats/CircleStyleStats';
import { AparencePromedy } from '../stats/AparencePromedy';

export const StatsCard = () => {

    const { myTeam } = useContext(HeroesContext)
    const { height, weight } = myTeam.appearance;

    const powerStatsSort = myTeam.powerstats.sort((a:Powerstat, b:Powerstat) => b.value - a.value)

    return (
        <div className="stats-team_screen">
            <h1>Stats <span className="fw-400">team</span></h1>
            <div className="stats-team_grid">
                {powerStatsSort.map( (powerstat: Powerstat, index: number) => (
                    <CircleStyleStats key={index} value={powerstat.value} name={powerstat.power} />
                ))}
                <div className="progress-circle_container">
                    <AparencePromedy value={height} unit={"cm"} title={"Height promedy"}/>
                    <AparencePromedy value={weight} unit={"kg"} title={"Weight promedy"}/>
                </div>
            </div>
        </div>
    )
}