import React from 'react'
import InnerHeader from '../InnerHeader/InnerHeader'

import CommingImg from '../../img/comming-img.svg';
import ThemeBtn from '../ThemeBtn/ThemeBtn';
import ThemeInput from '../ThemeInput/ThemeInput';

import './CommingSoon.scss';

function CommingSoon() {
    return (
        <div className='CommingSoon_main'>
            <InnerHeader
                Heading="Comming Soon"
            />
            <div className='CommingSoon_section'>
                <div className='container'>
                    <div className='row row_custom'>
                        <div className='col-lg-6 col_comming_otr'>
                            <div className='col_comming_inr'>
                                <img className='comming_img' src={CommingImg} alt='img' />
                                <p className='heading-mm comming_desc'>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                </p>
                                <form className='email_action_otr'>
                                    <ThemeInput
                                        inputClass="White_Input"
                                        inputType="email"
                                        inputName="email"
                                        inputPlaceholder="Please Enter Your Email Address"
                                    />
                                    <ThemeBtn
                                        ButtonClass="primary_btn notify_btn"
                                        ButtonText="Notify Me"
                                    />
                                </form>
                                <p className='heading-mm comming_desc2'>
                                    _Notify Me When App Launch_.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommingSoon