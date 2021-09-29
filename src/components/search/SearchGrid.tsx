import { Hero } from '../../types/interfaces'
import { HeroCard } from './HeroCard'

interface Props {
    heroes: Hero[],
    load: Boolean
}

export const SearchGrid: React.FC<Props> = ({heroes, load}) => {

    return (
        <div className="search_grid">
            {
                load ? <div className='spinner' />
                :
                heroes ? heroes.map( (hero:Hero) => (
                    (hero.powerstats.intelligence !== "null") && 
                    <HeroCard key={hero.id} hero={hero} />
                ))
                : <p>No results found.</p>
            }
        </div>
    )
}
