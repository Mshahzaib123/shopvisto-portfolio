import React, { useState } from 'react'
import './Header.scss';
import { Link } from 'react-router-dom';
import ThemeBtn from '../ThemeBtn/ThemeBtn';

import ThemeSelect from '../ThemeSelect/ThemeSelect';
import LogoImg from '../../img/brand-logo.png';
import { X, CaretRight, MagnifyingGlass, Heart, User, Bag, List } from 'phosphor-react';
import DropDown2 from './DropDown2';
import SmallProductCard from '../ProductCard/SmallProductCard';

import ProductImg1 from '../../img/card-img1.png';
import ProductImg2 from '../../img/card-img2.png';
import ProductImg3 from '../../img/card-img3.png';
import ProductImg4 from '../../img/card-img4.png';
import ProductImg5 from '../../img/card-img5.png';
import ProductImg6 from '../../img/card-img6.png';

function Header(props) {
    const [TopBar, setTopBar] = useState(true);
    const TopBarClose = () => {
        setTopBar(false);
    }
    const [cartPopup, setcartPopup] = useState(false);
    const OpenCartPopup = () => {
        setcartPopup(!cartPopup)
    }
    const [CategoryDrop, setCategoryDrop] = useState(false);
    const CategoryDropOpen = () => {
        setCategoryDrop(!CategoryDrop);
    }
    const [selected, setselected] = useState('Categories');
    const selectOptions = [
        'Featured',
        'Best Selling',
        'Latest'
    ];
    const [overlay, setoverlay] = useState(false);
    const overlayClose = () => {
        setoverlay(false)
    }
    const overlayOpen = () => {
        setoverlay(true)
    }
    const [scroll, setscroll] = useState(false);
    const changeValueScroll = () => {
        const scrollValue = document.documentElement.scrollTop;
        if (scrollValue > 150) {
            setscroll(true)
        }
        else {
            setscroll(false)
        }
    }
    window.addEventListener('scroll', changeValueScroll);
    return (
        <>
            <header className='Header_main'>
                {TopBar && (
                    <div className='top_bar_main'>
                        <div className='wrapper'>
                            <p className='heading-xs delivery_text'>
                                ⓘ Delivery might be delayed a little due to <span className='heading-xsb'>COVID-19</span> pandemic.
                            </p>
                        </div>
                        <div className='close_icon_otr' onClick={TopBarClose}>
                            <X size={24} />
                        </div>
                    </div>
                )}
                <div className='menu_bar'>
                    <div className='container'>
                        <div className='wrapper'>
                            <div className='logo_main'>
                                <div className='menu_icon_otr' onClick={overlayOpen}>
                                    <List size={24} />
                                </div>
                                <Link className='logo_otr' to="/">
                                    <img className='logo_img' src={LogoImg} alt='logo' />
                                </Link>
                            </div>
                            <div className='menu_otr'>
                                <ul className='menu_ul'>
                                    <li className='menu_li home_menu'>
                                        <Link className='heading-mm menu_link' to="/">
                                            Home
                                        </Link>
                                        <DropDown2
                                            DropText1="Home v1"
                                            DropDownLink1="/"
                                            DropText2="Home v2"
                                            DropDownLink2="/landing-page2"
                                        />
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
                <div className='category_main'>
                    <div className='container'>
                        <div className='row row_custom'>
                            <div className='col-lg-3 col-md-4 col-sm-3 col_categories_otr'>
                                <div className='col_categories_inr'>
                                    <div className={CategoryDrop ? 'categorydrop_header categorydrop_header_active' : 'categorydrop_header'} onClick={CategoryDropOpen}>
                                        {CategoryDrop ? (<X size={20} />) : (<List size={20} />)}
                                        <p className='head_text'>
                                            Categories
                                        </p>
                                    </div>
                                    {CategoryDrop && (
                                        <div className='category_dropdown'>
                                            <ul className='category_ul'>
                                                <li className='category_li'>
                                                    <Link className='category_linkk'>
                                                        <span className='linkk_text'>
                                                            Fashion
                                                        </span>
                                                        <CaretRight size={20} />
                                                    </Link>
                                                    <div className='other_dropdown_otr'>
                                                        <ul className='other_drop_ul'>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Mobile
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Tablet
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Laptops
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Desktop
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Audio
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Computer
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Printers
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className='category_li'>
                                                    <Link className='category_linkk'>
                                                        <span className='linkk_text'>
                                                            Electronics
                                                        </span>
                                                        <CaretRight size={20} />
                                                    </Link>
                                                    <div className='other_dropdown_otr'>
                                                        <ul className='other_drop_ul'>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Mobile
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Tablet
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Laptops
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Desktop
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Audio
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Computer
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Printers
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className='category_li'>
                                                    <Link className='category_linkk'>
                                                        <span className='linkk_text'>
                                                            Groceries
                                                        </span>
                                                        <CaretRight size={20} />
                                                    </Link>
                                                    <div className='other_dropdown_otr'>
                                                        <ul className='other_drop_ul'>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Mobile
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Tablet
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Laptops
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Desktop
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Audio
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Computer
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Printers
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className='category_li'>
                                                    <Link className='category_linkk'>
                                                        <span className='linkk_text'>
                                                            Medical
                                                        </span>
                                                        <CaretRight size={20} />
                                                    </Link>
                                                    <div className='other_dropdown_otr'>
                                                        <ul className='other_drop_ul'>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Mobile
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Tablet
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Laptops
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Desktop
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Audio
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Computer
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Printers
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className='category_li'>
                                                    <Link className='category_linkk'>
                                                        <span className='linkk_text'>
                                                            Food
                                                        </span>
                                                        <CaretRight size={20} />
                                                    </Link>
                                                    <div className='other_dropdown_otr'>
                                                        <ul className='other_drop_ul'>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Mobile
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Tablet
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Laptops
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Desktop
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Audio
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Computer
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Printers
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className='category_li'>
                                                    <Link className='category_linkk'>
                                                        <span className='linkk_text'>
                                                            Babies
                                                        </span>
                                                        <CaretRight size={20} />
                                                    </Link>
                                                    <div className='other_dropdown_otr'>
                                                        <ul className='other_drop_ul'>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Mobile
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Tablet
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Laptops
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Desktop
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Audio
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Computer
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Printers
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className='category_li'>
                                                    <Link className='category_linkk'>
                                                        <span className='linkk_text'>
                                                            Furniture
                                                        </span>
                                                        <CaretRight size={20} />
                                                    </Link>
                                                    <div className='other_dropdown_otr'>
                                                        <ul className='other_drop_ul'>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Mobile
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Tablet
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Laptops
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Desktop
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Audio
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Computer
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Printers
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className='category_li'>
                                                    <Link className='category_linkk'>
                                                        <span className='linkk_text'>
                                                            Sports
                                                        </span>
                                                        <CaretRight size={20} />
                                                    </Link>
                                                    <div className='other_dropdown_otr'>
                                                        <ul className='other_drop_ul'>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Mobile
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Tablet
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Laptops
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Desktop
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Audio
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Computer
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Printers
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className='category_li'>
                                                    <Link className='category_linkk'>
                                                        <span className='linkk_text'>
                                                            Lifestyle
                                                        </span>
                                                        <CaretRight size={20} />
                                                    </Link>
                                                    <div className='other_dropdown_otr'>
                                                        <ul className='other_drop_ul'>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Mobile
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Tablet
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Laptops
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Desktop
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Audio
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Computer
                                                                </Link>
                                                            </li>
                                                            <li className='other_drop_li'>
                                                                <Link className='other_drop_Link'>
                                                                    Printers
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className='col-lg-9 col-md-8 col-sm-9 col_search_otr'>
                                <div className='col_search_inr'>
                                    <div className='input_otr'>
                                        <input className='search_input' type='search' name='search' placeholder='What are you looking for?' />
                                    </div>
                                    <div className='category_search_icon'>
                                        <div className='catehory_select_otr'>
                                            <ThemeSelect
                                                Selected={selected}
                                                setSelected={setselected}
                                                options={selectOptions}
                                            />
                                        </div>
                                        <div className='search_icon_otr'>
                                            <MagnifyingGlass size={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className={scroll ? 'scroll_nav menu_bar onScroll' : 'menu_bar onScroll'}>
                <div className='container'>
                    <div className='wrapper'>
                        <div className='logo_main'>
                            <div className='menu_icon_otr' onClick={overlayOpen}>
                                <List size={24} />
                            </div>
                            <Link className='logo_otr' to="/">
                                <img className='logo_img' src={LogoImg} alt='logo' />
                            </Link>
                        </div>
                        <div className='menu_otr'>
                            <ul className='menu_ul'>
                                <li className='menu_li home_menu'>
                                    <Link className='heading-mm menu_link' to="/">
                                        Home
                                    </Link>
                                    <DropDown2
                                        DropText1="Home v1"
                                        DropDownLink1="/"
                                        DropText2="Home v2"
                                        DropDownLink2="/landing-page2"
                                    />
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
            <div className={overlay ? 'overlay_main overlay_open' : 'overlay_main'}>
                <div className='overlay_bg'></div>
                <div className='overlay_otr'>
                    <div className='overlay_header'>
                        <Link className='logo_otr' to="/">
                            <img className='logo_img' src={LogoImg} alt='logo' />
                        </Link>
                        <div className='close_icon_otr' onClick={overlayClose}>
                            <X size={24} />
                        </div>
                    </div>
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
                                <Link className='heading-mm menu_link' to="/blog">
                                    Blog
                                </Link>
                            </li>
                            <li className='menu_li'>
                                <Link className='heading-mm menu_link' to="/contact">
                                    Contact
                                </Link>
                            </li>
                            <li className='menu_li'>
                                <Link className='heading-mm menu_link' to="/cart">
                                    Cart
                                </Link>
                            </li>
                            <li className='menu_li'>
                                <Link className='heading-mm menu_link' to="/empty_cart">
                                    Cart Empty
                                </Link>
                            </li>
                            <li className='menu_li'>
                                <Link className='heading-mm menu_link' to="/wishlist">
                                    Wishlist
                                </Link>
                            </li>
                            <li className='menu_li'>
                                <Link className='heading-mm menu_link' to="/empty_wishlist">
                                    Wishlist Empty
                                </Link>
                            </li>
                            <li className='menu_li'>
                                <Link className='heading-mm menu_link' to="/checkout">
                                    Checkout
                                </Link>
                            </li>
                            <li className='menu_li'>
                                <Link className='heading-mm menu_link' to="/contact">
                                    Thank You
                                </Link>
                            </li>
                            <li className='menu_li'>
                                <Link className='heading-mm menu_link' to="/faq">
                                    FAQs
                                </Link>
                            </li>
                            <li className='menu_li'>
                                <Link className='heading-mm menu_link' to="/comming_soon">
                                    Coming Soon
                                </Link>
                            </li>
                            <li className='menu_li'>
                                <Link className='heading-mm menu_link' to="/404">
                                    404
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='btns_otr'>
                        <Link className='action_otr' to="/wishlist">
                            <ThemeBtn
                                ButtonClass="light_btn"
                                ButtonText="Wishlist"
                            />
                        </Link>
                        <Link className='action_otr' to="/">
                            <ThemeBtn
                                ButtonClass="primary_btn"
                                ButtonText="Checkout"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header