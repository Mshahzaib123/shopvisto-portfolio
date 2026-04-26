import React from 'react';
import './ModalComponent.scss';
import { X } from 'phosphor-react';

function ModalComponent(props) {
    return (
        <div className={props.ModalAddClass ? 'modal_main modal_main_open' : 'modal_main'}>
            <div className='modal_background'></div>
            <div className='modal_wrapper'>
                <div className='modal_content'>
                    <div className='close_icon_otr' onClick={props.ModalClose}>
                        <X size={20} />
                    </div>
                    {props.modalContent}
                </div>
            </div>
        </div>
    )
}

export default ModalComponent