import React from 'react'
import { Link } from 'react-router-dom'

import './ClientSection.scss';

import LogoImg1 from '../../img/client-logo1.png';
import LogoImg2 from '../../img/client-logo2.png';
import LogoImg3 from '../../img/client-logo3.png';
import LogoImg4 from '../../img/client-logo4.png';
import LogoImg5 from '../../img/client-logo5.png';

function ClientSection() {
    return (
        // <section className='client_section'>
        //     <div className='container'>
        //         <div className='wrapper'>
        //             <Link className='logo_otr'>
        //                 <img className='client_logo' src={LogoImg1} alt='logo' />
        //             </Link>
        //             <Link className='logo_otr'>
        //                 <img className='client_logo' src={LogoImg2} alt='logo' />
        //             </Link>
        //             <Link className='logo_otr'>
        //                 <img className='client_logo' src={LogoImg3} alt='logo' />
        //             </Link>
        //             <Link className='logo_otr'>
        //                 <img className='client_logo' src={LogoImg4} alt='logo' />
        //             </Link>
        //             <Link className='logo_otr'>
        //                 <img className='client_logo' src={LogoImg5} alt='logo' />
        //             </Link>
        //         </div>
        //     </div>
        // </section>
        <section className='client_section client_section2'>
            <div className='container'>
                <div className='row row_custom'>
                    <div className='col-lg-3 col-md-4 col-sm-6 col_logo_otr'>
                        <Link className='logo_otr'>
                            <img className='client_logo' src={LogoImg1} alt='logo' />
                        </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col_logo_otr'>
                        <Link className='logo_otr'>
                            <img className='client_logo' src={LogoImg2} alt='logo' />
                        </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col_logo_otr'>
                        <Link className='logo_otr'>
                            <img className='client_logo' src={LogoImg3} alt='logo' />
                        </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col_logo_otr'>
                        <Link className='logo_otr'>
                            <img className='client_logo' src={LogoImg4} alt='logo' />
                        </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col_logo_otr'>
                        <Link className='logo_otr'>
                            <img className='client_logo' src={LogoImg5} alt='logo' />
                        </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col_logo_otr'>
                        <Link className='logo_otr'>
                            <img className='client_logo' src={LogoImg4} alt='logo' />
                        </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col_logo_otr'>
                        <Link className='logo_otr'>
                            <img className='client_logo' src={LogoImg3} alt='logo' />
                        </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col_logo_otr'>
                        <Link className='logo_otr'>
                            <img className='client_logo' src={LogoImg2} alt='logo' />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClientSection
