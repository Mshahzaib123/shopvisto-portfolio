import React from 'react'
import { useState } from 'react';
import './ProductCard.scss';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, ShareNetwork, CornersOut, WhatsappLogo, InstagramLogo, FacebookLogo, Code } from 'phosphor-react';
import ModalComponent from '../ModalComponent/ModalComponent';
import ProductDetailsModal from './ProductDetailsModal';


function ProductCard2(props) {
    const [HeartIcon, setHeartIcon] = useState(false);

    const HeartIconActive = () => {
        setHeartIcon(!HeartIcon);
    }
    const [modalClass, setModalClass] = useState(false);
    const ModalOpen = () => {
        setModalClass(!modalClass);
    }
    const [SharePopup, setSharePopup] = useState(false);
    const OpenSharePopup = () => {
        setSharePopup(!SharePopup);
    }
    const SharePopupMouseLeave = () => {
        setSharePopup(false);
    }
    return (
        <>
            <div className={`${props.ProductCardClass} col-lg-3 col-md-4 col-sm-6 col_product_otr2`}>
                <div className='col_product_inr' onMouseLeave={SharePopupMouseLeave}>
                    <div className='img_otr'>
                        <div className='tag_otr'>
                            <p className='tag_text'>
                                {props.TagText}
                            </p>
                        </div>
                        <div className={HeartIcon ? 'icon_active icon_otr' : 'icon_otr'} onClick={HeartIconActive}>
                            <Heart className={HeartIcon ? 'heartrIcon heartrIconfill' : 'heartIcon'} size={20} weight='regular' />
                            <div className='title_otr'>
                                <p className='heading-xxsb title_text'>
                                    Add to Wishlist
                                </p>
                            </div>
                        </div>
                        <Link className='img_inr' to="/product_details">
                            <img className='card_img' src={props.CardImg} alt='img' />
                        </Link>
                    </div>
                    <div className='content_otr'>
                        <ul className='star_ul'>
                            <li className='star_li'>
                                <Star size={16} weight="fill" />
                            </li>
                            <li className='star_li'>
                                <Star size={16} weight="fill" />
                            </li>
                            <li className='star_li'>
                                <Star size={16} weight="fill" />
                            </li>
                            <li className='star_li'>
                                <Star size={16} weight="fill" />
                            </li>
                            <li className='star_li'>
                                <Star size={16} weight="fill" />
                            </li>
                        </ul>
                        <Link className='heading-s-semi card_heading' to="/product_details" title={props.CardHeading}>{props.CardHeading}</Link>
                        <p className='heading-sm price_text'>
                            {props.RealPrice}
                            <span className='price_inr'>
                                {props.prePrice}
                            </span>
                        </p>
                        <div className='icon_otr'>
                            <ul className='icon_ul'>
                                <li className='icon_li' onClick={OpenSharePopup}>
                                    <div className='icon_inr'>
                                        <ShareNetwork size={20} />
                                    </div>
                                    <div className='title_otr'>
                                        <p className='heading-xxsb title_text'>
                                            Share Product
                                        </p>
                                    </div>
                                </li>
                                <li className='icon_li'>
                                    <Link className='icon_inr'>
                                        <ShoppingCart size={20} />
                                    </Link>
                                    <div className='title_otr'>
                                        <p className='heading-xxsb title_text'>
                                            Add to Cart
                                        </p>
                                    </div>
                                </li>
                                <li className='icon_li' onClick={ModalOpen}>
                                    <div className='icon_inr'>
                                        <CornersOut size={20} />
                                    </div>
                                    <div className='title_otr'>
                                        <p className='heading-xxsb title_text'>
                                            Quick View
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {SharePopup && (
                        <div className='share_popup_main'>
                            <p className='heading-mb share_heading'>
                                Share :
                            </p>
                            <ul className='social_ul'>
                                <li className='social_li'>
                                    <div className='social_otr'>
                                        <Code size={20} />
                                    </div>
                                </li>
                                <li className='social_li'>
                                    <Link to="" className='social_otr'>
                                        <WhatsappLogo size={20} />
                                    </Link>
                                </li>
                                <li className='social_li'>
                                    <Link to="" className='social_otr'>
                                        <InstagramLogo size={20} />
                                    </Link>
                                </li>
                                <li className='social_li'>
                                    <Link to="" className='social_otr'>
                                        <FacebookLogo size={20} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            {modalClass && (
                <ModalComponent
                    ModalClose={ModalOpen}
                    modalContent={
                        <ProductDetailsModal
                            DetailHeading={props.CardHeading}
                            ReviewsText={props.ProductReview}
                            DetailSliderImg1={props.CardImg}
                            DetailSliderImg2={props.CardImg}
                            DetailSliderImg3={props.CardImg}
                            DetailSliderImg4={props.CardImg}
                            DetailsDesc={props.CardProductDesc}
                            ProductDetailsPrice={props.RealPrice}
                            ProductDetailsPrevPrice={props.prePrice}
                        />
                    }
                />
            )}
        </>
    )
}

export default ProductCard2