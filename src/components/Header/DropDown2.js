import React from 'react'
import { Link } from 'react-router-dom'

function DropDown1(props) {
    return (
        <div className='drop_down_otr drop_down2'>
            <div className='drop_down_main'>
                <ul className='drop_down_ul'>
                    <li className='drop_down_li'>
                        <Link className='heading-mm drop_down_link' to={props.DropDownLink1}>
                            {props.DropText1}
                        </Link>
                    </li>
                    <li className='drop_down_li'>
                        <Link className='heading-mm drop_down_link' to={props.DropDownLink2}>
                            {props.DropText2}
                        </Link>
                    </li>
                    <li className='drop_down_li'>
                        <Link className='heading-mm drop_down_link' to={props.DropDownLink3}>
                            {props.DropText3}
                        </Link>
                    </li>
                    <li className='drop_down_li'>
                        <Link className='heading-mm drop_down_link' to={props.DropDownLink4}>
                            {props.DropText4}
                        </Link>
                    </li>
                    <li className='drop_down_li'>
                        <Link className='heading-mm drop_down_link' to={props.DropDownLink5}>
                            {props.DropText5}
                        </Link>
                    </li>
                    <li className='drop_down_li'>
                        <Link className='heading-mm drop_down_link' to={props.DropDownLink6}>
                            {props.DropText6}
                        </Link>
                    </li>
                    <li className='drop_down_li'>
                        <p className='heading-mm drop_down_link'>
                            Other Pages
                        </p>
                        <div className='other_drop_otr'>
                            <ul className='drop_down_ul'>
                                <li className='drop_down_li'>
                                    <Link className='heading-mm drop_down_link' to={props.OtherDropLink1}>
                                        {props.DropText7}
                                    </Link>
                                </li>
                                <li className='drop_down_li'>
                                    <Link className='heading-mm drop_down_link' to={props.OtherDropLink2}>
                                        {props.DropText8}
                                    </Link>
                                </li>
                                <li className='drop_down_li'>
                                    <Link className='heading-mm drop_down_link' to={props.OtherDropLink3}>
                                        {props.DropText9}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DropDown1