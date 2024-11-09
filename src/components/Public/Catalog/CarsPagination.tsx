import { Link } from "react-router-dom"
import { scrollToTop } from "../../../utils/scrollToTop"

type CarsPaginationProps = {
    page: number,
    totalPages: number
}

export const CarsPagination = ({page, totalPages}:CarsPaginationProps)=> {
    const pages = Array.from({length: totalPages}, (_, i) => i+1)
    
    return (
        <nav className="flex justify-center items-center text-center space-x-1">
            {page > 1 && (
                <Link onClick={scrollToTop} className="flex items-center justify-center bg-white  text-sm border border-gray-400 rounded-full w-8 h-8 focus:z-10 cursor-pointer" to={`?page=${page-1}`}> &laquo; </Link>
            )}
            {pages.map((currentPage)=> (
                <Link onClick={scrollToTop} className={`${page === currentPage && 'bg-primary text-cream'} flex items-center justify-center text-sm w-8 h-8  border border-gray-400 rounded-full focus:z-10 cursor-pointer`} key={currentPage} to={`?page=${currentPage}`}>{ currentPage }</Link>
            ))}
            {page < totalPages && (
                <Link onClick={scrollToTop} className="flex items-center justify-center bg text-sm  border border-gray-400 rounded-full focus:z-10 w-8 h-8  cursor-pointer" to={`?page=${page+1}`}> &raquo; </Link>
            )}
        </nav>
    )
}