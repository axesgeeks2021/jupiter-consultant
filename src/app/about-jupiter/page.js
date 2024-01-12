import React from 'react'
import Contactus from '../component/Contactus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Pagestestimonials from '../component/Pagestestimonials';

const fetchLink = async () => {
    try {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        const res = await fetch(`https://www.sankalpitsolutions.com/jupiter/api/genrate_link.php?page=about-jupiter`, requestOptions)
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
                    <h1>About Jupiter</h1>
                    <p>Welcome to Jupiter Consultant Visa Immigration Company, your gateway to a world
                        of opportunities. With a rich history spanning over 22 years, we
                        have established ourselves as a trusted partner for individuals and families
                        seeking to explore global possibilities through immigration and visas.</p>
                    {
                        link !== undefined ?
                            <iframe width="100%" height="315" id="youtubeiframe"
                                src={link?.data?.link} style={{ margin: "20px 0" }}
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen></iframe> : null
                    }
                    <h2 style={{ fontWeight: "600" }}>Our Journey</h2>
                    <p>Our journey began with a vision – a vision of a world where geographical borders
                        would not limit the pursuit of dreams, careers, education, or reunions with
                        loved ones. With this vision in mind, we founded Jupiter Consultant Visa
                        Immigration Company. We knew that to bring about positive change in the lives of
                        individuals, we needed to facilitate their journeys through the complex
                        landscape of immigration laws and regulations.</p>
                    <br />
                    <br />
                    <h3 style={{ fontWeight: "600" }}>Our Mission</h3>
                    <p>At Jupiter Consultant, our mission is clear: to simplify the intricate process of
                        immigration and visa acquisition. We believe that everyone deserves the
                        opportunity to broaden their horizons and explore new avenues. Whether it's for
                        better career prospects, higher education, family reunification, or simply
                        starting anew, we are here to be your unwavering support on this life-changing
                        expedition.</p>
                    <br />
                    <br />
                    <p style={{ fontWeight: "600", fontSize: "23px" }}>What Sets Us Apart</p>
                    <p><b>1. Expertise:</b> Our team of immigration experts possesses a profound
                        understanding of the ever-evolving immigration laws and regulations. They stay
                        up-to-date with the latest changes, ensuring that you receive accurate and
                        precise advice.</p>
                    <p><b>2. Tailored Solutions:</b> We acknowledge that every client is unique. No two
                        immigration journeys are the same. Our services are carefully tailored to suit
                        your specific needs, ensuring that you receive the best possible guidance for
                        your immigration objectives.</p>
                    <p><b>3. Global Reach:</b> Our expertise covers various immigration and visa
                        programs, providing opportunities across the globe. Regardless of your dream
                        destination, we can help you get there.</p>
                    <p><b>4. Client-Centric Approach:</b> Your success is our success. We are unwavering
                        in our dedication to providing exceptional service, maintaining transparent
                        communication, and offering continuous support at every step of your immigration
                        journey.</p>
                    <br />
                    <br />
                    <p style={{ fontWeight: "600", fontSize: "23px" }}>Our Vision</p>
                    <p>Our vision is nothing short of transformative. We aspire to be a leading force in
                        the immigration and visa consultancy industry, setting new standards of
                        excellence and reliability. We imagine a world where boundaries do not hinder
                        the pursuit of one's dreams and aspirations. Our vision encompasses a brighter
                        future for our clients and their families.</p>
                    <br />
                    <br />
                    <p style={{ fontWeight: "600", fontSize: "23px" }}>The Jupiter Consultant Team</p>
                    <p>Behind every successful immigration journey stands a dedicated team of
                        professionals. Our experts, with years of experience in the field, are the
                        driving force behind our ability to serve you effectively. Meet the team that
                        will guide you on your path to global opportunities.</p>
                    {/*<p>
[Insert Team Member 1] - [Title]: [Brief bio or description]

[Insert Team Member 2] - [Title]: [Brief bio or description]

[Insert Team Member 3] - [Title]: [Brief bio or description]

[Insert Team Member 4] - [Title]: [Brief bio or description]

[Insert Team Member 5] - [Title]: [Brief bio or description]

</p>*/}
                    <p>Our team comprises individuals with diverse backgrounds and expertise, ensuring
                        that we can assist clients from various walks of life and with different
                        immigration goals. We take pride in our team's professionalism, commitment, and
                        dedication to your success.</p>
                    <br />
                    <br />
                    <p style={{ fontSize: "23px", fontWeight: "600" }}>Testimonials</p>
                    <p>Don't take our word for it. Hear what our satisfied clients have to say about
                        their experiences with Jupiter Consultant Visa Immigration Company.</p>
                       <Pagestestimonials />
                    <p>These testimonials reflect our dedication to providing exceptional service and
                        support, and they are a testament to our commitment to making immigration dreams
                        come true.</p>
                    <br />
                    <br />
                    <p style={{ fontSize: "23px", fontWeight: "600" }}>Our Services</p>
                    <p>Visa and Immigration Consultation</p>
                    <p>At Jupiter Consultant Visa Immigration Company, we offer comprehensive visa and
                        immigration consultation services. Our experts will assess your individual
                        circumstances and guide you through the complexities of visa applications and
                        immigration procedures. Whether you are seeking a temporary visa, permanent
                        residency, or citizenship, we have the knowledge and experience to make the
                        process as smooth as possible.</p>
                    <br />
                    <p>Visa Services We Provide:</p>
                    <p><b>Student Visas:</b> If you aspire to further your education abroad, we can help
                        you with student visa applications and offer advice on the best educational
                        institutions and programs.</p>
                    <p><b>Family Reunification:</b> Reuniting with loved ones across borders is a
                        special endeavor. We can help you navigate the intricacies of family sponsorship
                        and reunification.</p>
                    <p><b>Investor and Business Visas:</b> For those looking to invest in a foreign
                        country or start a business, we can provide guidance on investor and
                        entrepreneur visa options.</p>
                    <p><b>Tourist and Visitor Visas:</b> If you're planning to travel for leisure or to
                        visit friends and family, we can assist you with tourist and visitor visa
                        applications.</p>
                    <br />
                    <br />
                    <p style={{ fontSize: "23px", fontWeight: "600" }}>Immigration Pathways</p>
                    <p>The journey to a new country is not limited to visas alone. We also provide
                        expert guidance on various immigration pathways, including:</p>
                    <p><b>Express Entry:</b> For those seeking permanent residency in Canada, we are
                        well-versed in the Express Entry system and can help you navigate the process.
                    </p>
                    <p><b>Green Card:</b> If the United States is your destination of choice, we can
                        provide insights into the Green Card application process.</p>
                    <p><b>Skilled Migration:</b> We can guide skilled professionals and tradespeople
                        through the immigration processes of countries like Australia and New Zealand.
                    </p>
                    <p><b>Citizenship Applications:</b> Our team can assist in preparing and submitting
                        applications for naturalization and citizenship in your chosen country.</p>
                    <br />
                    <br />
                    <p style={{ fontSize: "23px", fontWeight: "600" }}>Document Assistance</p>
                    <p>Immigration and visa applications often require extensive documentation. We can
                        help you organize and prepare all the necessary paperwork, ensuring that your
                        application is complete and ready for submission. From supporting documents to
                        forms and certifications, we will assist you in meeting the stringent
                        requirements of immigration authorities.</p>
                    <p>Post-Immigration Support<br />
                        Our commitment to your journey doesn't end with the approval of your visa or
                        immigration application. We offer post-immigration support services to help you
                        settle in your new home. From finding accommodation to understanding local laws
                        and customs, we are here to make your transition as seamless as possible.
                    </p>
                    <br />
                    <br />
                    <p style={{ fontSize: "23px", fontWeight: "600" }}>Our Values</p>
                    <p>Our values are the foundation of our company. They define how we operate, engage
                        with our clients, and approach our work. We are driven by:</p>
                    <p>Integrity: We conduct ourselves with honesty, transparency, and fairness in all
                        our dealings with clients.
                    </p>
                    <p><b>Professionalism:</b>Our team is committed to maintaining the highest
                        professional standards and delivering services of the utmost quality.</p>
                    <p><b>Empathy:</b>We understand the significance of your immigration journey and
                        empathize with the challenges you may face. We are here to support you through
                        every step of the process.</p>
                    <p><b>Diversity:</b>We celebrate diversity and welcome clients from all backgrounds
                        and walks of life.</p>
                    <p><b>Excellence:</b>We strive for excellence in everything we do, always seeking to
                        improve our services and better serve our clients.</p>
                    <br />
                    <br />
                    <p style={{ fontSize: "23px", fontWeight: "600" }}>Contact Us</p>
                    <p>Ready to embark on your immigration journey with Jupiter Consultant Visa
                        Immigration Company? Contact us today to speak with one of our experts. We are
                        here to answer your questions, assess your needs, and guide you toward your
                        dream destination.</p>
                    <p><b>Location:</b> S.C.O 64–65 First Floor, Sector 17A Sector 17, Chandigarh,160017</p>
                    <p><b>Phone:</b> <a href="tel:+91 9464280970">+91 9464280970</a>&nbsp;&nbsp;&nbsp;<a href="tel:+91 9143333305">+91 9143333305</a>&nbsp;&nbsp;&nbsp;<a href="tel:0172-4636809">0172-4636809</a></p>
                    <p><b>Email:</b> <a href="mailto:info@jupiterconsultants.in">info@jupiterconsultants.in</a></p>
                    <p><b>Office Hours:</b> Mon-Sat 10:00 am to 06:00 pm</p>
                    <br />
                    <br />
                    <p style={{ fontSize: "23px", fontWeight: "600" }}>Join Our Community</p>
                    <p>Stay connected with us on social media for the latest updates, immigration news,
                        success stories, and more. Follow us on [list social media links].</p>
                    <br />
                    <br />
                    <p style={{ fontSize: "20px", fontWeight: "600" }}>Legal Disclaimer</p>
                    <p>The information provided on our website is for informational purposes only and
                        should not be considered legal advice. Immigration laws and regulations are
                        subject to change, and individual circumstances may vary. For personalized
                        guidance and advice, please contact our experienced immigration consultants.</p>
                </div>
                <div className='col-sm-4'>
                    <Contactus />
                </div>
            </div>
        </div>
    )
}

export default page
