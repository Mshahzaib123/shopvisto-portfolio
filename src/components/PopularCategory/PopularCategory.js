import React from 'react'
import PopularCard from './PopularCard';

import './PopularCategory.scss';

import TextImg from '../../img/popular-text.svg';
import CardImg1 from '../../img/card-img1.png';
import CardImg2 from '../../img/card-img2.png';
import CardImg3 from '../../img/card-img3.png';
import CardImg4 from '../../img/card-img4.png';
import CardImg5 from '../../img/card-img5.png';
import CardImg6 from '../../img/card-img7.png';

function PopularCategory() {
    return (
        <section className='propularCategory_section'>
            <div className='container'>
                <div className='wrapper'>
                    <h2 className='heading-h2 wrapper_heading'>
                        Popular Categories
                    </h2>
                    <span className='line'></span>
                    <img className='text_img' src={TextImg} alt='img' />
                </div>
                <div className='row row_custom'>
                    <PopularCard
                        CardImg={CardImg1}
                        BgText="headphone"
                    />
                    <PopularCard
                        CardImg={CardImg2}
                        BgText="shoes"
                    />
                    <PopularCard
                        CardImg={CardImg3}
                        BgText="SHIRTS"
                    />
                    <PopularCard
                        CardImg={CardImg4}
                        BgText="PANTS"
                    />
                    <PopularCard
                        CardImg={CardImg5}
                        BgText="mobile"
                    />
                    <PopularCard
                        CardImg={CardImg6}
                        BgText="jacket"
                    />
                </div>
            </div>
        </section>
    )
}

export default PopularCategory