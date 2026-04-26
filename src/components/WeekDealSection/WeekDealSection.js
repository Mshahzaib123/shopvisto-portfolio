import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import ProductData from '../ProductCard/ProductData';
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import './WeekDealSection.scss';

// import CardImg1 from '../../img/card-img1.png';
// import CardImg2 from '../../img/card-img2.png';
// import CardImg3 from '../../img/card-img3.png';
// import CardImg4 from '../../img/card-img4.png';
// import CardImg5 from '../../img/card-img5.png';
// import CardImg6 from '../../img/card-img6.png';
// import CardImg7 from '../../img/card-img7.png';
// import CardImg8 from '../../img/card-img8.png';

function WeekDealSection() {
    return (
        <section className='weekDeal_section'>
            <div className='container'>
                <div className='wrapper'>
                    <h2 className='heading-h2 wrapper_heading'>
                        Deals of the Week
                    </h2>
                    <span className='line'></span>
                </div>
                {/* <div className='deal_slider'>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={24}
                        navigation={true}
                        speed={1000}
                        modules={[Navigation]}
                        className="mySwiper"
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 24,
                            },
                            575: {
                                slidesPerView: 2,
                                spaceBetween: 24,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 24,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 24,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <ProductCard
                                CardImg={CardImg1}
                                TagText="Best Rated"
                                CardHeading="Women Shirt"
                                RealPrice="$4.99"
                                prePrice="$5.99"
                                ProductReview="20 Reviews"
                                CardProductDesc="
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        "
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard
                                CardImg={CardImg2}
                                TagText="Best Rated"
                                CardHeading="Women Shirt"
                                RealPrice="$4.99"
                                prePrice="$5.99"
                                ProductReview="20 Reviews"
                                CardProductDesc="
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        "
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard
                                CardImg={CardImg3}
                                TagText="Best Rated"
                                CardHeading="Women Shirt"
                                RealPrice="$4.99"
                                prePrice="$5.99"
                                ProductReview="20 Reviews"
                                CardProductDesc="
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        "
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard
                                CardImg={CardImg4}
                                TagText="Best Rated"
                                CardHeading="Women Shirt"
                                RealPrice="$4.99"
                                prePrice="$5.99"
                                ProductReview="20 Reviews"
                                CardProductDesc="
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        "
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard
                                CardImg={CardImg5}
                                TagText="Best Rated"
                                CardHeading="Women Shirt"
                                RealPrice="$4.99"
                                prePrice="$5.99"
                                ProductReview="20 Reviews"
                                CardProductDesc="
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        "
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard
                                CardImg={CardImg6}
                                TagText="Best Rated"
                                CardHeading="Women Shirt"
                                RealPrice="$4.99"
                                prePrice="$5.99"
                                ProductReview="20 Reviews"
                                CardProductDesc="
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        "
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard
                                CardImg={CardImg7}
                                TagText="Best Rated"
                                CardHeading="Women Shirt"
                                RealPrice="$4.99"
                                prePrice="$5.99"
                                ProductReview="20 Reviews"
                                CardProductDesc="
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        "
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard
                                CardImg={CardImg8}
                                TagText="Best Rated"
                                CardHeading="Women Shirt"
                                RealPrice="$4.99"
                                prePrice="$5.99"
                                ProductReview="20 Reviews"
                                CardProductDesc="
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        "
                            />
                        </SwiperSlide>
                    </Swiper>
                </div> */}
                <div className='row row_custom'>
                    {ProductData.map((val) => {
                        return (
                            <ProductCard
                                key={val.id}
                                CardImg={val.CardImg}
                                TagText={val.TagText}
                                CardHeading={val.CardHeading}
                                RealPrice={val.RealPrice}
                                prePrice={val.prePrice}
                                ProductReview={val.ProductReview}
                                CardProductDesc={val.CardProductDesc}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default WeekDealSection