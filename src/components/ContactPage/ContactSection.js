import React from 'react'
import ThemeBtn from '../ThemeBtn/ThemeBtn'
import ThemeInput from '../ThemeInput/ThemeInput'

import './ContactPage.scss';

import ContactImg from '../../img/cta-img.svg';

function ContactSection() {
    return (
        <section className='ContactSection_main'>
            <div className='container'>
                <div className='row row_custom'>
                    <div className='col-lg-6 col_content_otr'>
                        <form className='col_content_inr'>
                            <h2 className='heading-h2 contact_heading'>
                                Send Us a Message
                            </h2>
                            <ThemeInput
                                inputClass="White_Input form_input"
                                inputType="name"
                                inputName="name"
                                inputPlaceholder="Full Name"
                            />
                            <ThemeInput
                                inputClass="White_Input form_input"
                                inputType="email"
                                inputName="email"
                                inputPlaceholder="Email Address"
                            />
                            <ThemeInput
                                inputClass="White_Input form_input"
                                inputType="text"
                                inputName="text"
                                inputPlaceholder="Subject"
                            />
                            <textarea className='White_Input form_textarea' name='text' placeholder='Your Message' />
                            <ThemeBtn
                                ButtonClass="primary_btn form_btn"
                                ButtonText="Send Message"
                            />
                        </form>
                    </div>
                    <div className='col-lg-6 col_img_otr'>
                        <div className='col_img_inr'>
                            <img className='contact_img' src={ContactImg} alt='img' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection