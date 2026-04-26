import React, { useState } from 'react';
import ProductSlider from '../ProductSlider/ProductSlider';
import { Star, Minus, Plus } from 'phosphor-react';
import { Link } from 'react-router-dom';
import ThemeBtn from '../ThemeBtn/ThemeBtn';
import Form from 'react-bootstrap/Form';


function ProductDetailsModal(props) {
    const [QuantityNum, setQuantityNum] = useState(0);
    const QuantityPlus = () => {
        setQuantityNum(QuantityNum + 1);
    }
    const QuantityMinus = () => {
        if (QuantityNum > 0) {
            setQuantityNum(QuantityNum - 1);
        } else {
            setQuantityNum(0);
        }
    }
    const [productsize, setproductsize] = useState(false);
    const sizeactive = () => {
        setproductsize(!productsize);
    }
    return (
        <div className='product_modal_content'>
            <div className='row row_custom'>
                <div className='col-lg-5 col_img_otr'>
                    <div className='col_img_inr'>
                        <ProductSlider
                            SliderImg1={props.DetailSliderImg1}
                            SliderImg2={props.DetailSliderImg2}
                            SliderImg3={props.DetailSliderImg3}
                            SliderImg4={props.DetailSliderImg4}
                        />
                        <div className='color_check_main'>
                            <p className='heading-sb color_heading'>Colors :</p>
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
                        <div className='size_main'>
                            <p className='heading-sb size_heading'>Size :</p>
                            <ul className='size_ul'>
                                <li className='size_li'>
                                    <p className='heading-xsb size_text active_size_text' onClick={sizeactive}>
                                        Extra Small
                                    </p>
                                </li>
                                <li className='size_li'>
                                    <p className='heading-xsb size_text' onClick={sizeactive}>
                                        Small
                                    </p>
                                </li>
                                <li className='size_li'>
                                    <p className='heading-xsb size_text' onClick={sizeactive}>
                                        Medium
                                    </p>
                                </li>
                                <li className='size_li'>
                                    <p className='heading-xsb size_text' onClick={sizeactive}>
                                        Large
                                    </p>
                                </li>
                                <li className='size_li'>
                                    <p className='heading-xsb size_text' onClick={sizeactive}>
                                        Extra Large
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col-lg-7 col_content_otr'>
                    <div className='col_content_inr'>
                        <h3 className='heading-h3 product_detail_heading'>
                            {props.DetailHeading}
                        </h3>
                        <div className='star_review_otr'>
                            <ul className='star_ul'>
                                <li className='star_li'>
                                    <Star size={20} weight="fill" />
                                </li>
                                <li className='star_li'>
                                    <Star size={20} weight="fill" />
                                </li>
                                <li className='star_li'>
                                    <Star size={20} weight="fill" />
                                </li>
                                <li className='star_li'>
                                    <Star size={20} weight="fill" />
                                </li>
                                <li className='star_li'>
                                    <Star size={20} weight="fill" />
                                </li>
                            </ul>
                            <p className='heading-sm review_text'>
                                {props.ReviewsText}
                            </p>
                        </div>
                        <h3 className='heading-h3 product_details_price'>
                            {props.ProductDetailsPrice}
                            <span className='product_details_price_inr'>{props.ProductDetailsPrevPrice}</span>
                        </h3>
                        <p className='heading-s product_desc'>
                            {props.DetailsDesc}
                        </p>
                        <div className='quantity_otr'>
                            <div className='minus_icon_otr icon_otr' onClick={QuantityMinus}>
                                <Minus size={20} />
                            </div>
                            <p className='quantity_num'>
                                {QuantityNum}
                            </p>
                            <div className='plus_icon_otr icon_otr' onClick={QuantityPlus}>
                                <Plus size={20} />
                            </div>
                        </div>
                        <div className='action_otr'>
                            <Link className='btn_otr'>
                                <ThemeBtn
                                    ButtonClass="primary_btn_small"
                                    ButtonText="Add to Cart"
                                />
                            </Link>
                            <div className='btn_otr'>
                                <ThemeBtn
                                    ButtonClass="light_btn_small"
                                    ButtonText="Add to Wish List"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsModal