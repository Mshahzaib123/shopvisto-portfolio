import React, { useState } from 'react'
import Banner from '../Banner/Banner';
import CategorySection from '../CategorySection/CategorySection';
import ClientSection from '../ClientSection/ClientSection';
import Cta from '../Cta/Cta';
import FeatureSection from '../FeatureSection/FeatureSection';
import HeroSlider from '../HeroSlider/HeroSlider'
import LatestProductSection from '../LatestProductSection/LatestProductSection';
import ModalComponent from '../ModalComponent/ModalComponent';
import WeekDealSection from '../WeekDealSection/WeekDealSection';
import ThemeInput from '../ThemeInput/ThemeInput';
import ThemeBtn from '../ThemeBtn/ThemeBtn';
import { Link } from 'react-router-dom';
import { FacebookLogo, TwitterLogo, InstagramLogo, LinkedinLogo, PinterestLogo, WhatsappLogo } from 'phosphor-react';

import './LandingPage.scss';

function LandingPage() {
    const [modalload, setmodalload] = useState(true)
    const modalClose = () => {
        setmodalload(false);
    }
    return (
        <div className='landing_page'>
            <HeroSlider />
            <ClientSection />
            <CategorySection />
            <FeatureSection />
            <WeekDealSection />
            <Banner />
            <LatestProductSection />
            <Cta />
            <div className="load_modal">
                {modalload && (
                    <ModalComponent
                        modalContent={<>
                            <div className='content_modal'>
                                <h2 className='heading-h2 modal_heading'>
                                    GET 10% OFF
                                </h2>
                                <p className='heading-m desc'>
                                    Subscribe now and receive a discount on your first order
                                </p>
                                <form className='form_otr'>
                                    <ThemeInput
                                        inputClass="White_Input"
                                        inputType="email"
                                        inputName="email"
                                        inputPlaceholder="Enter Your Email Address"
                                    />
                                    <ThemeBtn
                                        ButtonClass="primary_btn"
                                        ButtonText="Subscribe"
                                    />
                                </form>
                                <p className='heading-m desc2'>
                                    Signup for exclusive updates
                                </p>
                                <ul className='social_ul'>
                                    <li className='social_li'>
                                        <Link className='social_linkk'>
                                            <FacebookLogo size={24} />
                                        </Link>
                                    </li>
                                    <li className='social_li'>
                                        <Link className='social_linkk'>
                                            <TwitterLogo size={24} />
                                        </Link>
                                    </li>
                                    <li className='social_li'>
                                        <Link className='social_linkk'>
                                            <InstagramLogo size={24} />
                                        </Link>
                                    </li>
                                    <li className='social_li'>
                                        <Link className='social_linkk'>
                                            <LinkedinLogo size={24} />
                                        </Link>
                                    </li>
                                    <li className='social_li'>
                                        <Link className='social_linkk'>
                                            <PinterestLogo size={24} />
                                        </Link>
                                    </li>
                                    <li className='social_li'>
                                        <Link className='social_linkk'>
                                            <WhatsappLogo size={24} />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </>}
                        ModalClose={modalClose}
                    />
                )}
            </div>
        </div>
    )
}

export default LandingPage
