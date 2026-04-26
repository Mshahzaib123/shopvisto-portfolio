import React from 'react'
import InnerHeader from '../InnerHeader/InnerHeader'
import ThemeBtn from '../ThemeBtn/ThemeBtn';
import { Link } from 'react-router-dom';

import './EmptyCartPage.scss';

import CartImg from '../../img/heart-icon.svg';

function EmptyWishlist() {
    return (
        <div className='EmptyCartPage_main'>
            <InnerHeader
                Heading="Empty Wishlist"
            />
            <div className='EmptyCart_section'>
                <div className='container'>
                    <div className='row row_custom'>
                        <div className='col-lg-6 col_content_otr'>
                            <div className='col_content_inr'>
                                <h2 className='heading-h2 cart_heading'>
                                    Your Wishlist Cart is Empty.
                                </h2>
                                <p className='heading-mm cart_desc'>
                                    You don't have any pending transaction.
                                </p>
                                <Link className='action_otr' to="/">
                                    <ThemeBtn
                                        ButtonClass="primary_btn"
                                        ButtonText="Back to Home"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className='col-lg-6 col_img_otr'>
                            <div className='col_img_inr'>
                                <img className='cart_img' src={CartImg} alt='img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmptyWishlist