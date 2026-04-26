import React from 'react'
import InnerHeader from '../InnerHeader/InnerHeader'
import ThemeBtn from '../ThemeBtn/ThemeBtn';
import ThemeInput from '../ThemeInput/ThemeInput';
import CheckComponent from '../CheckComponent/CheckComponent';
import { Link } from 'react-router-dom';

import './CheckoutPage.scss';

import PaymentImg1 from '../../img/payment_icon1.svg';
import PaymentImg2 from '../../img/payment_icon2.svg';
import PaymentImg3 from '../../img/payment_icon3.svg';
import PaymentImg4 from '../../img/payment_icon4.svg';

function CheckoutPage() {
    return (
        <div className='CheckoutPage_main'>
            <InnerHeader
                Heading="Checkout"
            />
            <div className='checkout_section'>
                <div className='container'>
                    <div className='row row_custom'>
                        <div className='col-lg-8 col_input_otr'>
                            <form className='col_input_inr'>
                                <Link className='heading-mm Login_text'>
                                    Log into your Account
                                </Link>
                                <h3 className='heading-h3 form_heading'>
                                    Billing Details
                                </h3>
                                <p className='heading-mm form_desc'>
                                    Please fill the details and then place your order
                                </p>
                                <div className='input_main'>
                                    <ThemeInput
                                        inputClass="White_Input form_input"
                                        inputType="text"
                                        inputName="text"
                                        inputPlaceholder="First Name"
                                    />
                                    <ThemeInput
                                        inputClass="White_Input form_input"
                                        inputType="text"
                                        inputName="text"
                                        inputPlaceholder="Last Name"
                                    />
                                </div>
                                <ThemeInput
                                    inputClass="White_Input form_input"
                                    inputType="text"
                                    inputName="text"
                                    inputPlaceholder="Countary / Region"
                                />
                                <ThemeInput
                                    inputClass="White_Input form_input"
                                    inputType="text"
                                    inputName="text"
                                    inputPlaceholder="Shipping Address"
                                />
                                <div className='input_main'>
                                    <ThemeInput
                                        inputClass="White_Input form_input"
                                        inputType="text"
                                        inputName="text"
                                        inputPlaceholder="Town / City"
                                    />
                                    <ThemeInput
                                        inputClass="White_Input form_input"
                                        inputType="text"
                                        inputName="text"
                                        inputPlaceholder="Postal Code"
                                    />
                                </div>
                                <div className='input_main'>
                                    <ThemeInput
                                        inputClass="White_Input form_input"
                                        inputType="text"
                                        inputName="text"
                                        inputPlaceholder="Phone"
                                    />
                                    <ThemeInput
                                        inputClass="White_Input form_input"
                                        inputType="text"
                                        inputName="text"
                                        inputPlaceholder="Email Address"
                                    />
                                </div>
                                <div className='textarea_otr'>
                                    <textarea className='White_Input text_area' name='text' placeholder='Order Notes' />
                                </div>
                                <CheckComponent
                                    CheckText="Create an account"
                                />
                                <p className='heading-sm coupon_text'>
                                    Have a coupon code? <Link className='linkk'>Apply Coupon</Link>
                                </p>
                            </form>
                        </div>
                        <div className='col-lg-4 col_order_otr'>
                            <div className='col_order_inr'>
                                <h3 className='heading-h3 order_heading'>
                                    Your Order
                                </h3>
                                <div className='subtotal_otr'>
                                    <p className='heading-sm subtotal_text'>
                                        White Basic T-Shirt
                                    </p>
                                    <p className='heading-sb subtotal_price'>
                                        $80
                                    </p>
                                </div>
                                <div className='subtotal_otr'>
                                    <p className='heading-sm subtotal_text'>
                                        Subtotal:
                                    </p>
                                    <p className='heading-sb subtotal_price'>
                                        $20
                                    </p>
                                </div>
                                <div className='subtotal_otr'>
                                    <p className='heading-sm subtotal_text'>
                                        Shipping Flat Rate:
                                    </p>
                                    <p className='heading-sb subtotal_price'>
                                        $25
                                    </p>
                                </div>
                                <div className='subtotal_otr'>
                                    <p className='heading-sm subtotal_text'>
                                        Total:
                                    </p>
                                    <p className='heading-sb subtotal_price'>
                                        $245
                                    </p>
                                </div>
                                <CheckComponent
                                    CheckText="Select a Payment Method"
                                />
                                <ul className='payment_ul'>
                                    <li className='payment_li'>
                                        <Link className='payment_linkk'>
                                            <img className='payment_img' src={PaymentImg1} alt='img' />
                                        </Link>
                                    </li>
                                    <li className='payment_li'>
                                        <Link className='payment_linkk'>
                                            <img className='payment_img' src={PaymentImg2} alt='img' />
                                        </Link>
                                    </li>
                                    <li className='payment_li'>
                                        <Link className='payment_linkk'>
                                            <img className='payment_img' src={PaymentImg3} alt='img' />
                                        </Link>
                                    </li>
                                    <li className='payment_li'>
                                        <Link className='payment_linkk'>
                                            <img className='payment_img' src={PaymentImg4} alt='img' />
                                        </Link>
                                    </li>
                                </ul>
                                <CheckComponent
                                    CheckText="Cash on Delivery"
                                />
                                <Link className='action_otr'>
                                    <ThemeBtn
                                        ButtonClass="primary_btn"
                                        ButtonText="Proceed to Bitcoin"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutPage