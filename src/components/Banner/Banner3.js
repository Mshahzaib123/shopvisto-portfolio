import React from 'react'
import { Link } from 'react-router-dom';
import ThemeBtn from '../ThemeBtn/ThemeBtn';
import { CheckCircle } from 'phosphor-react';

import './Banner.scss';

import BannerImg from '../../img/banner-img2.png';
import ShapeImg from '../../img/banner-shape.svg';

function Banner3() {
    return (
        <section className='banner_main banner_main3'>
            <div className='container'>
                <div className='wrapper'>
                    <img className='shape_img' src={ShapeImg} alt='shape' />
                    <div className='content_otr'>
                        <h2 className='heading-h2 banner_heading'>
                            Get These Black Shoes
                            <br /> in <span>Just $399</span>
                        </h2>
                        <div className='checks_otr'>
                            <div className='check_text_otr'>
                                <CheckCircle size={32} />
                                <p className='heading-mm check_text'>
                                    High Quality Body
                                </p>
                            </div>
                            <div className='check_text_otr'>
                                <CheckCircle size={32} />
                                <p className='heading-mm check_text'>
                                    Only Black Color
                                </p>
                            </div>
                        </div>
                        <Link className='action_otr'>
                            <ThemeBtn
                                ButtonClass="primary_btn banner_btn"
                                ButtonText="Let’s Do Shopping"
                            />
                        </Link>
                    </div>
                    <div className='img_otr'>
                        <img className='banner_img' src={BannerImg} alt='img' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner3