import { useContext } from 'react'
import { HeroesContext } from '../../context/heroes/HeroesContext'
import { ModalContext } from '../../context/modal/ModalContext';
import { useMessageHero } from '../../hooks/useMessageHero';
import { Hero } from '../../types/interfaces';
import { types } from '../../types/types';

interface Props {
    hero: Hero
}

export const HeroCardSearch: React.FC<Props> = ({hero}) => {

    const { myTeam, dispatch } = useContext(HeroesContext);
    const {setHero, isChangeModal} = useContext(ModalContext)

    const message = useMessageHero(hero);

    const moreStats = () => {
        isChangeModal()
        setHero(hero)
    }

    const addHero = () => dispatch({type: types.add_team, payload: hero})
    const removeHero = () => dispatch({type: types.remove_team, payload: hero})
    const heroAlreadyExists = () => myTeam.heroes.some( (heroP:Hero) => heroP.id === hero.id)

    return (
        <div className="hero-card-search">
            <h1>{hero.name}</h1>
            <img src={hero.image.url} alt={hero.name}/>
            {
                heroAlreadyExists() ?
                <button className="btn-primary btn-warning"  onClick={removeHero}>
                    Remove hero
                </button>
                :
                <button className="btn-primary" onClick={addHero} disabled={message === "" ? false : true}>
                    {message === "" ? "Add my team" : message}
                </button>
            }
            <button className="btn-secondary" onClick={moreStats}>View more</button>
        </div>
    )
}
