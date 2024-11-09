import { Link } from "react-router-dom"

type CarsPaginationProps = {
    page: number,
    totalPages: number
}

export const CarsPagination = ({page, totalPages}:CarsPaginationProps)=> {
    const pages = Array.from({length: totalPages}, (_, i) => i+1)
    const scrollToTop = ()=> {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <nav className="flex justify-center space-x-1">
            {page > 1 && (
                <Link onClick={scrollToTop} className="bg-white px-4  py-2 text-sm border border-gray-400 rounded-lg focus:z-10 cursor-pointer" to={`?page=${page-1}`}> &laquo; </Link>
            )}
            {pages.map((currentPage)=> (
                <Link onClick={scrollToTop} className={`${page === currentPage && 'font-black'} bg-white  px-4 py-2 text-sm border border-gray-400 rounded-lg focus:z-10 cursor-pointer`} key={currentPage} to={`?page=${currentPage}`}>{ currentPage }</Link>
            ))}
            {page < totalPages && (
                <Link onClick={scrollToTop} className="px-4  bg-white py-2 text-sm border border-gray-400 rounded-lg focus:z-10 cursor-pointer" to={`?page=${page+1}`}> &raquo; </Link>
            )}
        </nav>
    )
}