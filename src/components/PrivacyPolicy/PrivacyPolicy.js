import React from 'react'
import InnerHeader from '../InnerHeader/InnerHeader'

import './PrivacyPolicy.scss';

function PrivacyPolicy() {
    return (
        <div className='PrivacyPolicy_main'>
            <InnerHeader
                Heading="Privacy Policy"
            />
            <div className='PrivacyPolicy_section'>
                <div className='container'>
                    <div className='wrapper'>
                        <h2 className='heading-h2 main_heading'>
                            SHOP VISTO COMPANY
                        </h2>
                        <p className='heading-m desc desc1'>
                            At Flexo, accessible from flexo.vistothemes.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Flexo and how we use it.
                        </p>
                        <p className='heading-m desc desc2'>
                            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
                        </p>
                        <p className='heading-m desc desc3'>
                            This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Flexo. This policy is not applicable to any information collected offline or via channels other than this website. Our Privacy Policy was created with the help of the Privacy Policy Generator and the Free Privacy Policy Generator.
                        </p>
                        <h3 className='heading-h3 heading'>
                            Cookies
                        </h3>
                        <p className='heading-m desc desc4'>
                            We employ the use of cookies. By accessing Flexo, you agreed to use cookies in agreement with the Flexo's Privacy Policy.
                        </p>
                        <p className='heading-m desc desc5'>
                            Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
                        </p>
                        <h3 className='heading-h3 heading'>
                            License
                        </h3>
                        <p className='heading-m desc desc6'>
                            Unless otherwise stated, Flexo and/or its licensors own the intellectual property rights for all material on Flexo. All intellectual property rights are reserved. You may access this from Flexo for your own personal use subjected to restrictions set in these terms and conditions.
                        </p>
                        <h3 className='heading-h3 heading'>
                            iFrames
                        </h3>
                        <p className='heading-m desc desc7'>
                            Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
                        </p>
                        <h3 className='heading-h3 heading'>
                            Disclaimer
                        </h3>
                        <p className='heading-m desc desc8'>
                            To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy