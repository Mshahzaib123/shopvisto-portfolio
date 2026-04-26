import React from 'react'
import InnerHeader from '../InnerHeader/InnerHeader';
import ContactSection from './ContactSection';

import './ContactPage.scss';

function ContactPage() {
    return (
        <div className='contactpage_main'>
            <InnerHeader
                Heading="Contact"
            />
            <ContactSection />
        </div>
    )
}

export default ContactPage