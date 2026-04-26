import React from 'react'
import ThemeInput from '../ThemeInput/ThemeInput'
import CheckComponent from '../CheckComponent/CheckComponent'
import { Link } from 'react-router-dom'
import ThemeBtn from '../ThemeBtn/ThemeBtn'
import { GoogleLogo, FacebookLogo } from 'phosphor-react'
import InnerHeader from '../InnerHeader/InnerHeader'

import './Login.scss';

function Login() {
    return (
        <div className='login_page'>
            <InnerHeader
                Heading="Login"
            />
            <section className='login_section'>
                <div className='container'>
                    <div className='wrapper'>
                        <h2 className='heading-h2 form_heading'>
                            Login to Shop Visto
                        </h2>
                        <p className='heading-mm form_desc'>
                            Please login to your Shop Visto account if you have one
                        </p>
                    </div>
                    <div className='row row_custom'>
                        <div className='col-lg-7 col-md-8 col_form_otr'>
                            <form className='col_form_inr'>
                                <div className='other_login'>
                                    <button className='heading-sb login_button'>
                                        <GoogleLogo size={24} />
                                        <span className='button_text'>
                                            Login With Google
                                        </span>
                                    </button>
                                    <button className='heading-sb login_button'>
                                        <FacebookLogo size={24} />
                                        <span className='button_text'>
                                            Login With Facebook
                                        </span>
                                    </button>
                                </div>
                                <ThemeInput
                                    inputClass="White_Input input_form"
                                    inputType="email"
                                    inputName="email"
                                    inputPlaceholder="Username or Email Address"
                                />
                                <ThemeInput
                                    inputClass="White_Input input_form"
                                    inputType="password"
                                    inputName="password"
                                    inputPlaceholder="Password"
                                />
                                <div className='forget_otr'>
                                    <CheckComponent
                                        CheckText="Remember Me"
                                    />
                                    <Link className='heading-sm forget_text'>
                                        Forgot Password?
                                    </Link>
                                </div>
                                <ThemeBtn
                                    ButtonClass="primary_btn form_btn"
                                    ButtonText="Login"
                                />
                                <p className='heading-sm signin_text'>
                                    Don’t have an account? <Link className='text_linkk'>Sign Up</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login