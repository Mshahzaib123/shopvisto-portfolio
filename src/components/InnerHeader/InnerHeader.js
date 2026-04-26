import React from 'react'
import { Link } from 'react-router-dom';

import './InnerHeader.scss';

import LinesShape from '../../img/banner-lines.jpg';

function InnerHeader(props) {
    return (
        <>
            <section className='inner_header'>
                <img className='shape_img' src={LinesShape} alt='img' />
                <div className='container'>
                    <div className='wrapper'>
                        <h2 className='heading-h2 heading'>
                            {props.Heading}
                        </h2>
                    </div>
                </div>
            </section>
            <div className='bredcrums_otr'>
                <div className='container'>
                    <div className='wrapper'>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <Link to="/" className='heading-sb home_linkk'>
                                        Home
                                    </Link>
                                </li>
                                <li class="heading-sm breadcrumb-item active" aria-current="page">{props.Heading}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InnerHeader