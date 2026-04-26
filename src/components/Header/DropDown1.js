import React from 'react'
import { Link } from 'react-router-dom'

function DropDown1() {
    return (
        <div className='drop_down_otr drop_down1'>
            <div className='drop_down_main'>
                <div className='drop_down_inr'>
                    <p className='heading-xsm drop_heading'>
                        Shop Layout
                    </p>
                    <ul className='drop_down_ul'>
                        <li className='drop_down_li'>
                            <Link className='heading-mm drop_down_link'>
                                Full Widh
                            </Link>
                        </li>
                        <li className='drop_down_li'>
                            <Link className='heading-mm drop_down_link'>
                                Grid View
                            </Link>
                        </li>
                        <li className='drop_down_li'>
                            <Link className='heading-mm drop_down_link'>
                                List View
                            </Link>
                        </li>
                        <li className='drop_down_li'>
                            <Link className='heading-mm drop_down_link'>
                                Sidebar Left
                            </Link>
                        </li>
                        <li className='drop_down_li'>
                            <Link className='heading-mm drop_down_link'>
                                Sidebar Right
                            </Link>
                        </li>
                        <li className='drop_down_li'>
                            <Link className='heading-mm drop_down_link'>
                                Search Results
                            </Link>
                        </li>
                        <li className='drop_down_li'>
                            <Link className='heading-mm drop_down_link'>
                                Category
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='drop_down_inr'>
                    <p className='heading-xsm drop_heading'>
                        Shop Pages
                    </p>
                    <ul className='drop_down_ul'>
                        <li className='drop_down_li'>
                            <Link className='heading-mm drop_down_link'>
                                Cart
                            </Link>
                        </li>
                        <li className='drop_down_li'>
                            <Link className='heading-mm drop_down_link'>
                                Cart Empty
                            </Link>
                        </li>
                        <li className='drop_down_li'>
                            <Link className='heading-mm drop_down_link'>
                                Wishlist
                            </Link>
                        </li>
                        <li className='drop_down_li'>
                            <Link className='heading-mm drop_down_link'>
                                Wishlist Empty
                            </Link>
                        </li>
                        <li className='drop_down_li'>
                            <Link className='heading-mm drop_down_link'>
                                Checkout
                            </Link>
                        </li>
                        <li className='drop_down_li'>
                            <Link className='heading-mm drop_down_link'>
                                Thank You
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='drop_down_inr'>
                    <p className='heading-xsm drop_heading'>
                        Product Layout
                    </p>
                    <ul className='drop_down_ul'>
                        <li className='drop_down_li'>
                            <Link className='heading-mm drop_down_link'>
                                Variation 1
                            </Link>
                        </li>
                        <li className='drop_down_li'>
                            <Link className='heading-mm drop_down_link'>
                                Variation 2
                            </Link>
                        </li>
                        <li className='drop_down_li'>
                            <Link className='heading-mm drop_down_link'>
                                Variation 3
                            </Link>
                        </li>
                        <li className='drop_down_li'>
                            <Link className='heading-mm drop_down_link'>
                                Variation 4
                            </Link>
                        </li>
                        <li className='drop_down_li'>
                            <Link className='heading-mm drop_down_link'>
                                Variation 5
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DropDown1