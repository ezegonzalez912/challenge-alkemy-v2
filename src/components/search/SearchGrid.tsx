import { Hero } from '../../types/interfaces'
import { HeroCard } from './HeroCard'

interface Props {
    heroes: Hero[],
    load: Boolean
}

export const SearchGrid: React.FC<Props> = ({heroes, load}) => {

    if(load){
        return <div className='spinner' />
    }

    return (
        <div className="search_grid">
            {
                heroes ? heroes.map( (hero:Hero) => (
                    (hero.powerstats.intelligence !== "null") && 
                    <HeroCard key={hero.id} hero={hero} />
                ))
                : <p>No results found.</p>
            }
        </div>
    )
}
