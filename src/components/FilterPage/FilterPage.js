import React, { useState } from 'react'
import FilterAray from './FilterAray';
import ProductCard from '../ProductCard/ProductCard';

import './FilterPage.scss'

function FilterPage() {
    const [items, setItems] = useState(FilterAray);

    const filterItems = (categItem) => {
        const updateItems = FilterAray.filter((curElem) => {
            return curElem.CardHeading === categItem;
        })
        setItems(updateItems);
    }
    return (
        <div className='FilterPage_main'>
            <div className='container'>
                <div className='button_otr'>
                    <ul className='btn_ul'>
                        <li className='btn_li'>
                            <button className='fillter_btn' onClick={() => filterItems('Women')}>
                                Women
                            </button>
                        </li>
                        <li className='btn_li'>
                            <button className='fillter_btn' onClick={() => filterItems('Men')}>
                                Men
                            </button>
                        </li>
                        <li className='btn_li'>
                            <button className='fillter_btn' onClick={() => filterItems('Baby')}>
                                Baby
                            </button>
                        </li>
                        <li className='btn_li'>
                            <button className='fillter_btn' onClick={() => filterItems('Girl')}>
                                girl
                            </button>
                        </li>
                        <li className='btn_li'>
                            <button className='fillter_btn' onClick={() => filterItems('Boy')}>
                                boy
                            </button>
                        </li>
                        <li className='btn_li'>
                            <button className='fillter_btn' onClick={() => setItems(FilterAray)}>
                                All
                            </button>
                        </li>
                    </ul>
                </div>
                <div className='row row_custom'>
                    {items.map((elem) => {
                        const { id, CardImg, TagText, CardHeading, RealPrice, prePrice, ProductReview, CardProductDesc } = elem;
                        return (
                            <>
                                <ProductCard
                                    ProductCardClass={`col-md-6 col-sm-12`}
                                    key={id}
                                    CardImg={CardImg}
                                    TagText={TagText}
                                    CardHeading={CardHeading}
                                    RealPrice={RealPrice}
                                    prePrice={prePrice}
                                    ProductReview={ProductReview}
                                    CardProductDesc={CardProductDesc}
                                />
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default FilterPage