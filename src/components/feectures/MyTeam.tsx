import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { HeroesContext } from '../../context/heroes/HeroesContext';
import { Hero } from '../../types/interfaces';
import { AddHeroCardMyTeam } from '../cards/AddHeroCardMyTeam';
import { HeroCardMyTeam } from '../cards/HeroCardMyTeam';

export const MyTeam = () => {

    const { myTeam } = useContext(HeroesContext);

    const { heroes } = myTeam;

    return (
        <div className="my-team_screen">
            <h1>My <span className="fw-400">team</span></h1>
            <div className="hero_team-grid">
                {
                    heroes.map( (hero:Hero) => (
                        <HeroCardMyTeam key={hero.id} hero={hero} />
                    ))
                    
                }
                {
                    heroes.length < 6 && 
                        <Link to="/addheroes">
                            <AddHeroCardMyTeam/>
                        </Link>
                }
            </div>
        </div>
    )
}
