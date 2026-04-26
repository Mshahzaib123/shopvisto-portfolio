import React from 'react'
import { Link } from 'react-router-dom'
import { FacebookLogo, TwitterLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react'

import './BlogDetailsPage.scss';

function UserReviewCard(props) {
    return (
        <div className='UserReviewCard_otr'>
            <div className='UserReviewCard_inr'>
                <div className='profile_icons_otr'>
                    <Link className='profile_otr'>
                        <img className='profile_img' src={props.ProfileImg} alt='img' />
                        <div className='content_otr'>
                            <p className='heading-xsb userName'>{props.UserName}</p>
                            <p className='heading-xs dateText'>{props.DateText}</p>
                        </div>
                    </Link>
                    <ul className='social_ul'>
                        <li className='social_li'>
                            <Link className='social_linkk'>
                                <FacebookLogo size={24} />
                            </Link>
                        </li>
                        <li className='social_li'>
                            <Link className='social_linkk'>
                                <TwitterLogo size={24} />
                            </Link>
                        </li>
                        <li className='social_li'>
                            <Link className='social_linkk'>
                                <InstagramLogo size={24} />
                            </Link>
                        </li>
                        <li className='social_li'>
                            <Link className='social_linkk'>
                                <LinkedinLogo size={24} />
                            </Link>
                        </li>
                    </ul>
                </div>
                <p className='heading-m card_heading'>
                    {props.CardHeading}
                </p>
            </div>
        </div>
    )
}

export default UserReviewCard