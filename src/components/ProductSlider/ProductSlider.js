import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

import './ProductSlider.scss';


function ProductSlider(props) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            <Swiper
                loop={false}
                spaceBetween={10}
                navigation={false}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 product_slider2"
            >
                <SwiperSlide>
                    <div className='img_otr'>
                        <img className='product_img' src={props.SliderImg1} alt='img' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='img_otr'>
                        <img className='product_img' src={props.SliderImg2} alt='img' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='img_otr'>
                        <img className='product_img' src={props.SliderImg3} alt='img' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='img_otr'>
                        <img className='product_img' src={props.SliderImg4} alt='img' />
                    </div>
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={false}
                spaceBetween={10}
                slidesPerView={5}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper product_slider"
            >
                <SwiperSlide>
                    <div className='img_otr'>
                        <img className='product_img' src={props.SliderImg1} alt='img' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='img_otr'>
                        <img className='product_img' src={props.SliderImg2} alt='img' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='img_otr'>
                        <img className='product_img' src={props.SliderImg3} alt='img' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='img_otr'>
                        <img className='product_img' src={props.SliderImg4} alt='img' />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default ProductSlider