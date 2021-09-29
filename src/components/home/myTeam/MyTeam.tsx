import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { HeroesContext } from '../../../context/heroes/HeroesContext';
import { Hero } from '../../../types/interfaces';
import { AddHeroCard } from './AddHeroCard';
import { HeroCard } from './HeroCard';

export const MyTeam = () => {

    const { myTeam } = useContext(HeroesContext);

    const { heroes } = myTeam;

    return (
        <div className="my-team_screen">
            <h1>My <span className="fw-400">team</span></h1>
            <div className="hero_team-grid">
                {
                    heroes.map( (hero:Hero) => (
                        <HeroCard key={hero.id} hero={hero} />
                    ))
                    
                }
                {
                    heroes.length < 6 && 
                        <Link to="/search">
                            <AddHeroCard/>
                        </Link>
                }
            </div>
        </div>
    )
}
