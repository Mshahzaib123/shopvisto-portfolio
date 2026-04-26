import React, { useState } from 'react'
import './FilterPage.scss'

function CheckCustom(props) {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <label className="check_otr heading-s-semi">
            <input
                type="checkbox"
                onChange={() => {
                    setIsChecked(!isChecked);
                }}
            />
            <span
                className={`checkbox ${isChecked ? "checkbox_active" : ""}`}
                aria-hidden="true"
            />
            {props.checkText}
        </label>
    )
}

export default CheckCustom