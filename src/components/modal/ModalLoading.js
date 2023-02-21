import React from 'react';
import Loading from '../app/Loading';
import { useSelector } from 'react-redux';

const ModalLoading = () => {

  const modalLoading = useSelector(state => state.modal.modalLoading);

  if (modalLoading.show) {
    return (
      <div className="modal-backdrop modal-loading">
        <div className={`modal fade show`}>
          <Loading />
        </div>
      </div>
    );
  } else {
    return <></>
  }
  
}

export default ModalLoading;