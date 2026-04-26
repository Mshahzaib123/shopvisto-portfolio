import React from 'react'
import InnerHeader from '../InnerHeader/InnerHeader'
import Accordion from 'react-bootstrap/Accordion';
import Accordioncard from './Accordioncard';

import './FaqPage.scss';

function FaqPage() {
    return (
        <div className="FaqPage_main">
            <InnerHeader
                Heading="FAQ's"
            />
            <section className='faq_main'>
                <div className='container'>
                    <div className='wrapper'>
                        <h2 className='heading-h2 wrapper_heading'>
                            Frequently Asked Questions.
                        </h2>
                        <p className='heading-sm wrapper_desc'>
                            Here are the most asked questions and their answers. Most of the queries <br />
                            are solved by reading FAQs
                        </p>
                    </div>
                    <div className='row row_custom'>
                        <div className='col-lg-8 col_accordion_otr'>
                            <div className='col_accordion_inr'>
                                <Accordion defaultActiveKey="0">
                                    <Accordioncard
                                        KeyNum={0}
                                        Heading="What is Lorem Ipsum?"
                                        Desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                                    />
                                    <Accordioncard
                                        KeyNum={1}
                                        Heading="What is Lorem Ipsum?"
                                        Desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                                    />
                                    <Accordioncard
                                        KeyNum={2}
                                        Heading="What is Lorem Ipsum?"
                                        Desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                                    />
                                    <Accordioncard
                                        KeyNum={3}
                                        Heading="What is Lorem Ipsum?"
                                        Desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                                    />
                                    <Accordioncard
                                        KeyNum={4}
                                        Heading="What is Lorem Ipsum?"
                                        Desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                                    />
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FaqPage