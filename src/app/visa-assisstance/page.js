import React from 'react'
import Contactus from '../component/Contactus'

const fetchLink = async () => {
  try {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    const res = await fetch(`https://www.sankalpitsolutions.com/jupiter/api/genrate_link.php?page=visa-assisstance`, requestOptions)
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
          <h1>Navigating the World with Confidence: Jupiter Consultant's Visa Assistance Service
          </h1>
          <h2>Introduction
          </h2>
          <p>At Jupiter Consultant, our commitment to you goes beyond helping you secure
            admissions to prestigious universities and colleges. We understand that the journey
            to international education encompasses various facets, including the critical step
            of obtaining the necessary visas and permits. To ensure a seamless and successful
            transition to your chosen destination, we proudly introduce Jupiter Consultant's
            Visa Assistance Service, your trusted partner in simplifying the visa and permit
            application process.</p>
          {
            link !== undefined ?
              <iframe width="100%" height="315" id="youtubeiframe"
                src={link?.data?.link} style={{ margin: "20px 0" }}
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe> : null
          }
          <br />
          <h3 style={{ fontWeight: "600" }}>The Importance of Visa Assistance</h3>
          <p>Visa and permit applications are often the most intricate and crucial components of
            studying abroad. The visa approval process varies by country and can be complex,
            requiring meticulous attention to detail and adherence to specific regulations. The
            failure to secure the appropriate visa can jeopardize your educational aspirations
            and dreams. Our Visa Assistance Service is here to provide the guidance and support
            needed to navigate this intricate process.</p>
          <br />
          <p style={{ fontSize: "22px", fontWeight: "600" }}>Key Features of the Visa Assistance
            Service</p>
          <p><b>Expert Consultation:</b> Our team of seasoned visa consultants comprises experts
            with extensive knowledge of immigration policies and visa procedures. They offer
            personalized guidance tailored to your destination country and visa type.</p>
          <p><b>Visa Category Selection:</b> We assist you in identifying the most suitable visa
            category based on your academic program, duration of stay, and specific
            circumstances.</p>
          <p><b>Document Preparation:</b> Our consultants meticulously review and assist in
            preparing the required documentation, ensuring that your application is complete and
            error-free.</p>
          <p><b>Application Submission:</b> We guide you through the visa application submission
            process, ensuring that it aligns with the specific requirements of the respective
            consulate or embassy.</p>
          <p><b>Interview Preparation:</b> For destinations requiring visa interviews, we offer
            coaching and practice sessions to enhance your confidence and presentation during
            the interview.</p>
          <p><b>Student Visa:</b> Our service encompasses support for student visas, helping you
            navigate the specific requirements, financial documentation, and evidence of
            admission.</p>
          <p><b>Work Permits:</b> For students seeking part-time work during their studies or
            post-graduation work opportunities, we provide assistance with work permit
            applications.</p>
          <p><b>Visa Extension:</b> We guide you through the visa extension process, ensuring your
            continued legal stay in the destination country.</p>
          <br />
          <br />
          <p style={{ fontSize: "22px", fontWeight: "600" }}>Benefits of the Visa Assistance Service
          </p>
          <p>Choosing Jupiter Consultant's Visa Assistance Service offers several notable
            advantages:</p>
          <p><b>Expertise:</b> Access to a team of experienced visa consultants with a deep understanding
            of immigration policies, ensuring that your application adheres to all regulations.
          </p>
          <p><b>Personalization:</b> Tailored support designed to cater to your individual visa
            requirements based on your academic program and destination country.</p>
          <p><b>Efficiency:</b> A streamlined application process that saves you time and reduces the
            risk of visa application errors.</p>
          <p><b>Interview Success:</b> Coaching and preparation that maximizes your chances of success
            during visa interviews, if applicable.</p>
          <p><b>Legal Stay:</b> Assurance that you meet all the requirements for legal stay in your
            destination country throughout your academic journey.</p>
          <br />
          <br />
          <p style={{ fontSize: "22px", fontWeight: "600" }}>How the Visa Assistance Service Works</p>
          <p><b>Consultation:</b> You initiate the process by scheduling a consultation with our visa
            consultants.</p>
          <p><b>Profile Assessment:</b> Our consultants assess your academic and travel details,
            including your intended destination.</p>
          <p><b>Visa Category Selection:</b> We work together to determine the most suitable visa
            category for your specific academic program and goals.</p>
          <p><b>Documentation Review:</b> Our consultants meticulously review and assist in preparing the
            required documentation, ensuring that it aligns with the respective consulate or
            embassy's regulations.</p>
          <p><b>Application Submission:</b> We guide you through the visa application submission process,
            ensuring that your application is complete and adheres to all necessary guidelines.
          </p>
          <p><b>Interview Coaching:</b> If required, we provide interview coaching to prepare you for a
            successful visa interview.</p>
          <p><b>Continued Support:</b> Our support extends to visa extensions and assistance with work
            permits if your academic journey necessitates these documents.</p>
          <br />
          <br />
          <p>Jupiter Consultant's Visa Assistance Service is your trusted partner in ensuring a
            smooth and successful transition to your chosen destination. With expert guidance,
            personalized support, and meticulous attention to detail, we are here to help you
            navigate the intricate world of visa and permit applications. Your dream of studying
            abroad begins with a secure visa, and we are committed to making that dream a
            reality. Join us on this transformative journey, and let us be your gateway to
            international education and global opportunities. Your future is secure with us.</p>
        </div>
        <div className='col-sm-4'>
          <Contactus />
        </div>
      </div>
    </div>
  )
}

export default page
