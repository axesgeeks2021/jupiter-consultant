import React from 'react'
import Contactus from '../component/Contactus'


const fetchLink = async () => {
  try {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    const res = await fetch(`https://www.sankalpitsolutions.com/jupiter/api/genrate_link.php?page=tourist-in-canada`, requestOptions)
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
          <h1>Canada Tourist Visa Services - Your Gateway to Exploring the Great White North</h1>
          <p>Are you ready to embark on a journey to the land of breathtaking natural wonders, diverse cultures, and vibrant cities? Jupiter Consultant is your trusted partner in obtaining a Canada Tourist Visa, making your dream of exploring the Great White North a reality.</p>
          {
            link !== undefined ?
              <iframe width="100%" height="315" id="youtubeiframe"
                src={link?.data?.link} style={{ margin: "20px 0" }}
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe> : null
          }
          <h2 style={{ fontWeight: "600" }}>Why Choose Jupiter Consultant for Your Canada Tourist Visa?</h2>
          <p><b>Expert Guidance:</b> Navigating the Canadian visa application process can be complex, but our team of experienced consultants is here to simplify it for you. We stay up to date with the latest visa regulations to ensure your application is accurate and complete.</p>
          <p><b>Personalized Support:</b> Your travel plans are as unique as you are. Whether you're looking to explore the iconic landscapes of Banff, the historic charm of Quebec City, or the cultural diversity of Toronto, we tailor our services to meet your specific needs.</p>
          <p><b>Efficiency:</b> We streamline the visa application process to save you time and reduce the risk of errors. With our support, you can embark on your Canadian adventure with peace of mind.</p>
          <p><b>24/7 Assistance:</b> Travel plans often extend beyond traditional business hours. Our team is available around the clock to assist you with any visa-related inquiries or emergencies.</p>
          <br />
          <br />
          <h3 style={{ fontWeight: "600", fontSize: "24px" }}>Our Canada Tourist Visa Services</h3>
          <p><b>Visa Application Assistance:</b> We provide step-by-step guidance, from documentation preparation to the submission of your Canada Tourist Visa application.</p>
          <p><b>Visa Category Selection:</b> Our experts help you choose the right visa category based on your travel plans, whether it's a holiday, family visit, or sightseeing tour.</p>
          <p><b>Documentation Review:</b> We meticulously review your documentation to ensure it aligns with the specific requirements of the Canadian government.</p>
          <p><b>Visa Interview Preparation:</b> If required, we offer coaching and practice sessions to boost your confidence for the visa interview.</p>
          <p><b>Visa Renewal and Extension:</b> If your Canadian adventure extends beyond your initial visa's validity, we can assist you in renewing or extending your tourist visa.</p>
          <br />
          <br />
          <p style={{ fontWeight: "600", fontSize: "24px" }}>Canada Awaits Your Exploration</p>
          <p>Canada is a diverse and vast country waiting to be explored. Whether you're drawn to the natural wonders of the Canadian Rockies, the historic sites of Ottawa, or the multicultural atmosphere of Vancouver, Jupiter Consultant's Canada Tourist Visa Services are designed to make your journey to the Great White North as smooth as possible.</p>
          <br />
          <br />
          <p style={{ fontWeight: "600", fontSize: "24px" }}>Begin Your Canadian Adventure</p>
          <p>Your adventure begins with a Canada Tourist Visa, and Jupiter Consultant is here to make the process simple and efficient. Let's make your Canadian dreams come true. Contact us today to start planning your journey to this remarkable destination.</p>
          <br />
          <p>Unlock the beauty of Canada with Jupiter Consultant's Canada Tourist Visa Services.</p>
        </div>
        <div className='col-sm-4'>
          <Contactus />
        </div>
      </div>
    </div>
  )
}

export default page
