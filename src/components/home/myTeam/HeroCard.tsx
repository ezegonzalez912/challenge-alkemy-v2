import { useContext } from 'react'
import { HeroesContext } from '../../../context/heroes/HeroesContext';
import { ModalContext } from '../../../context/modal/ModalContext';
import { Hero } from '../../../types/interfaces';
import { types } from '../../../types/types';
import { HeroStatsList } from './HeroStatsList';

interface Props {
    hero: Hero
}

export const HeroCard: React.FC<Props> = ({hero}) => {

    const { dispatch } = useContext(HeroesContext);
    const { setHero, isChangeModal } = useContext(ModalContext)
    const { name, image, powerstats } = hero;

    const moreStats = () => {
        isChangeModal()
        setHero(hero)
    }

    const removeHero = () => {
        dispatch({
            type: types.remove_team, 
            payload: hero
        })
    }

    return (
        <div className="herocard-container">
            <div className="herocard_img-remove">
                <img src={image.url} alt={name}/>
                <button className="btn-secondary" onClick={removeHero}>Remove team</button>
            </div>
            <div className="herocard_info-more">
                <h3>{name}</h3>
                <HeroStatsList powerstats={powerstats}/>
                <button className="btn-primary" onClick={moreStats}>More stats</button>         
            </div>
        </div>
    )
}
