import React from 'react'
import { Link } from 'react-router-dom'
import { Star } from 'phosphor-react'

import './ReviewSection.scss';

function ReviewCard(props) {
    return (
        <div className={`${props.CardClass} col_review_otr`}>
            <div className='col_review_inr'>
                <p className='heading-mb card_heading'>
                    {props.CardHeading}
                </p>
                <div className='profile_star_otr'>
                    <Link className='profile_otr'>
                        <img className='profile_img' src={props.ProfileImg} alt='img' />
                        <p className='heading-xsb userName'>{props.UserName} <span className='userName_inr'>{props.Designation}</span></p>
                    </Link>
                    <ul className='star_ul'>
                        <li className='star_li'>
                            <Star size={20} weight="fill" />
                        </li>
                        <li className='star_li'>
                            <Star size={20} weight="fill" />
                        </li>
                        <li className='star_li'>
                            <Star size={20} weight="fill" />
                        </li>
                        <li className='star_li'>
                            <Star size={20} weight="fill" />
                        </li>
                        <li className='star_li'>
                            <Star size={20} weight="fill" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard