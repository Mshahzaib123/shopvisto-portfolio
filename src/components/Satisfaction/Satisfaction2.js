import React from 'react'
import { Truck, Clock, Money } from 'phosphor-react';

import './Satisfaction.scss';

import ShopText from '../../img/shop_text.svg';

function Satisfaction() {
    return (
        <div className='Satisfaction_mian Satisfaction_mian2'>
            <img className='shop_text' src={ShopText} alt='img' />
            <div className='container'>
                <div className='wrapper'>
                    <div className='Satisfaction_otr'>
                        <div className='icon_otr'>
                            <Truck size={44} />
                            <Truck size={44} />
                            <Truck size={44} />
                        </div>
                        <p className='heading-mb Satisfaction_heading'>
                            Free Home Delivery
                        </p>
                    </div>
                    <div className='Satisfaction_otr'>
                        <div className='icon_otr'>
                            <Money size={44} />
                            <Money size={44} />
                            <Money size={44} />
                        </div>
                        <p className='heading-mb Satisfaction_heading'>
                            Money Back Guarantee
                        </p>
                    </div>
                    <div className='Satisfaction_otr'>
                        <div className='icon_otr'>
                            <Clock size={44} />
                            <Clock size={44} />
                            <Clock size={44} />
                        </div>
                        <p className='heading-mb Satisfaction_heading'>
                            Availability 24•7
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Satisfaction