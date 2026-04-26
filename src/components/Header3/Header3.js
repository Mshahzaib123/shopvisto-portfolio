import React, { useState } from 'react'
import './Header3.scss';
import { Link } from 'react-router-dom';
import ThemeBtn from '../ThemeBtn/ThemeBtn';


import LogoImg from '../../img/brand-logo.png';
import { X, MagnifyingGlass, CaretDown, Heart, User, Bag, FacebookLogo, TwitterLogo, InstagramLogo, LinkedinLogo, PinterestLogo, WhatsappLogo } from 'phosphor-react';
import DropDown2 from '../Header/DropDown2';
import SmallProductCard from '../ProductCard/SmallProductCard';

import ProductImg1 from '../../img/card-img1.png';
import ProductImg2 from '../../img/card-img2.png';
import ProductImg3 from '../../img/card-img3.png';
import ProductImg4 from '../../img/card-img4.png';
import ProductImg5 from '../../img/card-img5.png';
import ProductImg6 from '../../img/card-img6.png';


function Header3(props) {
    const [cartPopup, setcartPopup] = useState(false);
    const OpenCartPopup = () => {
        setcartPopup(!cartPopup)
    }
    const [laguage, setLaguage] = useState(false);
    const languageOpen = () => {
        setLaguage(!laguage);
    }
    return (
        <header className='Header_main Header_main2 Header_main3'>
            <div className='top_bar_main'>
                <div className='container'>
                    <div className='wrapper'>
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
                        <div className='language_otr'>
                            <div className='language_header' onClick={languageOpen}>
                                <p className='languate_text'>
                                    English
                                </p>
                                <CaretDown size={20} />
                            </div>
                            {laguage && (
                                <div className='language_drop_down'>
                                    <ul className='language_ul'>
                                        <li className='language_li'>
                                            <Link className='language_linkk'>
                                                Action
                                            </Link>
                                        </li>
                                        <li className='language_li'>
                                            <Link className='language_linkk'>
                                                Another Action
                                            </Link>
                                        </li>
                                        <li className='language_li'>
                                            <Link className='language_linkk'>
                                                Something else here
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className='menu_bar'>
                <div className='container'>
                    <div className='wrapper'>
                        <Link className='logo_otr' to="/">
                            <img className='logo_img' src={LogoImg} alt='logo' />
                        </Link>
                        <div className='menu_otr'>
                            <ul className='menu_ul'>
                                <li className='menu_li'>
                                    <Link className='heading-mm menu_link' to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className='menu_li'>
                                    <Link className='heading-mm menu_link' to="/about">
                                        About
                                    </Link>
                                </li>
                                <li className='menu_li'>
                                    <Link className='heading-mm menu_link' to="/shop">
                                        Shop
                                    </Link>
                                </li>
                                <li className='menu_li'>
                                    <Link className='heading-mm menu_link'>
                                        Pages
                                    </Link>
                                    <DropDown2
                                        DropText1="Cart"
                                        DropDownLink1="/cart"
                                        DropText2="Cart Empty"
                                        DropDownLink2="empty_cart"
                                        DropText3="Wishlist"
                                        DropDownLink3="/wishlist"
                                        DropText4="Wishlist Empty"
                                        DropDownLink4="/empty_wishlist"
                                        DropText5="Checkout"
                                        DropDownLink5="/checkout"
                                        DropText6="Thank You"
                                        DropDownLink6=""
                                        DropText7="FAQs"
                                        OtherDropLink1="/faq"
                                        DropText8="Coming Soon"
                                        OtherDropLink2="/comming_soon"
                                        DropText9="404"
                                        OtherDropLink3="/404"
                                    />
                                </li>
                                <li className='menu_li'>
                                    <Link className='heading-mm menu_link' to="/blog">
                                        Blog
                                    </Link>
                                </li>
                                <li className='menu_li'>
                                    <Link className='heading-mm menu_link' to="/contact">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='action_otr'>
                            <ul className='icon_ul'>
                                <li className='icon_li'>
                                    <div className='icon_otr'>
                                        <MagnifyingGlass size={32} />
                                    </div>
                                </li>
                                <li className='icon_li'>
                                    <div className='icon_otr'>
                                        <User size={32} />
                                        <DropDown2
                                            DropText1="My Account"
                                            DropDownLink1=""
                                            DropText2="Login"
                                            DropDownLink2="/login"
                                            DropText3="Sign Up"
                                            DropDownLink3="/signup"
                                        />
                                    </div>
                                </li>
                                <li className='icon_li'>
                                    <Link className='icon_otr' to="/wishlist">
                                        <Heart size={32} />
                                        <div className='num_otr'>
                                            <p className='heading-xsb product_num'>{props.WishProductNum}</p>
                                        </div>
                                    </Link>
                                </li>
                                <li className='icon_li' onClick={OpenCartPopup}>
                                    <div className='icon_otr'>
                                        <Bag size={32} />
                                        <div className='num_otr'>
                                            <p className='heading-xsb product_num'>{props.AddProductNum}</p>
                                        </div>
                                        <p className='heading-xsb cart_price_text'>
                                            $28.60
                                        </p>
                                    </div>
                                </li>
                            </ul>
                            {cartPopup && (
                                <div className='cart_popup_main'>
                                    <div className='heading_close_otr'>
                                        <p className='heading-mb cart_heading'>
                                            Quick View
                                        </p>
                                        <div className='close_icon_otr' onClick={OpenCartPopup}>
                                            <X size={24} />
                                        </div>
                                    </div>
                                    <div className='products_main'>
                                        <div className='products_otr'>
                                            <SmallProductCard
                                                CardImg={ProductImg1}
                                                CardHeading="Latest Headphone"
                                                CardPrice="$200"
                                            />
                                            <SmallProductCard
                                                CardImg={ProductImg2}
                                                CardHeading="Latest Nike Shoes"
                                                CardPrice="$200"
                                            />
                                            <SmallProductCard
                                                CardImg={ProductImg3}
                                                CardHeading="Brand New Full sleve T-Shirt"
                                                CardPrice="$200"
                                            />
                                            <SmallProductCard
                                                CardImg={ProductImg4}
                                                CardHeading="Brand New jeanse pant"
                                                CardPrice="$200"
                                            />
                                            <SmallProductCard
                                                CardImg={ProductImg5}
                                                CardHeading="Latest Model Mobiles"
                                                CardPrice="$200"
                                            />
                                            <SmallProductCard
                                                CardImg={ProductImg6}
                                                CardHeading="Men's jeans jackate"
                                                CardPrice="$200"
                                            />
                                        </div>
                                        <div className='subtotal_otr'>
                                            <p className='heading-sm subtotal_text'>
                                                Subtotal
                                            </p>
                                            <p className='heading-sb total_price_text'>{props.TotalProductsPrice}</p>
                                        </div>
                                    </div>
                                    <div className='action_main'>
                                        <Link to="/checkout" className='action_otr'>
                                            <ThemeBtn
                                                ButtonClass="primary_btn cart_btn"
                                                ButtonText="Checkout"
                                            />
                                        </Link>
                                        <Link to="/cart" className='action_otr'>
                                            <ThemeBtn
                                                ButtonClass="light_btn cart_btn"
                                                ButtonText="View Cart"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header3
