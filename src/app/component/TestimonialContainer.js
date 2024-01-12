"use client"
import React, { useEffect, useState } from 'react'
import Pagination from './Pagination';
import ReactPaginate from 'react-paginate';

function TestimonialContainer({ testimonial }) {
  
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const currentRecords = testimonial?.data?.slice(indexOfFirstRecord, indexOfLastRecord);

  const nPages = Math.ceil(testimonial?.data?.length / recordsPerPage)
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) {
      return setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage !== 1) {
      return setCurrentPage(currentPage - 1)
    }
  }

  
  return (
    <div className="testimonials__container" style={{ width: "100%", display: "flex", justifyContent: "center", padding: "10px 20px", flexDirection: "column" }}>
      {
        currentRecords?.map((ele, idx) => {
          return (
            <div key={idx} className="testimonial__box" style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px 10px", background: "#eee", boxShadow: "1px 1px 6px 0px rgba(0,0,0,0.1)", margin: "10px 0" }}>

              <div className="col-sm-2" style={{ display: "flex", justifyContent: "center", alignItems: 'center' }}>
                <img src={ele?.image_path} className="img-fluid" loading="lazy" style={{ borderRadius: "50%", width: '100px', height: '100px' }} />
              </div>
              <div className="col-sm-10">
                <h4 style={{ color: "#d13112" }}>{ele?.name}</h4>
                <span style={{ fontSize: "14px", fontWeight: '600', color: '#888' }}>{ele?.school_name}</span>
                <p style={{ marginTop: "5px" }}>{ele?.review}</p>
              </div>
            </div>
          )
        })
      }
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <ReactPaginate
            breakLabel="..."
            pageCount={nPages}
            pageClassName="page__numbers__npm"
            pageLinkClassName="page__numbers__npm"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination__container__npm"
            activeClassName="page__numbers__active"
            onPageChange={nextPage}
          />
          <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} nPages={nPages} nextPage={nextPage} prevPage={prevPage}/>

      </div>
    </div>
  )
}

export default TestimonialContainer
