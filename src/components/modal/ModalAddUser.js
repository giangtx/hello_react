import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
// import { hideModalAddGateway } from '../../store/modals/modals.action';
import { useOutsideClick } from '../../utils/dom';

const ModalAddGateway = () => {
  // const modalAddGateway = useSelector(state => state.modals.modalAddGateway);
  // const dispatch = useDispatch();

  const { t } = useTranslation();

  const handleClose = () => {
    // dispatch(hideModalAddGateway());
  }

  const ref = useOutsideClick(handleClose);

  if (false) {
    return (
      <div className="modal-backdrop modal-common modal-edit-organization">
        <div className={`modal fade ${true ? 'show' : ''}`}>
          <div className="modal-dialog" role="document" ref={ref}>
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" aria-label="Close" onClick={() => { handleClose() }}>
                  <img src="/images/icon/cancel-white.svg"/>
                </button>
              </div>
              <div className="modal-body">
                <div className='modal-container'>
                  <div className='title'>
                    <span >{t('modal_edit_organization_gateway.title')}</span>
                  </div>
                  <div className='modal-input-container'>
                    <div className='content-header'>
                      <div className='label-input'>
                        <span>{t('modal_edit_organization_gateway.sort')}</span>
                        <span className='label-required'>{t('modal_create_organization.required')}</span>
                      </div>
                    </div>
                    <div className='input-form pb-4'>
                      <div className='label-input'>
                        <span>{t('modal_edit_organization_gateway.mac_address_label')}</span>
                        <span className='label-required'>{t('modal_create_organization.required')}</span>
                      </div>
                      <input className='input-text item-input' placeholder={t('modal_edit_organization_gateway.mac_address_placeholder')}/>
                    </div>
                    <div className='input-form'>
                      <div className='label-input'>
                        <span>{t('modal_edit_organization_gateway.name_label')}</span>
                      </div>
                      <input className='input-text item-input' placeholder={t('modal_edit_organization_gateway.name_placeholder')}/>
                    </div>
                  </div>
                  <div className='w-320'>
                    <button className='btn'>{t('modal_edit_organization_gateway.btn')}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return <></>
  }

}

export default ModalAddGateway;