import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import ProductData from '../ProductCard/ProductData';
import Satisfaction from '../Satisfaction/Satisfaction';

import './FeatureSection.scss';

function FeatureSection() {
    return (
        <section className='feature_Section'>
            <div className='container'>
                <div className='wrapper'>
                    <h2 className='heading-h2 wrapper_heading'>
                        Featured Products
                    </h2>
                    <span className='line'></span>
                </div>
                <div className='row row_custom'>
                    {ProductData.map((val) => {
                        return (
                            <ProductCard
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
            <Satisfaction />
        </section>
    )
}

export default FeatureSection