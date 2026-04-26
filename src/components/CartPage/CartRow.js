import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { X, Minus, Plus } from 'phosphor-react'

import './CartPage.scss';

function CartRow(props) {
    const [TableRow, setTableRow] = useState(true);
    const RowHide = () => {
        setTableRow(!TableRow);
    }
    const [QuantityNum, setQuantityNum] = useState(0);
    const QuantityPlus = () => {
        setQuantityNum(QuantityNum + 1);
    }
    const QuantityMinus = () => {
        if (QuantityNum > 0) {
            setQuantityNum(QuantityNum - 1);
        } else {
            setQuantityNum(0);
        }
    }
    return (
        <>
            {TableRow && (
                <tr className='table_row2'>
                    <td>
                        <div className='img_otr'>
                            <img className='product_img' src={props.ProductImg} alt='img' />
                        </div>
                    </td>
                    <td>
                        <Link className='heading-mb product_heading'>{props.ProductHeading}</Link>
                    </td>
                    <td>
                        <p className='heading-mb product_price'>{props.ProductPrice}</p>
                    </td>
                    <td>
                        <div className='quantity_otr'>
                            <div className='minus_icon_otr icon_otr' onClick={QuantityMinus}>
                                <Minus size={20} />
                            </div>
                            <p className='quantity_num'>
                                {QuantityNum}
                            </p>
                            <div className='plus_icon_otr icon_otr' onClick={QuantityPlus}>
                                <Plus size={20} />
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className='heading-mb product_price'>{props.SubTotal}</p>
                    </td>
                    <td>
                        <div className='close_icon_otr' onClick={RowHide}>
                            <X size={20} />
                        </div>
                    </td>
                </tr>
            )}
        </>
    )
}

export default CartRow