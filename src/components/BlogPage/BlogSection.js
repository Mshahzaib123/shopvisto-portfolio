import React from 'react'
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard'

import CardImg1 from '../../img/blog-img1.jpg';
import CardImg2 from '../../img/blog-img2.jpg';
import CardImg3 from '../../img/blog-img3.jpg';
import ProfileImg1 from '../../img/profile-img1.png';
import ProfileImg2 from '../../img/profile-img2.png';
import ProfileImg3 from '../../img/profile-img3.png';

import './BlogPage.scss';
import ThemeBtn from '../ThemeBtn/ThemeBtn';

function BlogSection() {
    return (
        <section className='BlogSection_main'>
            <div className='container'>
                <div className='row row_custom'>
                    <div className='col-lg-9 col-md-8 col-sm-6 col_cards_otr'>
                        <div className='row col_cards_inr'>
                            <BlogCard
                                ClassAdd="col-lg-4 col-md-6 col-sm-12"
                                CardImg={CardImg1}
                                TagText="Ecommerce"
                                CardHeading="Do the Shopping in the Dark and Enjoy Full Time"
                                ProfileImg={ProfileImg1}
                                ProfileText="Admin ~ 20 Feb 2021"
                            />
                            <BlogCard
                                ClassAdd="col-lg-4 col-md-6 col-sm-12"
                                CardImg={CardImg2}
                                TagText="Ecommerce"
                                CardHeading="Do the Shopping in the Dark and Enjoy Full Time"
                                ProfileImg={ProfileImg2}
                                ProfileText="Admin ~ 20 Feb 2021"
                            />
                            <BlogCard
                                ClassAdd="col-lg-4 col-md-6 col-sm-12"
                                CardImg={CardImg3}
                                TagText="Ecommerce"
                                CardHeading="Do the Shopping in the Dark and Enjoy Full Time"
                                ProfileImg={ProfileImg3}
                                ProfileText="Admin ~ 20 Feb 2021"
                            />
                            <BlogCard
                                ClassAdd="col-lg-4 col-md-6 col-sm-12"
                                CardImg={CardImg1}
                                TagText="Ecommerce"
                                CardHeading="Do the Shopping in the Dark and Enjoy Full Time"
                                ProfileImg={ProfileImg1}
                                ProfileText="Admin ~ 20 Feb 2021"
                            />
                            <BlogCard
                                ClassAdd="col-lg-4 col-md-6 col-sm-12"
                                CardImg={CardImg2}
                                TagText="Ecommerce"
                                CardHeading="Do the Shopping in the Dark and Enjoy Full Time"
                                ProfileImg={ProfileImg2}
                                ProfileText="Admin ~ 20 Feb 2021"
                            />
                            <BlogCard
                                ClassAdd="col-lg-4 col-md-6 col-sm-12"
                                CardImg={CardImg3}
                                TagText="Ecommerce"
                                CardHeading="Do the Shopping in the Dark and Enjoy Full Time"
                                ProfileImg={ProfileImg3}
                                ProfileText="Admin ~ 20 Feb 2021"
                            />
                            <BlogCard
                                ClassAdd="col-lg-4 col-md-6 col-sm-12"
                                CardImg={CardImg1}
                                TagText="Ecommerce"
                                CardHeading="Do the Shopping in the Dark and Enjoy Full Time"
                                ProfileImg={ProfileImg1}
                                ProfileText="Admin ~ 20 Feb 2021"
                            />
                            <BlogCard
                                ClassAdd="col-lg-4 col-md-6 col-sm-12"
                                CardImg={CardImg2}
                                TagText="Ecommerce"
                                CardHeading="Do the Shopping in the Dark and Enjoy Full Time"
                                ProfileImg={ProfileImg2}
                                ProfileText="Admin ~ 20 Feb 2021"
                            />
                            <BlogCard
                                ClassAdd="col-lg-4 col-md-6 col-sm-12"
                                CardImg={CardImg3}
                                TagText="Ecommerce"
                                CardHeading="Do the Shopping in the Dark and Enjoy Full Time"
                                ProfileImg={ProfileImg3}
                                ProfileText="Admin ~ 20 Feb 2021"
                            />
                        </div>
                        <div className='action_main'>
                            <Link className='action_otr'>
                                <ThemeBtn
                                    ButtonClass="primary_btn"
                                    ButtonText="Load More"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col_sidebar_otr'>
                        <div className='col_sidebar_inr'>
                            <div className='category_otr'>
                                <p className='heading-lb sidebar_heading'>
                                    Categories
                                </p>
                                <ul className='linkk_ul'>
                                    <li className='linkk_li'>
                                        <Link className='heading-xsb linkk_text'>
                                            eCommerce (234)
                                        </Link>
                                    </li>
                                    <li className='linkk_li'>
                                        <Link className='heading-xsb linkk_text'>
                                            Shopping (242)
                                        </Link>
                                    </li>
                                    <li className='linkk_li'>
                                        <Link className='heading-xsb linkk_text'>
                                            Online Buy (533)
                                        </Link>
                                    </li>
                                    <li className='linkk_li'>
                                        <Link className='heading-xsb linkk_text'>
                                            Bag Colors (35)
                                        </Link>
                                    </li>
                                    <li className='linkk_li'>
                                        <Link className='heading-xsb linkk_text'>
                                            Online Stores (33)
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='popularPost_otr'>
                                <p className='heading-lb sidebar_heading'>
                                    Popular Posts
                                </p>
                                <ul className='linkk_ul'>
                                    <li className='linkk_li'>
                                        <Link className='product_linkk'>
                                            <img className='product_img' src={CardImg1} alt='img' />
                                            <p className='heading-xsb product_text'>
                                                Best Products to Purchase in Summer 2021
                                            </p>
                                        </Link>
                                    </li>
                                    <li className='linkk_li'>
                                        <Link className='product_linkk'>
                                            <img className='product_img' src={CardImg2} alt='img' />
                                            <p className='heading-xsb product_text'>
                                                Best Products to Purchase in Summer 2021
                                            </p>
                                        </Link>
                                    </li>
                                    <li className='linkk_li'>
                                        <Link className='product_linkk'>
                                            <img className='product_img' src={CardImg3} alt='img' />
                                            <p className='heading-xsb product_text'>
                                                Best Products to Purchase in Summer 2021
                                            </p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='archives_otr'>
                                <p className='heading-lb sidebar_heading'>
                                    Archives
                                </p>
                                <ul className='linkk_ul'>
                                    <li className='linkk_li'>
                                        <Link className='heading-xsb linkk_text'>
                                            November 2020
                                        </Link>
                                    </li>
                                    <li className='linkk_li'>
                                        <Link className='heading-xsb linkk_text'>
                                            January 2021
                                        </Link>
                                    </li>
                                    <li className='linkk_li'>
                                        <Link className='heading-xsb linkk_text'>
                                            February 2021
                                        </Link>
                                    </li>
                                    <li className='linkk_li'>
                                        <Link className='heading-xsb linkk_text'>
                                            March 2021
                                        </Link>
                                    </li>
                                    <li className='linkk_li'>
                                        <Link className='heading-xsb linkk_text'>
                                            April 2021
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='tags_otr'>
                                <p className='heading-lb sidebar_heading'>
                                    Tags
                                </p>
                                <ul className='linkk_ul'>
                                    <li className='linkk_li'>
                                        <Link className='heading-xsb linkk_text'>
                                            Bags
                                        </Link>
                                    </li>
                                    <li className='linkk_li'>
                                        <Link className='heading-xsb linkk_text'>
                                            Colors
                                        </Link>
                                    </li>
                                    <li className='linkk_li'>
                                        <Link className='heading-xsb linkk_text'>
                                            Shopping
                                        </Link>
                                    </li>
                                    <li className='linkk_li'>
                                        <Link className='heading-xsb linkk_text'>
                                            eCommerce
                                        </Link>
                                    </li>
                                    <li className='linkk_li'>
                                        <Link className='heading-xsb linkk_text'>
                                            Visto Shop
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogSection