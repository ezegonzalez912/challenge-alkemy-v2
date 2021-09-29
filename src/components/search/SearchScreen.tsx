import { useHeroes } from '../../hooks/useHeroes'
import { Link } from 'react-router-dom';
import { SearchForm } from './SearchForm';
import { SearchGrid } from './SearchGrid';
import { usePagination } from '../../hooks/usePagination';
import { FormikValues } from 'formik';

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
            <SearchGrid heroes={filtered} load={load}/>
            {
                heroes.length > 16 &&
                <div>
                    <button onClick={prevPage}>Back</button>
                    <p>{currentPage + 1} of {quantityPages}</p>
                    <button onClick={nextPage}>Next</button>
                </div>
            }
            <button className="btn-primary search-back-btn">
                <Link to="/">Back to my team</Link>
            </button>
        </div>
    )
}
