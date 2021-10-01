import { Hero } from '../../types/interfaces'
import { HeroCardSearch } from '../cards/HeroCardSearch'

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
                    <HeroCardSearch key={hero.id} hero={hero} />
                ))
                : <p>No results found.</p>
            }
        </div>
    )
}
