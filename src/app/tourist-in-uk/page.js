import React from 'react'
import Contactus from '../component/Contactus'

const fetchLink = async () => {
  try {
      const requestOptions = {
          method: 'GET',
          redirect: 'follow'
      };

      const res = await fetch(`https://www.sankalpitsolutions.com/jupiter/api/genrate_link.php?page=tourist-in-uk`, requestOptions)
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
        <h1>UK Tourist Visa Services - Your Passage to Explore the United Kingdom</h1>
                            <p>Are you ready to embark on an adventure to the United Kingdom, a land steeped in history, rich in culture, and filled with iconic landmarks? Jupiter Consultant is your trusted partner in obtaining a UK Tourist Visa, making your dream of exploring the United Kingdom a reality.</p>
                        {
                            link !== undefined ?
                            <iframe width="100%" height="315" id="youtubeiframe"
                                src={link?.data?.link} style={{margin: "20px 0"}}
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen></iframe> : null
                        }
                            <h2 style={{fontWeight: "600"}}>Why Choose Jupiter Consultant for Your UK Tourist Visa?</h2>
                            <p><b>Expert Guidance:</b> Navigating the UK visa application process can be complex, but our team of experienced consultants is here to simplify it for you. We stay up to date with the latest visa regulations to ensure your application is accurate and complete.</p>
                            <p><b>Personalized Support:</b> Your travel plans are as unique as you are. Whether you're looking to explore the historic streets of London, the natural beauty of the Scottish Highlands, or the cultural diversity of Wales, we tailor our services to meet your specific needs.</p>
                            <p><b>Efficiency:</b> We streamline the visa application process to save you time and reduce the risk of errors. With our support, you can embark on your UK adventure with peace of mind.</p>
                            <p><b>24/7 Assistance:</b> Travel plans often extend beyond traditional business hours. Our team is available around the clock to assist you with any visa-related inquiries or emergencies.</p>
                            <br />
                            <br />
                            <h3 style={{fontWeight: "600",fontSize: "24px"}}>Our UK Tourist Visa Services</h3>
                            <p><b>Visa Application Assistance:</b> We provide step-by-step guidance, from documentation preparation to the submission of your UK Tourist Visa application.</p>
                            <p><b>Visa Category Selection:</b> Our experts help you choose the right visa category based on your travel plans, whether it's a holiday, family visit, or sightseeing tour.</p>
                            <p><b>Documentation Review:</b> We meticulously review your documentation to ensure it aligns with the specific requirements of the UK government.</p>
                            <p><b>Visa Interview Preparation:</b> If required, we offer coaching and practice sessions to boost your confidence for the visa interview.</p>
                            <p><b>Visa Renewal and Extension:</b> If your UK adventure extends beyond your initial visa's validity, we can assist you in renewing or extending your tourist visa.</p>
                            <br />
                            <br />
                            <p style={{fontWeight: "600",fontSize: "24px"}}>Explore the United Kingdom</p>
                            <p>The United Kingdom is a country filled with diverse experiences waiting to be explored. Whether you're drawn to the historic landmarks of England, the scenic beauty of Northern Ireland, or the cultural heritage of Scotland, Jupiter Consultant's UK Tourist Visa Services are designed to make your journey to the United Kingdom as smooth as possible.</p>
                            <br />
                            <br />
                            <p style={{fontWeight: "600",fontSize: "24px"}}>Begin Your UK Adventure</p>
                            <p>Your adventure begins with a UK Tourist Visa, and Jupiter Consultant is here to make the process simple and efficient. Let's make your British dreams come true. Contact us today to start planning your journey to this remarkable destination.</p>
                            
                            <br />                            
                            <p>Unlock the beauty of the United Kingdom with Jupiter Consultant's UK Tourist Visa Services.</p>
        </div>
        <div className='col-sm-4'>
            <Contactus />
        </div>
    </div>
    </div>
  )
}

export default page
