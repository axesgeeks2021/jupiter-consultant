import React from 'react'
import Contactus from '../component/Contactus'
import Pagestestimonials from '../component/Pagestestimonials';
import SocailMediaIcons from '../component/SocailMediaIcons';


const fetchLink = async () => {
  try {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    const res = await fetch(`https://www.sankalpitsolutions.com/jupiter/api/genrate_link.php?page=why-choose-jupiter`, requestOptions)
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

async function page() {

  const link = await fetchLink()
  return (
    <div className='container-fluid'>
      <div className='row p-3'>
        <div className='col-sm-8'>
          <h1>Why Choose Jupiter Consultant Visa Immigration Company?</h1>
          <p>Choosing the right partner for your immigration and visa needs is a significant
            decision. At Jupiter Consultant Visa Immigration Company, we understand the
            importance of this choice and are committed to being the ideal partner for your
            immigration journey. With a wealth of experience and a dedication to our
            clients, we offer a range of compelling reasons why you should choose us to help
            you navigate the complexities of immigration and visas.</p>
          {
            link !== undefined ?
              <iframe width="100%" height="315" id="youtubeiframe"
                src={link?.data?.link} style={{ margin: "20px 0" }}
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe> : null
          }
          <p style={{ fontSize: "22px", fontWeight: "600" }}>Expertise and Knowledge</p>
          <p>Our team of immigration experts possesses extensive knowledge of the
            ever-evolving immigration laws and regulations. We stay up-to-date with the
            latest changes in immigration policies and procedures, ensuring that you receive
            accurate and precise advice. This expertise is invaluable in helping you make
            informed decisions at every step of your immigration journey.</p>
          <p style={{ fontSize: "22px", fontWeight: "600" }}>Tailored Solutions</p>
          <p>We recognize that every client is unique. No two immigration journeys are the
            same. Our services are carefully tailored to suit your specific needs, ensuring
            that you receive the best possible guidance for your immigration objectives. We
            take the time to understand your individual circumstances, goals, and
            challenges, and we develop a personalized plan to address them effectively.</p>
          <p style={{ fontSize: "22px", fontWeight: "600" }}>Global Reach</p>
          <p>The world of immigration and visas is vast, with different countries offering a
            multitude of programs and pathways. At Jupiter Consultant Visa Immigration
            Company, we specialize in various immigration and visa programs, providing
            opportunities worldwide. Whether you dream of moving to Canada, the United
            States, Australia, the United Kingdom, or any other destination, we have the
            expertise and knowledge to make your dreams come true.</p>
          <p style={{ fontSize: "22px", fontWeight: "600" }}>Client-Centric Approach</p>
          <p>Your success is our success. At Jupiter Consultant Visa Immigration Company, we
            are unwavering in our dedication to providing exceptional service. We understand
            that your immigration journey can be filled with uncertainties and questions,
            and we are here to provide transparent communication and unwavering support at
            every step of the process. We take the time to address your concerns and ensure
            that you are well-informed throughout your immigration journey.</p>
          <p style={{ fontSize: "22px", fontWeight: "600" }}>Comprehensive Services</p>
          <p>We offer a wide range of services to cater to various immigration and visa needs.
            Our services include:</p>
          <p><b>Visa and Immigration Consultation:</b> Our experts assess your individual
            circumstances and guide you through the complexities of visa applications and
            immigration procedures.</p>
          <p><b>Immigration Pathways:</b> We provide expert guidance on various immigration
            pathways, including Express Entry, Green Card applications, skilled migration,
            and citizenship applications.</p>
          <p><b>Document Assistance:</b> We help you organize and prepare all necessary
            documentation for your immigration and visa applications, ensuring that they are
            complete and ready for submission.</p>
          <p><b>Post-Immigration Support:</b> Our commitment to your journey doesn't end with
            the approval of your visa or immigration application. We offer post-immigration
            support to help you settle into your new home.</p>
          <p><b>Legal Support:</b> Should you encounter any legal issues related to your
            immigration status, we have a network of immigration attorneys who can provide
            expert legal counsel and representation.</p>
          <br />
          <p style={{ fontSize: "24px", fontWeight: "600" }}>Experience and Track Record</p>
          <p>Our success is reflected in our track record. We have assisted countless
            individuals and families in their immigration journeys, helping them achieve
            their dreams of studying abroad, working in a new country, reuniting with loved
            ones, and pursuing permanent residency. Our experience speaks to our commitment
            and effectiveness in the field of immigration and visas.</p>
          <p style={{ fontSize: "24px", fontWeight: "600" }}>Personalized Guidance</p>
          <p>Your journey is unique, and we treat it as such. Our team of immigration
            consultants takes the time to understand your goals, preferences, and
            challenges. We are here to provide one-on-one support and guidance, ensuring
            that your immigration plan is tailored to your specific needs. We answer your
            questions, address your concerns, and offer continuous support throughout your
            journey.</p>
          <p style={{ fontSize: "24px", fontWeight: "600" }}>Transparent and Ethical Practices</p>
          <p>Transparency and ethical practices are the cornerstones of our services. We
            believe in providing honest, accurate, and ethical advice to all our clients.
            Our commitment to transparency ensures that you are well-informed about every
            aspect of your immigration journey, from the application process to potential
            challenges and expected outcomes.</p>
          <p style={{ fontSize: "24px", fontWeight: "600" }}>Global Network</p>
          <p>Our global network of partners and affiliates extends our reach and resources. We
            have established relationships with immigration authorities, educational
            institutions, legal experts, and other professionals in the field. This network
            allows us to offer a broad spectrum of support and resources to our clients,
            ensuring a smooth and successful immigration journey.</p>
          <p style={{ fontSize: "24px", fontWeight: "600" }}>Testimonials</p>
          <p>Don't just take our word for it. Read what our satisfied clients have to say
            about their experiences with Jupiter Consultant Visa Immigration Company. Their
            testimonials reflect our dedication to providing exceptional service and
            support.</p>
          <Pagestestimonials />
          <br />
          <p>These testimonials are a testament to our commitment to making immigration dreams
            come true and building lasting relationships with our clients.</p>
          <p style={{ fontSize: "22px", fontWeight: "600" }}>Contact Us</p>
          <p>Are you ready to embark on your immigration journey with Jupiter Consultant Visa
            Immigration Company? Contact us today to speak with one of our experts. We are
            here to answer your questions, assess your needs, and guide you toward your
            dream destination.</p>
          <p><b>Location:</b> S.C.O 64–65 First Floor, Sector 17A Sector 17, Chandigarh,160017
          </p>
          <p><b>Phone:</b> <a href="tel:+91 9464280970">+91 9464280970</a>&nbsp;&nbsp;&nbsp;<a href="tel:+91 9143333305">+91 9143333305</a>&nbsp;&nbsp;&nbsp;<a href="tel:0172-4636809">0172-4636809</a></p>
          <p><b>Email:</b> <a
            href="mailto:info@jupiterconsultants.in">info@jupiterconsultants.in</a></p>
          <p><b>Office Hours:</b> Mon-Sat 10:00 am to 06:00 pm</p>
          <br />
          <br />
          <p style={{ fontSize: "22px", fontWeight: "600" }}>Join Our Community</p>
          <p>Stay connected with us on social media for the latest updates, immigration news,
            success stories, and more. Follow us on [list social media links].</p>
          <SocailMediaIcons />
        </div>
        <div className='col-sm-4'>
          <Contactus />
        </div>
      </div>
    </div>
  )
}

export default page
