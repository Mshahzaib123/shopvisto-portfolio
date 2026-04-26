import React from 'react'
import ThemeInput from '../ThemeInput/ThemeInput'
import CheckComponent from '../CheckComponent/CheckComponent'
import { Link } from 'react-router-dom'
import ThemeBtn from '../ThemeBtn/ThemeBtn'
import { GoogleLogo, FacebookLogo } from 'phosphor-react'
import InnerHeader from '../InnerHeader/InnerHeader'

import './SignUp.scss';

function SignUp() {
    return (
        <div className='signup_page'>
            <InnerHeader
                Heading="Sign Up"
            />
            <section className='signup_section'>
                <div className='container'>
                    <div className='wrapper'>
                        <h2 className='heading-h2 form_heading'>
                            Sign Up to Shop Visto
                        </h2>
                        <p className='heading-mm form_desc'>
                            Please signup to your Shop Visto account if you have one
                        </p>
                    </div>
                    <div className='row row_custom'>
                        <div className='col-lg-7 col-md-8 col_form_otr'>
                            <form className='col_form_inr'>
                                <div className='other_signup'>
                                    <button className='heading-sb signup_button'>
                                        <GoogleLogo size={24} />
                                        <span className='button_text'>
                                            signup With Google
                                        </span>
                                    </button>
                                    <button className='heading-sb signup_button'>
                                        <FacebookLogo size={24} />
                                        <span className='button_text'>
                                            signup With Facebook
                                        </span>
                                    </button>
                                </div>
                                <div className='inputs_main'>
                                    <ThemeInput
                                        inputClass="White_Input input_form"
                                        inputType="text"
                                        inputName="text"
                                        inputPlaceholder="First Name"
                                    />
                                    <ThemeInput
                                        inputClass="White_Input input_form"
                                        inputType="text"
                                        inputName="text"
                                        inputPlaceholder="Last Name"
                                    />
                                </div>
                                <ThemeInput
                                    inputClass="White_Input input_form"
                                    inputType="text"
                                    inputName="text"
                                    inputPlaceholder="User Name"
                                />
                                <ThemeInput
                                    inputClass="White_Input input_form"
                                    inputType="email"
                                    inputName="email"
                                    inputPlaceholder="Email Address"
                                />
                                <ThemeInput
                                    inputClass="White_Input input_form"
                                    inputType="password"
                                    inputName="password"
                                    inputPlaceholder="Password"
                                />
                                <div className='check_Linkk'>
                                    <CheckComponent
                                        CheckText='I aceept the'
                                    />
                                    <p className='check_linkk'> <Link>Terms of Service</Link> & <Link>Privacy Policy</Link></p>
                                </div>
                                <ThemeBtn
                                    ButtonClass="primary_btn form_btn"
                                    ButtonText="Sign Up"
                                />
                                <p className='heading-sm signin_text'>
                                    Not registered yet? <Link className='text_linkk'>Create an account</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SignUp