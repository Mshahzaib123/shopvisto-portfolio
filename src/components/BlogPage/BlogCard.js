import React from 'react'
import { Link } from 'react-router-dom';

import './BlogPage.scss';

function BlogCard(props) {
    return (
        <div className={`${props.ClassAdd} col_blog_otr`}>
            <div className='col_blog_inr'>
                <Link className='img_otr' to="/blog-details">
                    <img className='blog_img' src={props.CardImg} alt='img' />
                </Link>
                <div className='content_otr'>
                    <div className='tag_otr'>
                        <p className='heading-xsb tag_text'>{props.TagText}</p>
                    </div>
                    <Link className='heading-lb card_heading' to="/blog-details" title={props.CardHeading}>{props.CardHeading}</Link>
                    <Link className='profile_img_otr'>
                        <img className='profile_img' src={props.ProfileImg} alt='img' />
                        <p className='heading-xsb profile_text'>{props.ProfileText}</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCard