import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeSelect from '../ThemeSelect/ThemeSelect';
import { FacebookLogo, TwitterLogo, InstagramLogo, LinkedinLogo, PinterestLogo, WhatsappLogo } from 'phosphor-react';
import './Footer.scss';

import BrandLogo from '../../img/brand-logo2.png';
import PaymentImg1 from '../../img/payment_icon1.svg';
import PaymentImg2 from '../../img/payment_icon2.svg';
import PaymentImg3 from '../../img/payment_icon3.svg';
import PaymentImg4 from '../../img/payment_icon4.svg';
import PaymentImg5 from '../../img/payment_icon5.svg';
import PaymentImg6 from '../../img/payment_icon6.svg';

function Footer() {
    const [selected, setselected] = useState('Language');
    const selectOptions = [
        'English',
        'Urdu',
        'French',
        'Japanese'
    ]
    return (
        <footer className='footer_main'>
            <div className='container'>
                <div className='row row_custom'>
                    <div className='col-lg-4 col-md-6 col-sm-6 col_logo_otr'>
                        <div className='col_logo_inr'>
                            <Link className='logo_otr' to="/">
                                <img className='logo_img' src={BrandLogo} alt='logo' />
                            </Link>
                            <p className='heading-s desc'>
                                Tea cup ballast blimey lee snow crow's nest rutters fluke jib scourge.
                            </p>
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
                    <div className='col-lg-2 col-md-6 col-sm-6 col_linkk_otr'>
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
                    <div className='col-lg-2 col-md-6 col-sm-6 col_linkk_otr'>
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
                                    <Link className='heading-sm linkk_text' to="/terms">
                                        Terms & Conditions
                                    </Link>
                                </li>
                                <li className='linkk_li'>
                                    <Link className='heading-sm linkk_text' to="/privacy">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li className='linkk_li'>
                                    <Link className='heading-sm linkk_text' to="/refund">
                                        Return Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6 col_social_otr'>
                        <div className='col_social_inr'>
                            <p className='heading-mb contact_heading'>
                                Contact Details
                            </p>
                            <Link className='contact_otr'>
                                <p className='heading-xsm contact_text1'>Address</p>
                                <p className='heading-sb contact_text2'>
                                    Main Jhang Road, Faisalabad, Pakistan
                                </p>
                            </Link>
                            <a className='contact_otr' href="tel:03708446009">
                                <p className='heading-xsm contact_text1'>Phone</p>
                                <p className='heading-sb contact_text2'>
                                    03708446009
                                </p>
                            </a>
                            <a className='contact_otr' href="mailto:mshahzaibzahid0@gmail.com">
                                <p className='heading-xsm contact_text1'>Email</p>
                                <p className='heading-sb contact_text2'>
                                    mshahzaibzahid0@gmail.com
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='payment_otr'>
                    <p className='heading-mb payment_heading'>
                        Acceptable Payment Methods
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
                <div className='copy_right_otr'>
                    <p className='heading-sm copy_text'>
                        © 2021 by <a className='text_linkk' href="/" target="_blank" rel="noopener noreferrer">Vistothemes</a> • All rights reserved.
                    </p>
                    <div className='language_otr'>
                        <ThemeSelect
                            Selected={selected}
                            setSelected={setselected}
                            options={selectOptions}
                        />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer