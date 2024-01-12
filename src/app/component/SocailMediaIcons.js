import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

function SocailMediaIcons() {
    return (
        <div className="" style={{display: 'flex', flexDirection: 'column'}}>
            <h3 style={{ textAlign: "center" }}><strong>Keep posted, follow us on</strong></h3>
            <div className='mb-4' style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', margin: '10px 0'}}>
                <Link href="https://www.facebook.com/Jupiterconsultants.1"
                    target="_blank"><FontAwesomeIcon icon={faFacebook} size='2xl' /></Link>
                <Link
                    href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F99927438%2Fadmin%2Ffeed%2Fposts%2F" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} size='2xl' /></Link>
                <Link
                    href="https://www.instagram.com/jupiter_study_abroad/" target="_blank"><FontAwesomeIcon icon={faInstagram} size='2xl' /></Link>
                <Link
                    href="https://www.youtube.com/channel/UCFE_sQRiw0-2ifc9oaLfwEQ"
                    target="_blank"><FontAwesomeIcon icon={faYoutube} size='2xl' /></Link>
            </div>
        </div>
    )
}

export default SocailMediaIcons
