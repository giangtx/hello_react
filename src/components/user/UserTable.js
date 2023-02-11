import React from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

// nhận giá trị users từ component cha
const UserTable = ({ users }) => {
  return (
    <div className='table-responsive table-common'>
        <div className='table-container'>
          <div className='table-header'>
            <div className='table-header-item col-large'>
              Tên
            </div>
            <div className='table-header-item item-center col-large'>
              mail
            </div>
            <div className='table-header-item col-large'>
              gioi tinh
            </div>
            <div className='table-header-item col-large'>
              dien thoai
            </div>
            <div className='table-header-item col-large'>
              sinh nhat
            </div>
          </div>
          <div className='table-content'>
            {
              users.map((user, index) => (
                <div className='table-content-item' key={index}>
                  <div className='table-content-item-col col-large col-name'>
                    <Link href={`#`}>
                      {user.username}
                    </Link>
                  </div>
                  <div className='table-content-item-col item-center col-large'>
                    {user.email}
                  </div>
                  <div className='table-content-item-col col-large'>
                    {user.gender}
                  </div>
                  <div className='table-content-item-col col-large'>
                    {user.phone}
                  </div>
                  <div className='table-content-item-col col-large'>
                    {user.birthday}
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
  )
}

export default UserTable;