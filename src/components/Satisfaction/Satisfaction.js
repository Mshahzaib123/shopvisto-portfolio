import React from 'react'
import { Truck, Clock, Money } from 'phosphor-react';

import './Satisfaction.scss';

function Satisfaction() {
    return (
        <div className='Satisfaction_mian'>
            <div className='container'>
                <div className='wrapper'>
                    <div className='Satisfaction_otr'>
                        <Truck size={44} />
                        <p className='heading-mb Satisfaction_heading'>
                            Free Home Delivery
                        </p>
                    </div>
                    <div className='Satisfaction_otr'>
                        <Money size={44} />
                        <p className='heading-mb Satisfaction_heading'>
                            Money Back Guarantee
                        </p>
                    </div>
                    <div className='Satisfaction_otr'>
                        <Clock size={44} />
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