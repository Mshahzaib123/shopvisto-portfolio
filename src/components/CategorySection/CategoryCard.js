import React from 'react'
import { Link } from 'react-router-dom'

import { CaretDoubleRight } from 'phosphor-react'

import './CategorySection.scss';

function CategoryCard(props) {
    return (
        <div className='col-lg-6 col_category_otr'>
            <div className='col_category_inr'>
                <div className='content_otr'>
                    <div className='heading_otr'>
                        <p className='heading-sm tag_text'>
                            {props.TagText}
                        </p>
                        <h3 className='heading-h3 card_heading'>{props.Heading}</h3>
                    </div>
                    <Link className='action_otr'>
                        <span className='heading-sm action_text'>
                            Shop Now
                        </span>
                        <CaretDoubleRight size={20} />
                    </Link>
                </div>
                <div className='img_otr'>
                    <img className='card_img' src={props.CardImg} alt='img' />
                </div>
            </div>
        </div>
    )
}

export default CategoryCard