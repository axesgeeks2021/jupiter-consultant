"use client"
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faBars, faHome, faLocationDot, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import PopupForm from './PopupForm'

const headerList = [
    {
        menu: 'Study Abroad',
        link: null,
        subMenu: [
            {
                option: 'About Jupiter',
                link: '/about-jupiter',
                img: '/IMG_30020-min1.webp'
            },
            {
                option: 'Guide To Studying Abroad',
                link: '/guide-to-studying-abroad',
                img: '/guidetostudying1.webp'
            },
            {
                option: 'Study Abroad Benefits',
                link: '/study-abroad-benefits',
                img: '/studyabroadbenifit1.webp'
            },
        ]
    },
    {
        menu: 'What we do?',
        link: null,
        subMenu: [
            {
                option: 'Why Choose Jupiter?',
                link: '/why-choose-jupiter',
                img: '/whyjupiter.webp'
            },
            {
                option: 'Study Abroad Counselling',
                link: '/study-abroad-counselling',
                img: '/studyabroadcounselling.webp'
            },
            {
                option: 'Course Advice',
                link: '/course-advice',
                img: '/courseadvice.webp'
            },
        ]
    },
    {
        menu: 'Destinations',
        link: null,
        subMenu: [
            {
                option: 'Study in Australia',
                link: '/study-in-australia',
                img: '/studyinaustraliamenu(1).webp'
            },
            {
                option: 'Study in Uk',
                link: '/study-in-uk',
                img: '/studyinuk.webp'
            },
            {
                option: 'Study in Canada',
                link: '/study-in-canada',
                img: '/studyincanadamenu(1).webp'
            },
        ]
    },
    {
        menu: 'Services',
        link: null,
        subMenu: [
            {
                option: 'Student Ticketing Service',
                link: '/student-ticketing-service',
                img: '/student-ticketing-services-1.webp'
            },
            {
                option: 'Admission',
                link: '/admission',
                img: '/ADMISSION.webp'
            },
            {
                option: 'Visa Assisstance',
                link: '/visa-assisstance',
                img: '/visa-assistance-1.webp'
            },
            {
                option: 'Career Counselling',
                link: '/career-counselling',
                img: '/carrer-Counseling-1.webp'
            },
            {
                option: 'SOP Creation',
                link: 'sop-creation',
                img: '/sop-creation-1.webp'
            }
        ]
    },
    {
        menu: 'Tourist',
        link: null,
        subMenu: [
            {
                option: 'Australia Visa',
                link: '/tourist-in-australia',
                img: '/australiavisa(2).webp'
            },
            {
                option: 'Uk Visa',
                link: '/tourist-in-uk',
                img: '/ukvisa(2).webp'
            },
            {
                option: 'Canada Visa',
                link: '/tourist-in-canada',
                img: '/canadavisa1.webp'
            },
        ]
    },
    {
        menu: 'Blogs',
        link: '/blogs'
    },
    {
        menu: 'Testimonials',
        link: '/testimonials'
    },
]


function Header() {

    const [currentIndex, setCurrentIndex] = useState(null)
    const [showPopUpForm, setShowPopUpForm] = useState(false)
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const handleShowSubMenu = id => {
        setCurrentIndex(id)
    }

    return (
        <header>
            <div className='upper__header'>
                <div className='website__logo'>
                    <Link aria-label="logo" href="/" ><Image
                        src="/logoc.png" width={1000} height={100} /></Link>
                </div>
                <div className='address'>
                    <p style={{ color: '#909090', fontSize: '17px' }}>S.C.O 64–65 First Floor, Sector 17A Sector 17, Chandigarh,160017</p>
                    <div className='header__address__anchor' >
                        <a href='tel:+919464280970' style={{ color: '#909090', textDecoration: 'none', fontSize: '16px' }}>+91 9464280970</a>
                        <a href='tel:+919143333305' style={{ color: '#909090', textDecoration: 'none', fontSize: '16px' }}>+91 9143333305</a>
                        <a href='tel:0172-4636809' style={{ color: '#909090', textDecoration: 'none', fontSize: '16px' }}>0172-4636809</a>
                    </div>
                </div>
                <div className='header__button'>
                    <Link href="/contact-us" className='contact__link'>
                        <FontAwesomeIcon icon={faLocationDot} color='#000' />&nbsp;
                        <p>Contact Us</p>
                    </Link>
                    <button className='main__button' onClick={() => setShowPopUpForm(true)}>
                        <FontAwesomeIcon icon={faUser} color='#fff' style={{ margin: '0 4px' }} />
                        <p>Get Free Counselling</p>
                    </button>
                </div>
            </div>
            <div className='header__address__anchor mobile__display__anchor' >
                <Link href='tel:+919464280970' style={{ color: '#909090', textDecoration: 'none', fontSize: '16px' }}>+91 9464280970</Link>
                <Link href='tel:+919143333305' style={{ color: '#909090', textDecoration: 'none', fontSize: '16px' }}>+91 9143333305</Link>
                <Link href='tel:0172-4636809' style={{ color: '#909090', textDecoration: 'none', fontSize: '16px' }}>0172-4636809</Link>
            </div>
            <div className='bottom__navbar'>
                <div className='navbar__menu'>
                    <ul>
                        <li className='hamburger'>
                            <FontAwesomeIcon icon={faBars} color='#fff' size='2xl' onClick={() => setShowMobileMenu(true)} />
                        </li>
                        <Link href="/" style={{ color: "#fff", }} className='home__icon'>
                            <span className="">
                                <FontAwesomeIcon icon={faHome} />
                            </span>
                        </Link>
                        {
                            headerList.map((ele, idx) => {
                                return (
                                    <li key={idx} onMouseLeave={() => setCurrentIndex(null)} onMouseEnter={() => handleShowSubMenu(idx)} style={{ margin: 'auto', color: '#fff  ', fontSize: '14px', padding: '17px 0' }}
                                        className="">
                                        <Link href={ele?.link === null ? "" : ele?.link} style={{ color: "#fff", }}>
                                            <span className="">
                                                {ele?.menu}
                                            </span>
                                        </Link>
                                        {
                                            ele?.link === null ? <div
                                                className="submenu" style={{ display: currentIndex === idx ? 'flex' : 'none', flexWrap: 'wrap', width: ele?.menu === 'Services' ? "97%" : 'auto' }}>
                                                <div className="submenu__box" >
                                                    <ul className="" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '20px' }}>
                                                        {
                                                            ele?.subMenu?.map((ele, idx) => {
                                                                return (
                                                                    <Link key={idx}
                                                                        className="" href={ele?.link} onClick={() => setCurrentIndex(null)}>
                                                                        <li className="submenu__list">
                                                                            <div className='submenu__image__box'>
                                                                                <Image
                                                                                    src={ele?.img}
                                                                                    width={1000}
                                                                                    height={100} />
                                                                            </div>
                                                                            {ele?.option}</li>
                                                                    </Link>
                                                                )
                                                            })
                                                        }

                                                    </ul>
                                                </div>

                                            </div> : null
                                        }

                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
                <div className='social__media__anchor'>
                    <Link href="https://www.instagram.com/jupiter_study_abroad/" socialmediaicon=""
                        title="Insta icon" target="_blank"><FontAwesomeIcon icon={faInstagram} color='#000' size='xl' /></Link>
                    <Link href="https://www.facebook.com/Jupiterconsultants.1" socialmediaicon=""
                        title="Facebook icon" target="_blank"><FontAwesomeIcon icon={faFacebook} color='#000' size='xl' /></Link>
                    <Link href="https://www.youtube.com/channel/UCFE_sQRiw0-2ifc9oaLfwEQ"
                        socialmediaicon="" title="youtube icon" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} color='#000' size='xl' /></Link>
                </div>
            </div>
            <div className="mobile__menu"
                style={{ width: "250px", height: "100vh", backgroundColor: "#fff", position: "fixed", top: 0, left: 0, zIndex: 9999, transform: showMobileMenu ? "translateX(0px)" : "translateX(-400px)", transition: "0.2s" }}>
                <div className="mobile__menu__header"
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div className="mobile__menu__img" style={{ width: "70%", margin: "20px 10px" }}>
                        <Image src="/logoc.png" alt="mobile menu website logo"
                            width={1000} height={100} style={{ width: '100%', height: '100%' }} />
                    </div>
                    <div className="close__menu__button"
                        style={{ width: "40%", display: "flex", justifyContent: "flex-end", padding: "0 10px" }}>
                        <FontAwesomeIcon icon={faPlus} style={{ transform: "rotate(45deg)" }} size='2xl' onClick={() => setShowMobileMenu(false)} />
                    </div>
                </div>
                <div className="sec-center">
                    <Link onClick={() => setShowMobileMenu(false)} href="/" style={{ padding: "0", margin: "0", paddingLeft: "16px", color: "#102770", display: 'flex', justifyContent: "center", alignItems: 'center', letterSpacing: '1px' }}><label
                        className="for-dropdown mobile__menu__blog" htmlFor="blogs">Home</label></Link>
                </div>
                <div className="sec-center">
                    <input className="dropdown" type="checkbox" id="dropdown" name="dropdown" />
                    <label className="for-dropdown" htmlFor='dropdown'>Study Abroad</label>
                    <div className="section-dropdown">
                        <Link onClick={() => setShowMobileMenu(false)} href="/about-jupiter">About Jupiter</Link>
                        <Link onClick={() => setShowMobileMenu(false)} href="/guide-to-studying-abroad">Guide To Study Abroad</Link>
                        <Link onClick={() => setShowMobileMenu(false)} href="/study-abroad-benefits">Study Abroad Benefits</Link>
                    </div>
                </div>
                <div className="sec-center">
                    <input className="dropdown" type="checkbox" id="what-we-do" name="dropdown" />
                    <label className="for-dropdown" htmlFor="what-we-do">What we do?</label>
                    <div className="section-dropdown">
                        <Link onClick={() => setShowMobileMenu(false)} href="/why-choose-jupiter">Why Choose Jupiter</Link>
                        <Link onClick={() => setShowMobileMenu(false)} href="/study-abroad-counselling">Study Abroad Counselling</Link>
                        <Link onClick={() => setShowMobileMenu(false)} href="/course-advice">Course Advice</Link>

                    </div>
                </div>
                <div className="sec-center">
                    <input className="dropdown" type="checkbox" id="destinations" name="dropdown" />
                    <label className="for-dropdown" htmlFor="destinations">Destinations</label>
                    <div className="section-dropdown">
                        <Link onClick={() => setShowMobileMenu(false)} href="/study-in-australia">Study in Australia</Link>
                        <Link onClick={() => setShowMobileMenu(false)} href="/study-in-uk">Study in Uk</Link>
                        <Link onClick={() => setShowMobileMenu(false)} href="/study-in-canada">Study in Canada</Link>

                    </div>
                </div>
                <div className="sec-center">
                    <input className="dropdown" type="checkbox" id="services" name="dropdown" />
                    <label className="for-dropdown" htmlFor="services">Services</label>
                    <div className="section-dropdown">
                        <Link onClick={() => setShowMobileMenu(false)} href="/admission">Admission</Link>
                        <Link onClick={() => setShowMobileMenu(false)} href="/student-ticketing-service">Student Ticketing Service</Link>
                        <Link onClick={() => setShowMobileMenu(false)} href="/visa-assisstance">Visa Assisstance</Link>
                        <Link onClick={() => setShowMobileMenu(false)} href="/career-counselling">Career Counselling</Link>
                        <Link onClick={() => setShowMobileMenu(false)} href="/sop-creation">Sop Creation</Link>

                    </div>
                </div>
                <div className="sec-center">
                    <input className="dropdown" type="checkbox" id="tourist" name="dropdown" />
                    <label className="for-dropdown" htmlFor="tourist">Tourist</label>
                    <div className="section-dropdown">
                        <Link onClick={() => setShowMobileMenu(false)} href="/tourist-in-australia">Australia Visa</Link>
                        <Link onClick={() => setShowMobileMenu(false)} href="/tourist-in-uk">Uk Visa</Link>
                        <Link onClick={() => setShowMobileMenu(false)} href="/tourist-in-canada">Canada Visa</Link>
                    </div>
                </div>
                <div className="sec-center">
                    <Link onClick={() => setShowMobileMenu(false)} href="/blogs" style={{ padding: "0", margin: "0", paddingLeft: "16px", color: "#102770", display: 'flex', justifyContent: "center", alignItems: 'center', letterSpacing: '1px' }}><label
                        className="for-dropdown mobile__menu__blog" htmlFor="blogs">Blogs</label></Link>
                </div>
                <div className="sec-center">
                    <Link onClick={() => setShowMobileMenu(false)} href="/testimonials" style={{ padding: "0", margin: "0", paddingLeft: "16px", color: "#102770", display: 'flex', justifyContent: "center", alignItems: 'center', letterSpacing: '1px' }}><label
                        className="for-dropdown mobile__menu__blog" htmlFor="blogs">Testimonials</label></Link>
                </div>
            </div>
            <PopupForm setShowPopUpForm={setShowPopUpForm} showPopUpForm={showPopUpForm} v />
        </header>
    )
}

export default Header
