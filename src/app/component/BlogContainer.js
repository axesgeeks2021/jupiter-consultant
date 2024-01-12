"use client"
import React, { useState } from 'react'
import Pagination from './Pagination';
import Link from 'next/link';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

function BlogContainer({ blogs }) {

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(12);

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    const currentRecords = blogs?.data?.slice(indexOfFirstRecord, indexOfLastRecord);

    const nPages = Math.ceil(blogs?.data?.length / recordsPerPage)

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

    const prevPage = () => {
        if (currentPage !== 1) {
            return setCurrentPage(currentPage - 1)
        }
    }

    const nextPage = () => {
        if (currentPage !== nPages) {
            return setCurrentPage(currentPage + 1)
        }
    }


    return (
        <>
            <div className="card__box my-2">
                {
                    currentRecords?.map((ele, idx) => {
                        return (
                            <Link href={{ pathname: ele?.slug }} key={idx} className='blog__card__link my-4'>
                                <div className="blog__card" >
                                    <div className="blog__img">
                                        <Image src={ele?.image_path} width={1000} height={1000}/>
                                    </div>
                                    <div className="blog__text" style={{ padding: "10px 10px" }}>
                                        <h3>{ele?.name}</h3>
                                        {/*<p style={{ color: "#fff" }}>{ele?.short_desp.replaceAll('&lt;p&gt;', '').replaceAll('&lt;/p&gt;', '')}</p>*/}
                                        <button >Read More...</button>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
            <div className='pagination__container__blog' style={{marginBottom: '10px'}}>
                <ul className="page">
                    <li className={`page__btn`} style={{ opacity: currentPage > 1 ? 1 : 0.6 }} onClick={prevPage}><span className="material-icons" style={{ fontSize: '14px' }}>
                        Previous</span>&nbsp; <FontAwesomeIcon icon={faChevronCircleLeft} />
                    </li>
                    {
                        pageNumbers.map((ele, idx) => {
                            return (
                                <li key={idx} onClick={() => setCurrentPage(ele)} style={{ fontSize: '16px !important' }} className={`page__numbers ${currentPage == ele ? 'active' : ''}`}>{ele}</li>
                            )
                        })
                    }
                    <li className="page__btn" onClick={() => nextPage()} style={{ opacity: currentPage < pageNumbers.length ? 1 : 0.6 }}>
                        <FontAwesomeIcon icon={faChevronCircleRight} />&nbsp;
                        <span className="material-icons" style={{ fontSize: '14px' }}>
                            Next</span>
                    </li>
                </ul>
            </div>
            <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} prevPage={prevPage} nextPage={nextPage} />
        </>
    )
}

export default BlogContainer
