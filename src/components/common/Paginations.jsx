import React from 'react';
import style from './Paginations.module.css';

let Paginators = ({totalUsersCount, pageSize, currentPage, onPageChanged, pageSee}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    let leftCurrentPage = currentPage - pageSee;
    let rightCurrentPage = currentPage + pageSee;
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let filterPages = pages.filter(p => p < rightCurrentPage+1 && p > leftCurrentPage-1)

    return (
        <div className={style.paginations}>
            {currentPage > pageSee+1 && <><span onClick={() => {onPageChanged(1)}}>{1}</span><div>...</div></>}
            {filterPages.map(p =>
                <span key={p} onClick={() => {onPageChanged(p)}} className={currentPage === p ? style.selectedPage : ''}>{p}</span>
            )}
            {currentPage < pagesCount-pageSee && <><div>...</div><span onClick={() => {onPageChanged(pagesCount)}}>{pagesCount}</span></>}
        </div>
    );
}

export default Paginators;