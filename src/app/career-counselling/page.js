import React from 'react'
import Contactus from '../component/Contactus'

import SocailMediaIcons from '../component/SocailMediaIcons';


const fetchLink = async () => {
  try {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    const res = await fetch(`https://www.sankalpitsolutions.com/jupiter/api/genrate_link.php?page=career-Counselling`, requestOptions)
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
          <h1>Career Counselling</h1>
          <h2>Empowering Futures: Jupiter Consultant's Career Counselling Service
          </h2>
          <p>At Jupiter Consultant, we believe that your journey toward academic excellence
            doesn’t end with admissions and visas. We understand the importance of making
            informed decisions about your career path. That's why we introduce Jupiter
            Consultant's Career Counselling Service, a personalized and comprehensive approach to
            helping you navigate the complex landscape of career choices. Our service aims to
            empower you with the knowledge, insights, and confidence necessary to make the right
            decisions for your future.</p>
          {
            link !== undefined ?
              <iframe width="100%" height="315" id="youtubeiframe"
                src={link?.data?.link} style={{ margin: "20px 0" }}
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe> : null
          }

          <strong>
            <p>The Significance of Career Counselling</p>
          </strong>
          <p>Choosing the right career path is a pivotal decision that profoundly impacts your
            life. In today's competitive world, it's essential to align your skills, interests,
            and aspirations with the right career choices. Career Counselling plays a crucial
            role in providing you with the necessary guidance, resources, and support to make
            informed decisions about your academic and professional journey.</p>

          <h3 style={{ fontWeight: "600" }}>Key Features of the Career Counselling Service</h3>
          <p><b>Personalized Assessment:</b> Our experienced career counselors conduct in-depth
            assessments of your skills, interests, values, and personality traits to identify
            suitable career options.</p>
          <p><b>Academic Guidance:</b> We provide insights into various academic disciplines, helping you
            explore programs that align with your interests and career goals.</p>
          <p><b>Industry Insights:</b> Our counselors offer valuable insights into different industries,
            including growth prospects, trends, and job opportunities, helping you make informed
            decisions about your career path.</p>
          <p><b>Resume Building and Interview Skills:</b> We assist you in creating compelling resumes
            and honing your interview skills, ensuring you present yourself effectively to
            potential employers or educational institutions.</p>
          <p><b>Internship and Job Placement:</b> For students seeking internships or employment
            opportunities, we provide guidance on job searches, application strategies, and
            interview preparation.</p>
          <p><b>Entrepreneurship Support:</b> If you have entrepreneurial aspirations, our counselors
            offer guidance on starting and managing your own business, including market
            research, business planning, and funding options.</p>
          <p><b>Networking Strategies:</b> We provide advice on building professional networks,
            connecting with industry professionals, and utilizing social platforms for career
            advancement.</p>
          <p style={{ fontSize: "24px", fontWeight: "600" }}>Benefits of the Career Counselling Service</p>
          <strong><p>Choosing Jupiter Consultant's Career Counselling Service provides you with numerous advantages:</p></strong>
          <p><b>Informed Decisions:</b> Personalized guidance that helps you make well-informed decisions about your academic and professional future.</p>
          <p><b>Confidence:</b> Empowerment with the confidence to pursue your chosen career path with conviction and determination.</p>
          <p><b>Optimized Potential:</b> Identification of your strengths and talents, enabling you to maximize your potential in your chosen field.</p>
          <p><b>Industry Relevance:</b> Insights into current industry trends and demands, ensuring your skills remain relevant and marketable.</p>
          <p><b>Job Readiness:</b> Preparation for job searches, interviews, and internships, enhancing your readiness for the professional world.</p>
          <p><b>Entrepreneurial Skills:</b> Support for aspiring entrepreneurs, guiding you through the process of launching and managing your own venture.</p>
          <p><b>Holistic Development:</b> A holistic approach that focuses not only on your academic and professional growth but also on your personal development and well-being.</p>
          <p style={{ fontSize: "24px", fontWeight: "600" }}>How the Career Counselling Service Works</p>
          <p><b>Consultation:</b> You begin with a consultation with our experienced career counselors, discussing your interests, aspirations, and concerns.</p>
          <p><b>Assessment:</b> Our counselors conduct comprehensive assessments to understand your skills, personality traits, and values.</p>
          <p><b>Career Exploration:</b> Based on the assessment results, we explore various academic and career options, discussing their pros and cons.</p>
          <p><b>Guidance and Support:</b> We offer guidance on academic choices, skill development, industry insights, job searches, and entrepreneurship, tailoring our support to your specific needs.</p>
          <p><b>Continuous Support:</b> Our support doesn’t end with the initial sessions. We provide continuous assistance as you progress in your academic and professional journey, adapting our guidance to your evolving needs.</p>
          <p>Jupiter Consultant's Career Counselling Service is your pathway to a fulfilling and successful future. With our dedicated support, expert insights, and personalized guidance, you can confidently navigate the complex world of career choices. Your dreams are achievable, and your potential is limitless. Join us, and let us empower you to create a future that aligns with your passions and aspirations. Your journey to a rewarding career begins here.
            Was this response better or worse?
          </p>
          <SocailMediaIcons />
      </div>
      <div className='col-sm-4'>
        <Contactus />
      </div>
    </div>
    </div >
  )
}

export default page
