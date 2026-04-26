import React from 'react'
import ProductCard2 from '../ProductCard/ProductCard2'
import Satisfaction2 from '../Satisfaction/Satisfaction2';
import ProductData from '../ProductCard/ProductData';

import './FeatureSection.scss';

import TextImg from '../../img/feature_text.svg';

function FeatureSection2() {
    return (
        <section className='feature_Section feature_Section2'>
            <div className='container'>
                <div className='wrapper heading_img'>
                    <h2 className='heading-h2 wrapper_heading'>
                        Featured Products
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
            <Satisfaction2 />
        </section>
    )
}

export default FeatureSection2