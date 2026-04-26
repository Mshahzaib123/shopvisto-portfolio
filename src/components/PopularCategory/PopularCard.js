import React from 'react'

import './PopularCategory.scss';

function PopularCard(props) {
    return (
        <div className='col-lg-2 col-md-3 col-sm-4 col_popularcard_otr'>
            <div className='col_popularcard_inr'>
                <img className='card_img' src={props.CardImg} alt='img' />
                {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
                <marquee className="marquee_main" scrollamount="3" direction="left">
                    <ul className='marquee_ul'>
                        <li className='marquee_li'>
                            <h2 className='heading-h2 bg_text'>
                                {props.BgText}
                            </h2>
                        </li>
                        <li className='marquee_li'>
                            <h2 className='heading-h2 bg_text'>
                                {props.BgText}
                            </h2>
                        </li>
                        <li className='marquee_li'>
                            <h2 className='heading-h2 bg_text'>
                                {props.BgText}
                            </h2>
                        </li>
                        <li className='marquee_li'>
                            <h2 className='heading-h2 bg_text'>
                                {props.BgText}
                            </h2>
                        </li>
                        <li className='marquee_li'>
                            <h2 className='heading-h2 bg_text'>
                                {props.BgText}
                            </h2>
                        </li>
                    </ul>
                </marquee>
            </div>
        </div>
    )
}

export default PopularCard