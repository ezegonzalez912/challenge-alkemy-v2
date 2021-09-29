import { useHeroes } from '../../hooks/useHeroes'
import { Link } from 'react-router-dom';
import { SearchForm } from './SearchForm';
import { SearchGrid } from './SearchGrid';
import { usePagination } from '../../hooks/usePagination';
import { FormikValues } from 'formik';
import { PaginationControls } from './PaginationControls';

export const SearchScreen = () => {

    const {heroes, getHeroesByName, load} = useHeroes();
    const {filtered, currentPage, prevPage ,nextPage, quantityPages, setCurrentPage} = usePagination(heroes, 16)

    const handleSubmit = (values: FormikValues, {setSubmitting}:any) => {
        setCurrentPage(0)
        getHeroesByName(values.search)
        .then(() => setSubmitting(false))
    }

    return (
        <div className="search_screen">
            <SearchForm handleSubmit={handleSubmit}/>
            {
                heroes.length > 16 && <PaginationControls 
                    currentPage={currentPage} 
                    prevPage={prevPage} 
                    nextPage={nextPage} 
                    quantityPages={quantityPages}
                />
            }
            <SearchGrid heroes={filtered} load={load}/>
            <button className="btn-primary search-back-btn">
                <Link to="/">Back to my team</Link>
            </button>
        </div>
    )
}
