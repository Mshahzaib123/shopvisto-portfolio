import React from 'react'
import ProductCard2 from '../ProductCard/ProductCard2'
import ProductData from '../ProductCard/ProductData';

import './LatestProductSection.scss';

import TextImg from '../../img/latest_text.svg';

function LatestProductSection2() {
    return (
        <section className='Latest_Section Latest_Section2'>
            <div className='container'>
                <div className='wrapper'>
                    <h2 className='heading-h2 wrapper_heading'>
                        Latest Products
                    </h2>
                    <span className='line'></span>
                    <img className='text_img' src={TextImg} alt='img' />
                </div>
                <div className='row row_custom'>
                    {ProductData.map((val) => {
                        return (
                            <ProductCard2
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

export default LatestProductSection2