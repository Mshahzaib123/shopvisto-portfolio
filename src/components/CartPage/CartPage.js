import React from 'react'
import InnerHeader from '../InnerHeader/InnerHeader'
import CartRow from './CartRow';
import ThemeBtn from '../ThemeBtn/ThemeBtn';
import ThemeInput from '../ThemeInput/ThemeInput';
import { Link } from 'react-router-dom';

import './CartPage.scss';

import ProductImg1 from '../../img/card-img1.png';
import ProductImg2 from '../../img/card-img2.png';
import ProductImg3 from '../../img/card-img3.png';
import ProductImg4 from '../../img/card-img4.png';
import ProductImg5 from '../../img/card-img5.png';
import ProductImg6 from '../../img/card-img6.png';

function CartPage() {
    return (
        <div className='CartPage_main'>
            <InnerHeader
                Heading="Cart"
            />
            <div className='Carttable_main'>
                <div className='container'>
                    <div className='Cart_table_main'>
                        <table className='Cart_table'>
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
                                            Quantity
                                        </p>
                                    </th>
                                    <th>
                                        <p className='heading-xsb head_text'>
                                            Subtotal
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
                                <CartRow
                                    ProductImg={ProductImg1}
                                    ProductHeading="Women Shirt"
                                    ProductPrice="$200"
                                    SubTotal="$250"
                                />
                                <CartRow
                                    ProductImg={ProductImg2}
                                    ProductHeading="Women Shirt"
                                    ProductPrice="$200"
                                    SubTotal="$300"
                                />
                                <CartRow
                                    ProductImg={ProductImg3}
                                    ProductHeading="Women Shirt"
                                    ProductPrice="$200"
                                    SubTotal="$450"
                                />
                                <CartRow
                                    ProductImg={ProductImg4}
                                    ProductHeading="Women Shirt"
                                    ProductPrice="$200"
                                    SubTotal="$200"
                                />
                                <CartRow
                                    ProductImg={ProductImg5}
                                    ProductHeading="Women Shirt"
                                    ProductPrice="$200"
                                    SubTotal="$200"
                                />
                                <CartRow
                                    ProductImg={ProductImg6}
                                    ProductHeading="Women Shirt"
                                    ProductPrice="$200"
                                    SubTotal="$200"
                                />
                            </tbody>
                        </table>
                    </div>
                    <div className='row row_custom'>
                        <div className='col-lg-8 col_code_otr'>
                            <div className='col_code_inr'>
                                <form className='input_main'>
                                    <ThemeInput
                                        inputClass="White_Input"
                                        inputType="text"
                                        inputName="text"
                                        inputPlaceholder="Discount Code"
                                    />
                                    <ThemeBtn
                                        ButtonClass="light_btn"
                                        ButtonText="Apply"
                                    />
                                    <ThemeBtn
                                        ButtonClass="light_btn"
                                        ButtonText="Update Cart"
                                    />
                                </form>
                            </div>
                        </div>
                        <div className='col-lg-4 col_subtotal_otr'>
                            <div className='col_subtotal_inr'>
                                <p className='heading-mb subtotal_heading'>
                                    My Cart Totals
                                </p>
                                <div className='subtotal_otr'>
                                    <p className='heading-sm subtotal_text'>
                                        Subtotal:
                                    </p>
                                    <p className='heading-sb subtotal_price'>
                                        $250
                                    </p>
                                </div>
                                <div className='shipping_flat_main'>
                                    <div className='subtotal_otr'>
                                        <p className='heading-sm subtotal_text'>
                                            Shipping Flat Rate:
                                        </p>
                                        <p className='heading-sb subtotal_price'>
                                            $20
                                        </p>
                                    </div>
                                    <div className='adress_main'>
                                        <p className='heading-sm address_text'>
                                            Shipping Address: 4664 Chestnut Street , Carson , Nevada
                                        </p>
                                        <Link className='heading-xsb Change_text'>
                                            Change Address
                                        </Link>
                                    </div>
                                </div>
                                <div className='subtotal_otr'>
                                    <p className='heading-sm subtotal_text'>
                                        Total
                                    </p>
                                    <p className='heading-sb subtotal_price'>
                                        $25
                                    </p>
                                </div>
                                <Link className='action_otr' to="/checkout">
                                    <ThemeBtn
                                        ButtonClass="primary_btn"
                                        ButtonText="Proceed to Checkout"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage