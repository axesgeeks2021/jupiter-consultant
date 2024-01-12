import React from 'react'
import Contactus from '../component/Contactus'
const fetchLink = async () => {
  try {
      const requestOptions = {
          method: 'GET',
          redirect: 'follow'
      };

      const res = await fetch(`https://www.sankalpitsolutions.com/jupiter/api/genrate_link.php?page=admission`, requestOptions)
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
          <h1>Elevate Your Academic Journey with Jupiter Consultant's Admission Consultancy
            Service</h1>
          <h2>Introduction</h2>
          <p>At Jupiter Consultant, our mission is to make your dream of studying abroad a
            reality. We understand that the path to international education is paved with
            challenges, including navigating the complex admissions process. To simplify this
            journey and enhance your chances of success, we proudly introduce Jupiter
            Consultant's Admission Consultancy Service – your trusted partner in securing
            admissions to top universities and colleges worldwide.</p>
        {
          link !== undefined ?
            <iframe width="100%" height="315" id="youtubeiframe"
              src={link?.data?.link} style={{ margin: "20px 0" }}
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe> : null
        }
          <h3>The Significance of Admission Consultancy</h3>
          <p>Securing admission to your desired educational institution is a pivotal step in your
            academic and professional journey. The application process can be overwhelming, and
            competition for seats at prestigious universities is fierce. Our Admission
            Consultancy Service is designed to provide you with the guidance and support needed
            to maximize your chances of acceptance.</p>
          <p style={{ fontSize: "24px", fontWeight: "500", margin: "15px 0" }}>Key Features of the Admission Consultancy
            Service</p>
          <p><b>Expert Guidance:</b> Our team of experienced consultants consists of education
            experts with a deep understanding of the international admissions landscape. They
            provide personalized guidance tailored to your academic and career goals.</p>
          <p><b>University Selection:</b> We help you identify institutions that align with your
            aspirations, considering factors such as course offerings, location, financial
            feasibility, and your eligibility.</p>
          <p><b>Course Selection:</b> Our consultants assist you in choosing programs that match
            your academic strengths, interests, and long-term career objectives.</p>
          <p><b>Application Support:</b> We provide comprehensive assistance with the application
            process, from documentation preparation to submission. This includes preparing a
            compelling statement of purpose (SOP), guidance on recommendation letters, and more.
          </p>
          <p><b>Scholarship and Financial Aid:</b> We help you explore scholarship opportunities,
            grants, and financial aid options to ease the financial burden of studying abroad.
          </p>
          <p><b>Interview Preparation:</b> For programs requiring interviews, we offer interview
            coaching to ensure you present yourself confidently and professionally.</p>
          <p><b>Visa Guidance:</b> Our experts guide you through the visa application process,
            helping you compile the necessary documentation and prepare for interviews.</p>
          <p><b>Pre-Departure Services:</b> We offer pre-departure briefings and support, helping
            you transition smoothly to your new academic environment.</p>
          <p><b>Career Counselling:</b> Our consultants provide career guidance, helping you make
            informed decisions about your academic and professional future.</p>
          <p style={{ fontSize: "24px", fontWeight: "500", margin: "15px 0" }}>Key Features of the Admission Consultancy
            Service</p>
          <p>Choosing Jupiter Consultant's Admission Consultancy Service provides you with several
            key advantages:</p>
          <p><b>Expertise:</b> Access to a team of experienced consultants with in-depth knowledge
            of international education systems and admissions procedures.</p>
          <p><b>Personalization:</b> Tailored guidance that considers your individual goals,
            strengths, and preferences.</p>
          <p><b>Efficiency:</b> Streamlined application processes and meticulous documentation
            that save you time and reduce the risk of application errors.</p>
          <p><b>Increased Acceptance Chances:</b> Strategic advice that enhances your
            competitiveness as an applicant, improving your chances of admission.</p>
          <p><b>Financial Support:</b> Assistance in identifying scholarship opportunities and
            financial aid to help fund your education.</p>
          <p><b>Visa Success:</b> Guidance and support in securing the necessary visas and permits
            for your chosen destination.</p>
          <p><b>Career Planning:</b> Professional advice that supports your long-term career
            aspirations and helps you make informed decisions about your academic journey.</p>
          <p style={{ fontSize: "24px", fontWeight: "500", margin: "15px 0" }}>How the Admission Consultancy Service
            Works</p>
          <p><b>Consultation:</b> You begin by scheduling a consultation with our expert admission
            consultants.</p>
          <p><b>Profile Assessment:</b> Our consultants assess your academic background, career
            goals, and preferences.</p>
          <p><b>University and Course Selection:</b> We work together to identify the most
            suitable institutions and programs for you.</p>
          <p><b>Application Preparation:</b> Our team guides you through the documentation and
            application process, ensuring that all requirements are met.</p>
          <p><b>Interview Coaching:</b> If required, we provide interview coaching to prepare you
            for successful interviews.</p>
          <p><b>Visa Support:</b> Our consultants assist you in obtaining the necessary visas and
            permits.</p>
          <p><b>Pre-Departure Briefing:</b> We offer guidance and support as you prepare to embark
            on your academic journey.</p>
          <br />
          <br />
          <p>Jupiter Consultant's Admission Consultancy Service is your gateway to academic
            success and international exploration. With our expert guidance, personalized
            support, and strategic assistance, you can navigate the complex world of
            international admissions with confidence and ease. We are here to ensure that your
            dream of studying abroad becomes a reality. Join us on this remarkable journey, and
            let us be your trusted partner in academic excellence and professional growth. Your
            future begins with us.</p>
        </div>
        <div className='col-sm-4'>
          <Contactus />
        </div>
      </div>
    </div>
  )
}

export default page
