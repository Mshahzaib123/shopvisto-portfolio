import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Autoplay } from "swiper";
import { Link } from 'react-router-dom';
import ThemeBtn from '../ThemeBtn/ThemeBtn';

import './HeroSlider.scss';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import HeroImg from '../../img/hero-img4.png';
import HeroImg2 from '../../img/hero-img5.png';
import HeroImg3 from '../../img/hero-img6.png';
import TextImg from '../../img/shop_text2.svg';

function HeroSlider2() {
    return (
        <section className='hero_slider_main2'>
            <Swiper
                navigation={true}
                effect={"fade"}
                speed={2000}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='swipper_slide swipper_slide1'>
                        <img className='text_img' src={TextImg} alt='img' />
                        <div className='container'>
                            <div className='row row_custom'>
                                <div className='col-lg-6 col_content_otr'>
                                    <div className='col_content_inr'>
                                        <div className='heading_otr'>
                                            <h1 className='heading-h1 content_heading'>
                                                Modern Style of
                                                Men’s Sunglasses
                                            </h1>
                                            <p className='heading-h1 num_text'>
                                                01
                                            </p>
                                        </div>
                                        <p className='heading-h1 price_text'>
                                            Just $99
                                        </p>
                                        <p className='heading-l desc'>
                                            Special Offer  -  Only for Limited Time
                                        </p>
                                        <Link className='action_otr'>
                                            <ThemeBtn
                                                ButtonClass="primary_btn hero_btn"
                                                ButtonText="Let’s Do Shopping"
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <div className='col-lg-6 col_img_otr'>
                                    <div className='col_img_inr'>
                                        <img className='hero_img' src={HeroImg} alt='img' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='swipper_slide swipper_slide2'>
                        <img className='text_img' src={TextImg} alt='img' />
                        <div className='container'>
                            <div className='row row_custom'>
                                <div className='col-lg-6 col_content_otr'>
                                    <div className='col_content_inr'>
                                        <div className='heading_otr'>
                                            <h1 className='heading-h1 content_heading'>
                                                Stunning Men’s Denim Jacket
                                            </h1>
                                            <p className='heading-h1 num_text'>
                                                02
                                            </p>
                                        </div>
                                        <p className='heading-h1 price_text'>
                                            Just $99
                                        </p>
                                        <p className='heading-l desc'>
                                            Special Offer  -  Only for Limited Time
                                        </p>
                                        <Link className='action_otr'>
                                            <ThemeBtn
                                                ButtonClass="primary_btn hero_btn"
                                                ButtonText="Let’s Do Shopping"
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <div className='col-lg-6 col_img_otr'>
                                    <div className='col_img_inr'>
                                        <img className='hero_img' src={HeroImg2} alt='img' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='swipper_slide swipper_slide3'>
                        <img className='text_img' src={TextImg} alt='img' />
                        <div className='container'>
                            <div className='row row_custom'>
                                <div className='col-lg-6 col_content_otr'>
                                    <div className='col_content_inr'>
                                        <div className='heading_otr'>
                                            <h1 className='heading-h1 content_heading'>
                                                Infinix Note 7 Lite
                                                6.6 Inches, 4GB RAM
                                            </h1>
                                            <p className='heading-h1 num_text'>
                                                03
                                            </p>
                                        </div>
                                        <p className='heading-h1 price_text'>
                                            Just $99
                                        </p>
                                        <p className='heading-l desc'>
                                            Special Offer  -  Only for Limited Time
                                        </p>
                                        <Link className='action_otr'>
                                            <ThemeBtn
                                                ButtonClass="primary_btn hero_btn"
                                                ButtonText="Let’s Do Shopping"
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <div className='col-lg-6 col_img_otr'>
                                    <div className='col_img_inr'>
                                        <img className='hero_img' src={HeroImg3} alt='img' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default HeroSlider2