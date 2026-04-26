import React from 'react'
import ProductDetailsModal from '../ProductCard/ProductDetailsModal'
import InnerHeader from '../InnerHeader/InnerHeader'
import ReviewCard from '../ReviewSection/ReviewCard';
import { Truck, Clock, Money } from 'phosphor-react';
import ThemeInput from '../ThemeInput/ThemeInput';

import './ProductDetail.scss';

import ProductImg1 from '../../img/card-img1.png';
import ProductImg2 from '../../img/card-img1.png';
import ProductImg3 from '../../img/card-img1.png';
import ProductImg4 from '../../img/card-img1.png';
import ProfileImg1 from '../../img/profile-img1.png';
import ProfileImg2 from '../../img/profile-img2.png';
import ProfileImg3 from '../../img/profile-img3.png';
import ThemeBtn from '../ThemeBtn/ThemeBtn';

function ProductDetail() {
    return (
        <div className='ProductDetail_main'>
            <InnerHeader
                Heading="Shop Details"
            />
            <div className='ProductDetail_section'>
                <div className='container'>
                    <ProductDetailsModal
                        DetailHeading="Women Shirt"
                        ReviewsText="20 Reviews"
                        DetailSliderImg1={ProductImg1}
                        DetailSliderImg2={ProductImg2}
                        DetailSliderImg3={ProductImg3}
                        DetailSliderImg4={ProductImg4}
                        DetailsDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        ProductDetailsPrice="$4.99"
                        ProductDetailsPrevPrice="$5.99"
                    />
                </div>
            </div>
            <div className='more_detail'>
                <div className='container'>
                    <div className='row more_detail_row'>
                        <div className='col-lg-5 content_otr'>
                            <div className='content_inr'>
                                <h2 className='heading-h2 content_heading'>
                                    More Details
                                </h2>
                                <p className='heading-m desc desc1'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                </p>
                                <p className='heading-m desc desc2'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                                <div className='satisfaction_wrapper'>
                                    <div className='Satisfaction_otr'>
                                        <Truck size={44} />
                                        <p className='heading-mb Satisfaction_heading'>
                                            Free Home Delivery
                                        </p>
                                    </div>
                                    <div className='Satisfaction_otr'>
                                        <Money size={44} />
                                        <p className='heading-mb Satisfaction_heading'>
                                            Money Back Guarantee
                                        </p>
                                    </div>
                                    <div className='Satisfaction_otr'>
                                        <Clock size={44} />
                                        <p className='heading-mb Satisfaction_heading'>
                                            Availability 24•7
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-7 col_cards_otr'>
                            <div className='col_cards_inr'>
                                <div className='reviews_main'>
                                    <h3 className='heading-h3 review_heading'>
                                        Reviews
                                    </h3>
                                    <ReviewCard
                                        CardHeading="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
                                        ProfileImg={ProfileImg1}
                                        UserName="Usman Ali"
                                        Designation="UI / UX"
                                    />
                                    <ReviewCard
                                        CardHeading="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
                                        ProfileImg={ProfileImg2}
                                        UserName="Rehman Ahmed"
                                        Designation="UI / UX"
                                    />
                                    <ReviewCard
                                        CardHeading="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
                                        ProfileImg={ProfileImg3}
                                        UserName="Shahzaib"
                                        Designation="UI / UX"
                                    />
                                </div>
                                <div className='leave_review'>
                                    <h3 className='heading-h3 review_heading'>
                                        Leave a Review
                                    </h3>
                                    <form className='form_main'>
                                        <div className='input_otr'>
                                            <textarea className='White_Input text_area' name='text' placeholder='Your Message' />
                                        </div>
                                        <div className='inputs_main'>
                                            <ThemeInput
                                                inputClass="White_Input input_form"
                                                inputType="name"
                                                inputName="name"
                                                inputPlaceholder="You Name"
                                            />
                                            <ThemeInput
                                                inputClass="White_Input input_form"
                                                inputType="email"
                                                inputName="email"
                                                inputPlaceholder="Your Email Address"
                                            />
                                        </div>
                                        <ThemeBtn
                                            ButtonClass="primary_btn"
                                            ButtonText="Post Review"
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail