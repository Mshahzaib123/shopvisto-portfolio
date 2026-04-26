import React from 'react'
import './ThemeBtn.scss';

function ThemeBtn(props) {
    return (
        <button className={props.ButtonClass}>{props.ButtonText}</button>
    )
}

export default ThemeBtn