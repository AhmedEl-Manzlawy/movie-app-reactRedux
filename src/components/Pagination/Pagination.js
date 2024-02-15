import React, { useContext } from 'react'
import { PageNumberContext } from '../Context/pageNumberContext';

const Pagination = () => {
    const {pageNo, setPageNo}=useContext(PageNumberContext)
    
    const handelPrev = () => {
        if (pageNo > 1) setPageNo(pageNo - 1);
        console.log(pageNo, "prev");
      };
    
      const handelNext = () => {
        if (pageNo < 20) setPageNo(pageNo + 1);
        console.log(pageNo, "next");
      }
  return (
    <div className="d-flex justify-content-center pt-4">
          <button className="btn btn-dark" onClick={handelPrev}>
            Prev
          </button>
          <span className="mx-4 my-auto text-light">{pageNo}</span>
          <button className="btn btn-dark" onClick={handelNext}>
            Next
          </button>
        </div>
  )
}

export default Pagination