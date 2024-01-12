import React from 'react'
// import "../styles/style.css"
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram, faFacebook, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


function Footer() {
    return (
        <>
            <footer className='container-fluid'>
                <div className='upper__div container-fluid'>
                    <div className='row'>
                        <div className='col-sm-2'>
                            <ul className="footer__nav--links">
                                <li>
                                    <strong>Study
                                        Abroad</strong>
                                </li>
                                <li>
                                    <Link href="/about-jupiter">About
                                        Jupiter</Link>
                                </li>
                                <li>
                                    <Link href="/guide-to-study-abroad"
                                        title="Guide To Study Abroad">Guide To Study Abroad</Link>
                                </li>

                                <li>
                                    <Link href="/study-abroad-benefits"
                                        title="Study Abroad Benefits">Study Abroad Benefits</Link>
                                </li>

                            </ul>
                        </div>
                        <div className='col-sm-2'>
                            <ul className="footer__nav--links">
                                <li>
                                    <strong>What We Do</strong>
                                </li>
                                <li>
                                    <Link href="/why-choose-jupiter" title="Why Choose Jupiter">Why
                                        Choose Jupiter</Link>
                                </li>
                                <li >
                                    <Link href="/study-abroad-counselling"
                                        title="Study Abroad Counselling">Study Abroad Counselling</Link>
                                </li>
                                <li>
                                    <Link href="/course-advice" title="Course Advice">Course
                                        Advice</Link>
                                </li>

                            </ul>

                        </div>
                        <div className='col-sm-2'>
                            <ul className="footer__nav--links">
                                <li>
                                    <strong>Destinations</strong>
                                </li>
                                <li>
                                    <Link href="/study-in-australia" title="Study In Australia">Study
                                        In Australia</Link>
                                </li>
                                <li>
                                    <Link href="/study-in-uk" title="Study In UK">Study In UK</Link>
                                </li>
                                <li>
                                    <Link href="/study-in-canada" title="Study In Canada">Study In
                                        Canada</Link>
                                </li>
                            </ul>
                            <ul className="footer__nav--links">
                                <li>
                                    <Link href="/tourist"
                                    ><strong>Tourist</strong></Link>
                                </li>
                                <li>
                                    <Link href="/tourist-in-australia" title="Study In Australia">Australia Visa</Link>
                                </li>
                                <li>
                                    <Link href="/tourist-in-uk" title="Study In UK">Uk Visa</Link>
                                </li>
                                <li>
                                    <Link href="/tourist-in-canada" title="Study In Canada">Canada Visa</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='col-sm-2'>
                            <ul className="footer__nav--links">
                                <li>
                                    <strong>Services</strong>
                                </li>
                                <li>
                                    <Link href="/student-ticketing-service"
                                        title="Student Ticketing Service">Student Ticketing Service</Link>
                                </li>
                                <li>
                                    <Link href="/admission" title="Admission">Admission</Link>
                                </li>
                                <li>
                                    <Link href="/visa-assisstance" title="Visa Assisstance">Visa
                                        Assisstance</Link>
                                </li>
                                <li>
                                    <Link href="/career-counselling"
                                        title="Career Counselling" >Career Counselling</Link>
                                </li>
                                <li>
                                    <Link href="/sop-creation" title="SOP Creation">SOP
                                        Creation</Link>
                                </li>

                            </ul>
                        </div>
                        <div className='col-sm-4'>
                            <p className='footer__address__heading'><strong>Office Address</strong></p>
                            <p className='footer__address'>S.C.O 64–65 First Floor, Sector 17A
                                Sector 17, Chandigarh,160017</p>
                        </div>
                    </div>
                </div>
                <div className='bottom__div'>
                </div>
            </footer>
        </>
    )
}

export default Footer
