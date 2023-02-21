import React from "react";
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";

const AnonTable = ({anons}) => {
    return(
        <div className='table-responsive table-common'>
            <div className='table-container'>
                <div className='table-header'>
                    <div className='table-header-item col-large'>
                        ID
                    </div>
                    <div className='table-header-item item-center col-large'>
                        ROLE NAME
                    </div>
                    <div className='table-header-item col-large'>
                        DESCRIPTION
                    </div>
                </div>
                <div className='table-content'>
                    {
                        anons.map((anon, index) => (
                            <div className='table-content-item' key={index}>
                                <div className='table-content-item-col col-large col-name'>
                                    <Link href={`#`}>
                                        {anon.id}
                                    </Link>
                                </div>
                                <div className='table-content-item-col col-large'>
                                    <Link href={`#`}>
                                        {anon.roleName}
                                    </Link>
                                </div>
                                <div className='table-content-item-col col-large'>
                                    <Link href={`#`}>
                                        {anon.description}
                                    </Link>
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

export default AnonTable;