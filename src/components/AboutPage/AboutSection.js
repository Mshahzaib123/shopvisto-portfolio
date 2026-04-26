import React from 'react'

import './AboutPage.scss';

function AboutSection(props) {
    return (
        <section className='aboutSection_main'>
            <div className='container'>
                <div className='row row_custom'>
                    <div className='col-lg-6 col_content_otr'>
                        <div className='col_content_inr'>
                            <h2 className='heading-h2 about_heading'>
                                {props.AboutHeading}
                            </h2>
                            <p className='heading-m about_desc about_desc1'>
                                {props.AboutDesc1}
                            </p>
                            <p className='heading-m about_desc about_desc2'>
                                {props.AboutDesc2}
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-6 col_img_otr'>
                        <div className='col_img_inr'>
                            <img className='about_img' src={props.AboutImg} alt='img' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection