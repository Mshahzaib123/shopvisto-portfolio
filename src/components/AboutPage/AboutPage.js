import React from 'react'
import InnerHeader from '../InnerHeader/InnerHeader'
import Satisfaction from '../Satisfaction/Satisfaction'
import AboutSection from './AboutSection'

import AboutImg from '../../img/about-img1.jpg';
import ReviewSection from '../ReviewSection/ReviewSection';

function AboutPage() {
    return (
        <div className='AboutPage_main'>
            <InnerHeader
                Heading="About"
            />
            <AboutSection
                AboutHeading="About Shop Visto"
                AboutDesc1="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
                AboutDesc2="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                AboutImg={AboutImg}
            />
            <div className='customer_message_main'>
                <div className='container'>
                    <div className='wrapper'>
                        <div className='heading_otr'>
                            <h3 className='heading-h3 message_heading'>
                                Message to the Customers
                            </h3>
                        </div>
                        <div className='message_otr'>
                            <p className='heading-mm desc'>
                                If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Satisfaction />
            <ReviewSection />
        </div>
    )
}

export default AboutPage