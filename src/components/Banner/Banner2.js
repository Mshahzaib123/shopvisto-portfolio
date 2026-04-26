import React from 'react'
import { Link } from 'react-router-dom';
import ThemeBtn from '../ThemeBtn/ThemeBtn';
import { CheckCircle } from 'phosphor-react';

import './Banner.scss';

import BannerImg from '../../img/banner-bg.png';


function Banner2() {
    return (
        <section className='banner_main banner_main2'>
            <div className='container'>
                <div className='wrapper'>
                    <img className='banner_bg' src={BannerImg} alt='img' />
                    <div className='content_otr'>
                        <h2 className='heading-h2 banner_heading'>
                            Sale! 30% Off... <br />
                            <span>T-Shirt & Blue Jeans</span>
                        </h2>
                        <div className='check_text_otr'>
                            <CheckCircle size={32} />
                            <p className='heading-mm check_text'>
                                Color Never Fades
                            </p>
                        </div>
                        <Link className='action_otr'>
                            <ThemeBtn
                                ButtonClass="border_btn banner_btn"
                                ButtonText="Let’s Do Shopping"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner2