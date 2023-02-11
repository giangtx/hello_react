import React from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

const users = [
  {

  },
  {

  },
  {

  }
]

const Users = () => {
  return (
    <div className="common-page user-page">
      <div className="common-title">
        Danh sach nguoi dung
      </div>
      <div className="user-body">
        <div className="common-filter">
           <div className='input-form'>
            <input className='input-select select-mode' placeholder="search" />
          </div>
          <div className="action-filter">
            <button className='btn btn-add flex'>
              new
            </button>
          </div>
        </div>
        <div className='table-responsive table-common'>
      <div className='table-container'>
        <div className='table-header'>
          <div className='table-header-item col-large'>
            ten
          </div>
          <div className='table-header-item item-center col-large'>
            ten
          </div>
          <div className='table-header-item col-large'>
            ten
          </div>
          <div className='table-header-item col-large'>
          ten
          </div>
          <div className='table-header-item col-large'>
          ten
          </div>
          <div className='table-header-item col-large'>
          ten
          </div>
          <div className='table-header-item col-large'>
          ten
          </div>
          <div className='table-header-item col-large'>
          ten
          </div>
          <div className='table-header-item col-large'>
          ten
          </div>
          <div className='table-header-item col-large'>
          ten
          </div>
          <div className='table-header-item col-large'>
          ten
          </div>
        </div>
        <div className='table-content'>
          {
            users.map((user, index) => (
              <div className='table-content-item' key={index}>
                <div className='table-content-item-col col-large col-name'>
                  <Link href={`#`}>
                    name
                  </Link>
                </div>
                <div className='table-content-item-col item-center col-large'>
                </div>
                <div className='table-content-item-col col-large'>
                  BPM
                </div>
                <div className='table-content-item-col col-large'>
                  fsd
                </div>
                <div className='table-content-item-col col-large'>
                  dfasd
                </div>
                <div className='table-content-item-col col-large'>
                  dfds
                </div>
                <div className='table-content-item-col col-large'>
                  dsad
                </div>
                <div className='table-content-item-col col-large'>
                  asd
                </div>
                <div className='table-content-item-col col-large'>
                  dsad
                </div>
                <div className='table-content-item-col col-large'>
                 adsd
                </div>
                <div className='table-content-item-col col-large'>
                  asd
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className='table-paginate pl-8'>
        <div className='paginate-container'>
          <ReactPaginate
            containerClassName={'pagination'}
            activeClassName={'item active '}
            breakClassName={'item break-me '}
            breakLabel='...'
            nextLabel='>'
            pageClassName={'item pagination-page '}
            pageRangeDisplayed={3}
            previousClassName={'item previous'}
            nextClassName={'item next '}
            pageCount={100}
            previousLabel='<'
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Users;