import React from 'react'
import Banner2 from '../Banner/Banner2'
import Banner3 from '../Banner/Banner3'
import CategorySection2 from '../CategorySection/CategorySection2'
import ClientSection from '../ClientSection/ClientSection'
import FeatureSection2 from '../FeatureSection/FeatureSection2'
import HeroSlider2 from '../HeroSlider/HeroSlider2'
import LatestProductSection2 from '../LatestProductSection/LatestProductSection2'
import PopularCategory from '../PopularCategory/PopularCategory'

import './LandingPage2.scss';

function LandingPage2() {
    return (
        <div className='landing_page2'>
            <HeroSlider2 />
            <CategorySection2 />
            <FeatureSection2 />
            <Banner2 />
            <LatestProductSection2 />
            <Banner3 />
            <PopularCategory />
            <ClientSection />
        </div>
    )
}

export default LandingPage2