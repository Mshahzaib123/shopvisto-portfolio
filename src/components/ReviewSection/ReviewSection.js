import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import ReviewCard from './ReviewCard';

import './ReviewSection.scss';
import "swiper/css";
import "swiper/css/pagination";

import ProfileImg1 from '../../img/profile-img1.png';
import ProfileImg2 from '../../img/profile-img2.png';
import ProfileImg3 from '../../img/profile-img3.png';

function ReviewSection() {
    const pagination = {
        clickable: true,
    };
    return (
        <section className='ReviewSection_main'>
            <div className='container'>
                <div className='wrapper'>
                    <h2 className='heading-h2 wrapper_heading'>
                        Customers Love Visto Shop
                    </h2>
                    <p className='heading-mm wrapper_desc'>
                        RIf you are going to use a passage of Lorem Ipsum, you need to be sure there isn't <br /> anything embarrassing hidden in the middle of text.
                    </p>
                </div>
                <div className='row row_custom'>
                    <div className='col_slider_otr'>
                        <div className='col_slider_inr'>
                            <Swiper
                                slidesPerView={3}
                                speed={1000}
                                pagination={pagination}
                                spaceBetween={24}
                                modules={[Pagination]}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                        spaceBetween: 24,
                                    },
                                    575: {
                                        slidesPerView: 1,
                                        spaceBetween: 24,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 24,
                                    },
                                    1200: {
                                        slidesPerView: 3,
                                        spaceBetween: 24,
                                    },
                                }}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <ReviewCard
                                        CardHeading="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
                                        ProfileImg={ProfileImg1}
                                        UserName="Usman Ali"
                                        Designation="UI / UX"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ReviewCard
                                        CardHeading="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
                                        ProfileImg={ProfileImg2}
                                        UserName="Shahzaib"
                                        Designation="UI / UX"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ReviewCard
                                        CardHeading="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
                                        ProfileImg={ProfileImg3}
                                        UserName="Rehman Ahmed"
                                        Designation="UI / UX"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ReviewCard
                                        CardHeading="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
                                        ProfileImg={ProfileImg1}
                                        UserName="Usman Ali"
                                        Designation="UI / UX"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ReviewCard
                                        CardHeading="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
                                        ProfileImg={ProfileImg2}
                                        UserName="Shahzaib"
                                        Designation="UI / UX"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ReviewCard
                                        CardHeading="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
                                        ProfileImg={ProfileImg3}
                                        UserName="Rehman Ahmed"
                                        Designation="UI / UX"
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReviewSection