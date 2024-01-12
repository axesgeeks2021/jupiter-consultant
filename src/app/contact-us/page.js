import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons'
import Marquee from '../component/Marquee';
import Reviews from '../component/Reviews';
import IndexForm from '../component/IndexForm';

function page() {

  
  return (
    <div className='contact__page'>
      <div className='contact__banner__image'>
        <Image src="/CONTACTUS(2).png" width={1000} height={1000} alt='' />
      </div>
      <div className='contact__information'>
        <div className='address__information'>
          <h2>Contact Us</h2>
          <h4>Head Office (Chandigarh)</h4>
          <div className='address__details'>
            <h5>Jupiter Study Abroad Consultants Pvt Ltd</h5>
            <p><FontAwesomeIcon icon={faAddressBook} /> S.C.O 64–65 First Floor, Sector 17–A Chandigarh 160017, U.T, India</p>
            <div className='email__phone'>
              <a href='tel:+919143333305'><FontAwesomeIcon icon={faPhone} /> (+91) 9143333305</a>
              <a href='tel:+919143333306'><FontAwesomeIcon icon={faPhone} /> (+91) 9143333306</a>
              <a href='tel:+919501115113'><FontAwesomeIcon icon={faPhone} /> (+91) 9501115113</a>
              <a href='tel:+919464280970'><FontAwesomeIcon icon={faPhone} /> (+91) 9464280970</a>
              <a href='tel:0172-4636809'><FontAwesomeIcon icon={faPhone} /> 0172-4636809</a>
              <a href='mailto:info@jupiterconsultants.in'><FontAwesomeIcon icon={faMailBulk} /> info@jupiterconsultants.in</a>
            </div>
          </div>
        </div>
        <div className='map__address'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d54868.533121419714!2d76.61524606311036!3d30.73854224508772!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0baaaaaaab%3A0xbc2966172b1d9a12!2sJupiter%20Consultants!5e0!3m2!1sen!2sin!4v1631161514551!5m2!1sen!2sin"
            allowFullScreen="" loading="lazy"></iframe>
        </div>
      </div>
      <div className='contact__form__box'>
        <h3 style={{ textAlign: "center", color: "#000", fontSize: "42px", fontWeight: "500" }}>Study Abroad with
          Jupiter</h3>
        <div className='contact__form'>
          <div className='contact__form__image'>
            <Image src="/contactform.webp" alt="" width={1000} height={1000} />
          </div>
          <IndexForm />
          
        </div>
      </div>
      <br />
      <br />
      <Reviews />
      <Marquee />

    </div>
  )
}

export default page
