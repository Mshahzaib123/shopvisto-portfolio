import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookLogo, TwitterLogo, InstagramLogo, LinkedinLogo, PinterestLogo, WhatsappLogo, EnvelopeSimple, MapPinLine, DeviceMobile } from 'phosphor-react';
import './Footer3.scss';

import BrandLogo from '../../img/brand-logo2.png';
import PaymentImg1 from '../../img/payment_icon1.svg';
import PaymentImg2 from '../../img/payment_icon2.svg';
import PaymentImg3 from '../../img/payment_icon3.svg';
import PaymentImg4 from '../../img/payment_icon4.svg';
import PaymentImg5 from '../../img/payment_icon5.svg';
import PaymentImg6 from '../../img/payment_icon6.svg';
import CircleImg from '../../img/circle-shape.png';
function Footer3() {
    return (
        <footer className='footer_main footer_main3'>
            <img className='circle_img' src={CircleImg} alt='img' />
            <div className='container'>
                <div className='wrapper'>
                    <Link className='contact_otr'>
                        <EnvelopeSimple size={20} />
                        <p className='heading-sm contact_text'>
                            hello@ebounce.com
                        </p>
                    </Link>
                    <Link className='contact_otr'>
                        <MapPinLine size={20} />
                        <p className='heading-sm contact_text'>
                            1851  Froe Street, Anawalt, West Virginia
                        </p>
                    </Link>
                    <Link className='contact_otr'>
                        <DeviceMobile size={20} />
                        <p className='heading-sm contact_text'>
                            202-555-0111
                        </p>
                    </Link>
                </div>
                <div className='row row_custom'>
                    <div className='col-lg-4 col_logo_otr'>
                        <div className='col_logo_inr'>
                            <Link className='logo_otr' to="/">
                                <img className='logo_img' src={BrandLogo} alt='logo' />
                            </Link>
                            <p className='heading-s desc'>
                                Tea cup ballast blimey lee snow crow's nest rutters fluke jib scourge.
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-2 col_linkk_otr'>
                        <div className='col_linkk_inr'>
                            <p className='heading-mb linkk_heading'>
                                Account
                            </p>
                            <ul className='linkk_ul'>
                                <li className='linkk_li'>
                                    <Link className='heading-sm linkk_text' to="/login">
                                        Login
                                    </Link>
                                </li>
                                <li className='linkk_li'>
                                    <Link className='heading-sm linkk_text' to="/signup">
                                        Sign Up
                                    </Link>
                                </li>
                                <li className='linkk_li'>
                                    <Link className='heading-sm linkk_text' to="/">
                                        My Account
                                    </Link>
                                </li>
                                <li className='linkk_li'>
                                    <Link className='heading-sm linkk_text' to="/cart">
                                        Cart
                                    </Link>
                                </li>
                                <li className='linkk_li'>
                                    <Link className='heading-sm linkk_text' to="/wishlist">
                                        Wishlist
                                    </Link>
                                </li>
                                <li className='linkk_li'>
                                    <Link className='heading-sm linkk_text' to="/checkout">
                                        Checkout
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-2 col_linkk_otr'>
                        <div className='col_linkk_inr'>
                            <p className='heading-mb linkk_heading'>
                                Company
                            </p>
                            <ul className='linkk_ul'>
                                <li className='linkk_li'>
                                    <Link className='heading-sm linkk_text' to="/about">
                                        About
                                    </Link>
                                </li>
                                <li className='linkk_li'>
                                    <Link className='heading-sm linkk_text' to="/contact">
                                        Contact
                                    </Link>
                                </li>
                                <li className='linkk_li'>
                                    <Link className='heading-sm linkk_text' to="/">
                                        Terms & Conditions
                                    </Link>
                                </li>
                                <li className='linkk_li'>
                                    <Link className='heading-sm linkk_text' to="/">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li className='linkk_li'>
                                    <Link className='heading-sm linkk_text' to="/">
                                        Return Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-3 col_logo_otr'>
                        <div className='col_logo_inr'>
                            <div className='social_medial_otr'>
                                <p className='heading-mb social_heading'>
                                    Social Media
                                </p>
                                <ul className='social_ul'>
                                    <li className='social_li'>
                                        <Link className='social_linkk'>
                                            <FacebookLogo size={24} />
                                        </Link>
                                    </li>
                                    <li className='social_li'>
                                        <Link className='social_linkk'>
                                            <TwitterLogo size={24} />
                                        </Link>
                                    </li>
                                    <li className='social_li'>
                                        <Link className='social_linkk'>
                                            <InstagramLogo size={24} />
                                        </Link>
                                    </li>
                                    <li className='social_li'>
                                        <Link className='social_linkk'>
                                            <LinkedinLogo size={24} />
                                        </Link>
                                    </li>
                                    <li className='social_li'>
                                        <Link className='social_linkk'>
                                            <PinterestLogo size={24} />
                                        </Link>
                                    </li>
                                    <li className='social_li'>
                                        <Link className='social_linkk'>
                                            <WhatsappLogo size={24} />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='copy_right_otr'>
                    <p className='heading-sm copy_text'>
                        © 2021 by <Link className='text_linkk'>Visto Themes</Link> • All rights reserved.
                    </p>
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
                        <li className='payment_li'>
                            <Link className='payment_linkk'>
                                <img className='payment_img' src={PaymentImg5} alt='img' />
                            </Link>
                        </li>
                        <li className='payment_li'>
                            <Link className='payment_linkk'>
                                <img className='payment_img' src={PaymentImg6} alt='img' />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer3
