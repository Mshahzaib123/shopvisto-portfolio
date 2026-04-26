import React, { useState } from 'react'
import InnerHeader from '../InnerHeader/InnerHeader'
import ThemeBtn from '../ThemeBtn/ThemeBtn';
import ThemeInput from '../ThemeInput/ThemeInput';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import { Star, SquaresFour, ListDashes } from 'phosphor-react';
import ProductData from '../ProductCard/ProductData';
import ThemeSelect from '../ThemeSelect/ThemeSelect';
import Form from 'react-bootstrap/Form';

import './ShopPage.scss';

function ShopPage() {
    const [selected, setselected] = useState('Featured')
    const [ProductStyle, setProductStyle] = useState('col-lg-4');
    const [activegrid, setactivegrid] = useState(true);
    const [activelist, setactivelist] = useState(false);

    const ViewGrid = () => {
        setProductStyle('col-lg-4');
        setactivegrid(!activegrid)
        setactivelist(false)
    }
    const ViewList = () => {
        setProductStyle('col-lg-12 ListView');
        setactivegrid(false)
        setactivelist(!activelist)
    }
    const selectOptions = [
        'Featured',
        'Best Selling',
        'Latest'
    ]
    return (
        <div className='ShopPage_main'>
            <InnerHeader
                Heading="Shop"
            />
            <div className='shop_section_main'>
                <div className='container'>
                    <div className='row row_custom'>
                        <div className='col-lg-3 col-md-4 col-sm-6 col_sidebar_otr'>
                            <div className='col_sidebar_inr'>
                                <div className='box_otr category_otr'>
                                    <p className='heading-mb sidebar_heading'>
                                        Categories
                                    </p>
                                    <ul className='linkk_ul'>
                                        <li className='linkk_li'>
                                            <Link className='heading-sm linkk_text'>
                                                All (7432)
                                            </Link>
                                        </li>
                                        <li className='linkk_li'>
                                            <Link className='heading-sm linkk_text'>
                                                Men (2485)
                                            </Link>
                                        </li>
                                        <li className='linkk_li'>
                                            <Link className='heading-sm linkk_text'>
                                                Women (2735)
                                            </Link>
                                        </li>
                                        <li className='linkk_li'>
                                            <Link className='heading-sm linkk_text'>
                                                T-Shirts (2735)
                                            </Link>
                                        </li>
                                        <li className='linkk_li'>
                                            <Link className='heading-sm linkk_text'>
                                                Shirts (2735)
                                            </Link>
                                        </li>
                                        <li className='linkk_li'>
                                            <Link className='heading-sm linkk_text'>
                                                Women Shirts (2735)
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className='box_otr price_otr'>
                                    <p className='heading-mb sidebar_heading'>
                                        Price
                                    </p>
                                    <div className='minmax_price'>
                                        <div className='min_price_otr'>
                                            <span className='heading-sb dollar_text'>
                                                $
                                            </span>
                                            <ThemeInput
                                                inputClass="White_Input"
                                                inputType="number"
                                                inputName="number"
                                                inputPlaceholder="28"
                                            />
                                        </div>
                                        <span className='heading-h3 minus_text'>-</span>
                                        <div className='max_price_otr'>
                                            <span className='heading-sb dollar_text'>
                                                $
                                            </span>
                                            <ThemeInput
                                                inputClass="White_Input"
                                                inputType="number"
                                                inputName="number"
                                                inputPlaceholder="40"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='box_otr color_otr'>
                                    <p className='heading-mb sidebar_heading'>Colors</p>
                                    <Form className='check_box_main'>
                                        {['radio'].map((type) => (
                                            <div key={`inline-${type}`} className="Check_box">
                                                <Form.Check
                                                    inline
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-1`}
                                                />
                                                <Form.Check
                                                    inline
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-2`}
                                                />
                                                <Form.Check
                                                    inline
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-3`}
                                                />
                                                <Form.Check
                                                    inline
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-4`}
                                                />
                                                <Form.Check
                                                    inline
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-5`}
                                                />
                                            </div>
                                        ))}
                                    </Form>
                                </div>
                                <div className='box_otr size_otr'>
                                    <p className='heading-mb sidebar_heading'>Size</p>
                                    <Form className='check_box_main'>
                                        {['radio'].map((type) => (
                                            <div key={`inline-${type}`} className="Check_box">
                                                <Form.Check
                                                    inline
                                                    label="Extra Small"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-6`}
                                                />
                                                <Form.Check
                                                    inline
                                                    label="Small"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-7`}
                                                />
                                                <Form.Check
                                                    inline
                                                    label="Medium"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-8`}
                                                />
                                                <Form.Check
                                                    inline
                                                    label="Large"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-9`}
                                                />
                                                <Form.Check
                                                    inline
                                                    label="Extra Large"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-10`}
                                                />
                                            </div>
                                        ))}
                                    </Form>
                                </div>
                                <div className='box_otr rating_otr'>
                                    <p className='heading-mb sidebar_heading'>Rating</p>
                                    <Form className='check_box_main'>
                                        {['radio'].map((type) => (
                                            <div key={`inline-${type}`} className="Check_box">
                                                <Form.Check
                                                    inline
                                                    label={<><Star size={20} weight="fill" /> <p className='heading-sb star_text'>5.0</p></>}
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-11`}
                                                />
                                                <Form.Check
                                                    inline
                                                    label={<><Star size={20} weight="fill" /> <p className='heading-sb star_text'>4.0</p></>}
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-12`}
                                                />
                                                <Form.Check
                                                    inline
                                                    label={<><Star size={20} weight="fill" /> <p className='heading-sb star_text'>3.0</p></>}
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-13`}
                                                />
                                                <Form.Check
                                                    inline
                                                    label={<><Star size={20} weight="fill" /> <p className='heading-sb star_text'>2.0</p></>}
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-14`}
                                                />
                                                <Form.Check
                                                    inline
                                                    label={<><Star size={20} weight="fill" /> <p className='heading-sb star_text'>1.0</p></>}
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-15`}
                                                />
                                            </div>
                                        ))}
                                    </Form>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-9 col-md-8 col-sm-6 col_cards_otr'>
                            <div className='filter_grid_list'>
                                <div className='sort_otr'>
                                    <p className='heading-sm sort_text'>
                                        Sort By:
                                    </p>
                                    <ThemeSelect
                                        Selected={selected}
                                        setSelected={setselected}
                                        options={selectOptions}
                                    />
                                </div>
                                <div className='grid_list_otr'>
                                    <div className={activegrid ? 'grid_active grid_otr icon_otr' : 'grid_otr icon_otr'} onClick={ViewGrid}>
                                        <SquaresFour size={24} />
                                    </div>
                                    <div className={activelist ? 'list_active list_otr icon_otr' : 'list_otr icon_otr'} onClick={ViewList}>
                                        <ListDashes size={24} />
                                    </div>
                                </div>
                            </div>
                            <div className='row col_cards_inr'>
                                {ProductData.map((val) => {
                                    return (
                                        <ProductCard
                                            ProductCardClass={`${ProductStyle} col-md-6 col-sm-12`}
                                            key={val.id}
                                            CardImg={val.CardImg}
                                            TagText={val.TagText}
                                            CardHeading={val.CardHeading}
                                            RealPrice={val.RealPrice}
                                            prePrice={val.prePrice}
                                            ProductReview={val.ProductReview}
                                            CardProductDesc={val.CardProductDesc}
                                        />
                                    )
                                })}
                            </div>
                            <div className='action_otr'>
                                <ThemeBtn
                                    ButtonClass="primary_btn"
                                    ButtonText="LOAD MORE"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopPage