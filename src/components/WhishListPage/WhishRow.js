import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, X } from 'phosphor-react'
import ThemeBtn from '../ThemeBtn/ThemeBtn'

import './WhishListPage.scss';

function WhishRow(props) {
    const [TableRow, setTableRow] = useState(true);
    const RowHide = () => {
        setTableRow(!TableRow);
    }
    return (
        <>
            {TableRow && (
                <tr className='table_row'>
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
                        <div className='icon_text_otr'>
                            <Star size={20} weight="fill" />
                            <p className='heading-mb product_stars'>{props.ProductRating}</p>
                        </div>
                    </td>
                    <td>
                        <div className='action_otr'>
                            <Link className='btn_otr'>
                                <ThemeBtn
                                    ButtonClass="primary_btn_small"
                                    ButtonText="Add To Cart"
                                />
                            </Link>
                            <div className='close_icon_otr' onClick={RowHide}>
                                <X size={20} />
                            </div>
                        </div>
                    </td>
                </tr>
            )}
        </>
    )
}

export default WhishRow