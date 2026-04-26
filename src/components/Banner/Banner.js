import React from 'react'

import './Banner.scss';

import BannerImg from '../../img/banner-img1.png';
import LineImg from '../../img/banner-lines.jpg';
import { Link } from 'react-router-dom';
import ThemeBtn from '../ThemeBtn/ThemeBtn';

function Banner() {
    return (
        <section className='banner_main'>
            <div className='container'>
                <div className='wrapper'>
                    <img className='lines_img' src={LineImg} alt='img' />
                    <div className='content_otr'>
                        <h2 className='heading-h2 banner_heading'>
                            Get Cool Shoes for Men <br />
                            at Cheap <span>Price - 29.99 USD</span>
                        </h2>
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

export default Banner