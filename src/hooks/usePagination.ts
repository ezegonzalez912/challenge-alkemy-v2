import { useEffect, useState } from "react"

export const usePagination =<T> (initState:T[], maxElements:number) => {

    const [ filtered, setFiltered ] = useState(initState)
    const [ currentPage, setCurrentPage ] = useState<number>(0)

    const quantityOfElements = currentPage * maxElements
    const quantityPages = Math.ceil(initState.length / maxElements)

    const nextPage = () => {
        if(initState.length > quantityOfElements + maxElements){
            setCurrentPage(currentPage + 1)
        }
    }

    const prevPage = () => {
        if(quantityOfElements > 0){
            setCurrentPage(currentPage - 1)
        }
    }

    useEffect(() => {
        const newElements = initState.slice(currentPage, quantityOfElements + maxElements);
        setFiltered(newElements)
    }, [currentPage, initState, maxElements, quantityOfElements])

    return {filtered, currentPage, prevPage ,nextPage, quantityPages, setCurrentPage}
}
