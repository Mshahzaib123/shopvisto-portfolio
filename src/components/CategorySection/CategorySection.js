import React from 'react'
import CategoryCard from './CategoryCard'

import CardImg1 from '../../img/category-img1.png';
import CardImg2 from '../../img/category-img2.png';
import CardImg3 from '../../img/category-img3.png';
import CardImg4 from '../../img/category-img4.png';

function CategorySection() {
    return (
        <section className='category_section'>
            <div className='container'>
                <div className='row row_custom'>
                    <CategoryCard
                        TagText="Fashion"
                        Heading="New Arrival of Men’s Jacket in Dark Color"
                        CardImg={CardImg1}
                    />
                    <CategoryCard
                        TagText="Fashion"
                        Heading="Royal Watch in Leather Strips and Golden"
                        CardImg={CardImg2}
                    />
                    <CategoryCard
                        TagText="Fashion"
                        Heading="Old Style Furniture Collection Updated"
                        CardImg={CardImg3}
                    />
                    <CategoryCard
                        TagText="Fashion"
                        Heading="Cool Controllers for Gaming Stations"
                        CardImg={CardImg4}
                    />
                </div>
            </div>
        </section>
    )
}

export default CategorySection