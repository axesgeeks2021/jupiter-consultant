import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function Pagination({ nPages, prevPage, nextPage, currentPage }) {
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

    return (
        <div className="pagination__container">
            <ul className="page">
                <li className={`page__btn`} style={{ opacity: currentPage > 1 ? 1 : 0.6 }} onClick={prevPage}><span className="material-icons" style={{fontSize: '14px'}}>
                    Previous</span>&nbsp; <FontAwesomeIcon icon={faChevronCircleLeft} />
                </li>
{/*                {
                    pageNumbers.map((ele, idx) => {
                        return (
                            <li key={idx} onClick={() => setCurrentPage(ele)} className={`page__numbers ${currentPage == ele ? 'active' : ''}`}>{ele}</li>
                        )
                    })
                }*/}
                <li className="page__btn" onClick={() => nextPage()} style={{ opacity: currentPage < pageNumbers.length ? 1 : 0.6 }}>
                <FontAwesomeIcon icon={faChevronCircleRight} />&nbsp;
                <span className="material-icons" style={{fontSize: '14px'}}>
                    Next</span>
                </li>
            </ul>
        </div >
    )
}

export default Pagination
