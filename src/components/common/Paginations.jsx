import React from 'react';
import s from '../Users/Users.module.css';

let Psginators = ({totalUsersCount, pageSize, currentPage, onPageChanged, pageSee}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    let leftCurrentPage = currentPage - pageSee;
    let rightCurrentPage = currentPage + pageSee;
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let filterPages = pages.filter(p => p < rightCurrentPage+1 && p > leftCurrentPage-1)

    let DivPage = ({page}) => <span onClick={() => {onPageChanged(page)}} className={currentPage === page && s.selectedPage}>{page}</span>

    return (
        <div className={s.pages}>
            {currentPage > pageSee+1 && <><DivPage page={1}/><div>...</div></>}
            {filterPages.map(p => <DivPage page={p}/>)}
            {currentPage < pagesCount-pageSee && <><div>...</div><DivPage page={pagesCount}/></>}
        </div>
    );
}

export default Psginators;