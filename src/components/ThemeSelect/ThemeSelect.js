import React, { useState } from 'react'
import { CaretDown, CaretRight } from 'phosphor-react';
import './ThemeSelect.scss';

function ThemeSelect({ Selected, setSelected, options }) {
    const [IsActive, setIsActive] = useState(false);
    const DropDownClick = () => {
        setIsActive(!IsActive);
    }
    return (
        <div className='select_main'>
            <div className="dd_header" onClick={DropDownClick}>
                <p className="dd_header_title">
                    {Selected}
                </p>
                <CaretDown size={20} />
            </div>
            {IsActive && (
                <div className="dd_list_otr">
                    <ul className='drop_ul'>
                        {options.map((option) => (
                            <li onClick={(e) => {
                                setSelected(option)
                                setIsActive(false)
                            }} className="drop_li">
                                <p className='item_text'>{option}</p>
                                <CaretRight size={20} />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default ThemeSelect
