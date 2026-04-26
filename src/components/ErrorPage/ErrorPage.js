import React from 'react'
import InnerHeader from '../InnerHeader/InnerHeader'
import { Link } from 'react-router-dom';
import ThemeBtn from '../ThemeBtn/ThemeBtn';

import './ErrorPage.scss';

import ErrorImg from '../../img/404-img.svg';
import ErrorImg2 from '../../img/404-img2.svg';

function ErrorPage() {
    return (
        <div className='ErrorPage_main'>
            <InnerHeader
                Heading="404"
            />
            <div className='Error_section'>
                <img className='text_img text_img1' src={ErrorImg2} alt='img' />
                <img className='text_img text_img2' src={ErrorImg2} alt='img' />
                <div className='container'>
                    <div className='row row_custom'>
                        <div className='col-lg-6 col_content_otr'>
                            <div className='col_content_inr'>
                                <img className='error_img' src={ErrorImg} alt='img' />
                                <h2 className='heading-h2 error_heading'>
                                    Ooops! Page doesn’t exist.
                                </h2>
                                <div className='action_main'>
                                    <Link className='action_otr'>
                                        <ThemeBtn
                                            ButtonClass="primary_btn"
                                            ButtonText="Back To Home"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage