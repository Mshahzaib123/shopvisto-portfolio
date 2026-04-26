import React from 'react'

import './CategorySection.scss';

import CardImg1 from '../../img/category-img5.png';
import CardImg2 from '../../img/category-img6.png';
import CardImg3 from '../../img/category-img7.jpg';
import { Link } from 'react-router-dom';
import ThemeBtn from '../ThemeBtn/ThemeBtn';

function CategorySection2() {
    return (
        <section className='category_section2'>
            <div className='container'>
                <div className='row row_custom'>
                    <div className='col-lg-6 col_card_otr'>
                        <div className='col_card_inr'>
                            <img className='card_img' src={CardImg3} alt='Img' />
                            <div className='content_otr'>
                                <h2 className='heading-h2 heading_card'>
                                    Nike Air Max 270 React
                                    <span> Multi Colors </span>
                                </h2>
                                <Link className='action_otr'>
                                    <ThemeBtn
                                        ButtonClass="border_btn card_btn"
                                        ButtonText="Let’s Do Shopping"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col_cards_otr'>
                        <div className='col_cards_inr'>
                            <div className='card_otr'>
                                <img className='card_img' src={CardImg1} alt='Img' />
                                <div className='content_otr'>
                                    <h3 className='heading-h3 heading_card'>
                                        Cool Hoodie with <br />
                                        Black Shirt
                                    </h3>
                                    <p className='heading-h2 price_otr'>
                                        $99
                                    </p>
                                    <Link className='action_otr'>
                                        <ThemeBtn
                                            ButtonClass="border_btn card_btn"
                                            ButtonText="Let’s Do Shopping"
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className='card_otr'>
                                <img className='card_img' src={CardImg2} alt='Img' />
                                <div className='content_otr'>
                                    <h3 className='heading-h3 heading_card'>
                                        Men’s Leather Jacket <br />
                                        for Sale!
                                    </h3>
                                    <p className='heading-h2 price_otr price_orange'>
                                        $99
                                        <span className='heading-h3 price_inr'>
                                            $450
                                        </span>
                                    </p>
                                    <Link className='action_otr'>
                                        <ThemeBtn
                                            ButtonClass="border_btn card_btn"
                                            ButtonText="Let’s Do Shopping"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CategorySection2