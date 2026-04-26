import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { X } from 'phosphor-react';

import './ProductCard.scss';

function SmallProductCard(props) {
    const [CardAdd, setCardAdd] = useState(true);
    const CardRemove = () => {
        setCardAdd(!CardAdd);
    }
    return (
        <>
            {CardAdd && (
                <div className='col_smallcard_otr'>
                    <div className='col_smallcard_inr'>
                        <div className='Img_otr'>
                            <div className='close_icon_otr' onClick={CardRemove}>
                                <X size={14} />
                            </div>
                            <Link className='Img_inr' to="/product_details">
                                <img className='card_img' src={props.CardImg} alt='img' />
                            </Link>
                        </div>
                        <div className='content_otr'>
                            <Link className='heading-sb card_heading' to="/product_details" title={props.CardHeading}>{props.CardHeading}</Link>
                            <p className='heading-xsb product_price'>
                                {props.CardPrice}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default SmallProductCard