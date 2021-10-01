interface Props {
    prevPage: () => void,
    nextPage: () => void,
    currentPage: number,
    quantityPages: number
}

export const PaginationControls: React.FC<Props>= ({prevPage, nextPage, currentPage, quantityPages}) => {
    return (
        <div className="pagination">
            {currentPage > 0 && <button onClick={prevPage}>Back page</button>}
            <p>{currentPage + 1} of {quantityPages}</p>
            {(currentPage + 1) !== quantityPages && <button onClick={nextPage}>Next page</button>}
        </div>
    )
}
