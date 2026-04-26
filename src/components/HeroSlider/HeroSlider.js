import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Autoplay } from "swiper";
import { Link } from 'react-router-dom';

import './HeroSlider.scss';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import ThemeBtn from '../ThemeBtn/ThemeBtn';

import HeroImg1 from '../../img/hero-img1.png';
import HeroImg2 from '../../img/hero-img2.png';
import HeroImg3 from '../../img/hero-img3.png';
import HeroShape1 from '../../img/hero-shape-bg.svg';
import HeroShape2 from '../../img/hero-shape-bg2.svg';
import HeroShape3 from '../../img/hero-shape-bg3.svg';

function HeroSlider() {
    return (
        <div className='hero_slider_main'>
            <Swiper
                navigation={true}
                effect={"fade"}
                speed={3000}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFade, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='Swipper_slide Hero_Slide1'>
                        <div className='container'>
                            <div className='row row_custom'>
                                <div className='col-lg-6 col-md-12 col_content_otr'>
                                    <div className='col_content_inr'>
                                        <h1 className='heading-h1 heading'>
                                            Stunning Men’s <br /> Denim Jacket in <br />
                                            <p className='heading_inr'>$159 <span className='heading_inr2'>$450</span></p>
                                        </h1>
                                        <p className='heading-l desc'>
                                            Prow scuttle parrel provost Sail ho shrouds spirits <br /> boom mizzenmast yardarm.
                                        </p>
                                        <Link className='action_otr'>
                                            <ThemeBtn
                                                ButtonClass="primary_btn start_btn"
                                                ButtonText="Let’s Do Shopping"
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-12 col_img_otr'>
                                    <div className='col_img_inr'>
                                        <img className='hero_img1' src={HeroImg1} alt='img' />
                                        <img className='hero_shape1' src={HeroShape1} alt='img' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='Swipper_slide Hero_Slide2'>
                        <div className='container'>
                            <div className='row row_custom'>
                                <div className='col-lg-6 col_content_otr'>
                                    <div className='col_content_inr'>
                                        <h1 className='heading-h1 heading'>
                                            Nike Air Max Zephyr <br /> in
                                            <span className='heading_inr'> Just 280 USD </span>
                                            Limited Time Offer!
                                        </h1>
                                        <p className='heading-l desc'>
                                            Deadlights jack lad schooner scallywag dance
                                        </p>
                                        <Link className='action_otr'>
                                            <ThemeBtn
                                                ButtonClass="primary_btn start_btn"
                                                ButtonText="Let’s Do Shopping"
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <div className='col-lg-6 col_img_otr'>
                                    <div className='col_img_inr'>
                                        <img className='hero_img1' src={HeroImg2} alt='img' />
                                        <img className='hero_shape1' src={HeroShape2} alt='img' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='Swipper_slide Hero_Slide3'>
                        <div className='container'>
                            <div className='row row_custom'>
                                <div className='col-lg-6 col_content_otr'>
                                    <div className='col_content_inr'>
                                        <h1 className='heading-h1 heading'>
                                            Infinix Note 7 Lite <br /> 6.6 Inches,4GB RAM <br />
                                            <p className='heading_inr'> Price: $399 <span className='heading_inr2'>$450</span></p>
                                        </h1>
                                        <p className='heading-l desc'>
                                            Trysail Sail ho Corsair red ensign hulk smartly boom <br /> jib rum gangway.
                                        </p>
                                        <Link className='action_otr'>
                                            <ThemeBtn
                                                ButtonClass="primary_btn start_btn"
                                                ButtonText="Let’s Do Shopping"
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <div className='col-lg-6 col_img_otr'>
                                    <div className='col_img_inr'>
                                        <div className='imgs_otr'>
                                            <img className='hero_img1' src={HeroImg3} alt='img' />
                                            <img className='hero_img2' src={HeroImg3} alt='img' />
                                        </div>
                                        <img className='hero_shape1' src={HeroShape3} alt='img' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default HeroSlider
