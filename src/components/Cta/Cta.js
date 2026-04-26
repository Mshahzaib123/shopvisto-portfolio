import React from 'react'
import ThemeBtn from '../ThemeBtn/ThemeBtn'
import ThemeInput from '../ThemeInput/ThemeInput'

import './Cta.scss';

import CtaImg from '../../img/cta-img.svg';

function Cta() {
    return (
        <section className='cta_main'>
            <div className='container'>
                <div className='row row_custom'>
                    <div className='col-lg-7 col_content_otr'>
                        <div className='col_content_inr'>
                            <h2 className='heading-h2 cta_heading'>
                                Subscribe to the Newsletter
                                and Get Nice Offers
                            </h2>
                            <p className='heading-sm cta_desc'>
                                Bring a spring upon her cable holystone blow the man down
                            </p>
                            <form className='form_main'>
                                <ThemeInput
                                    inputClass="White_Input email_input"
                                    inputType="email"
                                    inputName="email"
                                    inputPlaceholder="Your Email Address"
                                />
                                <ThemeBtn
                                    ButtonClass="primary_btn"
                                    ButtonText="Subscribe"
                                />
                            </form>
                        </div>
                    </div>
                    <div className='col-lg-5 col_img_otr'>
                        <div className='col_img_inr'>
                            <img className='cta_img' src={CtaImg} alt='img' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cta