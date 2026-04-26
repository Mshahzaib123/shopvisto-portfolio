import React from 'react'
import InnerHeader from '../InnerHeader/InnerHeader'
import WhishRow from './WhishRow'

import ProductImg1 from '../../img/card-img1.png';
import ProductImg2 from '../../img/card-img2.png';
import ProductImg3 from '../../img/card-img3.png';
import ProductImg4 from '../../img/card-img4.png';
import ProductImg5 from '../../img/card-img5.png';
import ProductImg6 from '../../img/card-img6.png';

function WhishListPage() {
    return (
        <div className='WhishListPage_main'>
            <InnerHeader
                Heading="Wish List"
            />
            <div className='WhishListtable_main'>
                <div className='container'>
                    <div className='wish_table_main'>
                        <table className='whish_table'>
                            <thead>
                                <tr>
                                    <th>
                                        <p className='heading-xsb head_text'>
                                            Product
                                        </p>
                                    </th>
                                    <th>
                                        <p className='heading-xsb head_text'>
                                            Name
                                        </p>
                                    </th>
                                    <th>
                                        <p className='heading-xsb head_text'>
                                            Unit Price
                                        </p>
                                    </th>
                                    <th>
                                        <p className='heading-xsb head_text'>
                                            Rating
                                        </p>
                                    </th>
                                    <th>
                                        <p className='heading-xsb head_text'>
                                            Actions
                                        </p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <WhishRow
                                    ProductImg={ProductImg1}
                                    ProductHeading="Women Shirt"
                                    ProductPrice="$200"
                                    ProductRating="5.0"
                                />
                                <WhishRow
                                    ProductImg={ProductImg2}
                                    ProductHeading="Women Shirt"
                                    ProductPrice="$200"
                                    ProductRating="3.0"
                                />
                                <WhishRow
                                    ProductImg={ProductImg3}
                                    ProductHeading="Women Shirt"
                                    ProductPrice="$200"
                                    ProductRating="6.0"
                                />
                                <WhishRow
                                    ProductImg={ProductImg4}
                                    ProductHeading="Women Shirt"
                                    ProductPrice="$200"
                                    ProductRating="2.0"
                                />
                                <WhishRow
                                    ProductImg={ProductImg5}
                                    ProductHeading="Women Shirt"
                                    ProductPrice="$200"
                                    ProductRating="4.0"
                                />
                                <WhishRow
                                    ProductImg={ProductImg6}
                                    ProductHeading="Women Shirt"
                                    ProductPrice="$200"
                                    ProductRating="5.0"
                                />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhishListPage