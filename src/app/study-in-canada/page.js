import React from 'react'
import Contactus from '../component/Contactus'
import Pagestestimonials from '../component/Pagestestimonials';


const fetchLink = async () => {
  try {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    const res = await fetch(`https://www.sankalpitsolutions.com/jupiter/api/genrate_link.php?page=study-in-canada`, requestOptions)
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
          <h1>Know why study in Canada is so popular with Indian students.</h1>
          <p>the popularity of studying in Canada among Indian students can be attributed to the
            combination of quality education, diverse opportunities, a welcoming environment,
            the potential for post-study work and immigration, and the overall high quality of
            life. These factors make Canada an attractive destination for Indian students
            looking to pursue their higher education and future careers.</p>
          {
            link !== undefined ?
              <iframe width="100%" height="315" id="youtubeiframe"
                src={link?.data?.link} style={{ margin: "20px 0" }}
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe> : null
          }
          <h2 style={{ fontWeight: "600" }}>Cost to study in Canada</h2>
          <p>The cost of studying in Canada can vary significantly based on several factors,
            including the type of program, institution, location, and your lifestyle. Here are
            some key expenses to consider when planning to study in Canada:</p>
          <p><b>Tuition Fees:</b>Tuition fees vary depending on the level of education and the
            specific program or course. Canadian universities and colleges typically set their
            own tuition rates. On average, international students can expect to pay between CAD
            15,000 to CAD 35,000 per year for undergraduate programs and CAD 10,000 to CAD
            35,000 per year for postgraduate programs. Some professional or specialized programs
            may have higher tuition fees.</p>
          <p><b>Application Fees:</b> When applying to Canadian institutions, you may need to pay
            application fees, which can range from CAD 100 to CAD 250 per application.</p>
          <p><b>Cost of Living:</b> The cost of living varies by location, with larger cities
            generally being more expensive than smaller towns. Monthly living expenses,
            including accommodation, food, transportation, and personal expenses, can range from
            CAD 800 to CAD 2,000 or more. You should research the cost of living in your chosen
            city or region.</p>
          <p><b>Accommodation:</b> Accommodation costs depend on whether you choose to live
            on-campus or off-campus. On-campus housing can range from CAD 3,000 to CAD 10,000
            per academic year, while off-campus options (apartments or shared housing) can vary
            widely based on location and the type of accommodation.</p>
          <p><b>Health Insurance:</b> Most provinces in Canada require international students to
            have health insurance. Some institutions include health insurance in their tuition
            fees, while others may require you to purchase it separately. The cost can range
            from CAD 600 to CAD 1,200 per year.</p>
          <p><b>Books and Supplies:</b> The cost of textbooks and course materials can vary by
            program but typically range from CAD 500 to CAD 1,500 per year.</p>
          <p><b>Transportation:</b> Transportation costs will depend on your location and how you
            choose to get around. Public transportation passes can cost around CAD 80 to CAD 150
            per month. Owning a car will involve additional expenses, including insurance, fuel,
            and maintenance.</p>
          <p><b>Personal Expenses:</b> This category includes expenses such as clothing,
            toiletries, entertainment, and other personal items. The amount can vary depending
            on your lifestyle but is typically estimated at CAD 500 to CAD 1,000 per month.</p>
          <p><b>Student Fees:</b> Some institutions charge additional fees for services such as
            student associations, recreation, and technology. These fees can range from CAD 100
            to CAD 500 per year.</p>
          <p><b>Visa and Permit Fees:</b> You'll need to budget for the cost of a study permit and
            a visitor visa or an electronic travel authorization (eTA) if applicable. Study
            permit fees are CAD 150, while the cost of a visitor visa or eTA is CAD 100. </p>
          <p><b>Language Proficiency Tests:</b> If you are required to take language proficiency
            tests such as IELTS or TOEFL, budget for the test fees, which can range from CAD 250
            to CAD 325.<br /><br />
            To get an accurate estimate of the cost to study in Canada, you should research the
            specific programs and institutions you're interested in and consider your personal
            expenses and financial resources. Many institutions also provide cost of attendance
            information on their websites to help you plan your budget.
          </p>
          <h3 style={{ fontWeight: "600" }}>Scholarships to study in Canada</h3>
          <p>The cost of studying in Canada can vary significantly based on several factors,
            including the type of program, institution, location, and your lifestyle. Here are
            some key expenses to consider when planning to study in Canada:</p>
          <p><b>Vanier Canada Graduate Scholarships:</b> These scholarships are awarded to
            doctoral students pursuing research in the natural sciences, engineering, social
            sciences, and humanities. The scholarship is worth CAD 50,000 per year for up to
            three years.</p>
          <p><b>Canada Graduate Scholarships (CGS):</b> These scholarships are available to both
            Canadian and international students pursuing a master's or doctoral degree in
            Canada. The CGS program is divided into three categories:the Master's CGS, the
            Doctoral CGS, and the Doctoral CGS – Michael Smith Foreign Study Supplements.</p>
          <p><b>Banting Postdoctoral Fellowships:</b> These fellowships are designed for
            postdoctoral researchers, both Canadian and international, who demonstrate
            leadership and exceptional research ability. The fellowship provides CAD 70,000 per
            year for two years.</p>
          <p><b>Government-Funded Scholarships:</b> Various Canadian government departments and
            agencies offer scholarships for international students. For example, the Emerging
            Leaders in the Americas Program (ELAP) provides scholarships to students from Latin
            American and Caribbean countries.</p>
          <p><b>Provincial Scholarships:</b> Many Canadian provinces have their scholarship
            programs for international students. These scholarships are often based on academic
            achievement and vary by province. Examples include the Ontario Trillium Scholarship
            and the Quebec Merit Scholarship for Foreign Students.</p>
          <p><b>Institutional Scholarships:</b> Canadian universities and colleges offer a wide
            range of scholarships and awards for international students based on academic merit,
            leadership, or specific criteria related to a particular field of study. Be sure to
            check the scholarship opportunities at your chosen institution.</p>
          <p><b>Research Scholarships:</b> If you're pursuing research at a Canadian institution,
            you may be eligible for research grants and scholarships in your specific field.
            These can be funded by government agencies, private organizations, or the
            institution itself.</p>
          <p><b>Organization-Specific Scholarships:</b> Certain organizations and foundations in
            Canada offer scholarships to international students. For example, the Pierre Elliott
            Trudeau Foundation Scholarship is open to doctoral candidates in the social sciences
            and humanities.</p>
          <p><b>Non-Governmental Organizations (NGOs):</b> Some Canadian NGOs and international
            organizations provide scholarships for students pursuing specific fields of study,
            such as global development, public health, or human rights.</p>
          <p><b>Foreign Government Scholarships:</b> Some countries offer scholarships to their
            citizens to study in Canada. Check with your home country's government or
            educational agencies for such opportunities.</p>
          <p><b>Merit-Based Scholarships:</b> Many Canadian institutions offer merit-based
            scholarships that consider your academic achievements, extracurricular activities,
            and leadership qualities.</p>
          <p><b>Entrance Scholarships:</b> Some universities and colleges offer entrance
            scholarships to international students based on their high school grades or academic
            records. These are often automatic and do not require a separate application<br /><br />
            To apply for most scholarships, you will need to submit a separate application, and
            deadlines can vary depending on the scholarship program and institution. It's
            essential to research and apply for scholarships well in advance of your planned
            enrollment in a Canadian educational institution. Additionally, check the
            eligibility criteria and application requirements for each scholarship to increase
            your chances of success.
          </p>
          <p style={{ fontWeight: "600", fontSize: "24px" }}>Intakes in Canada</p>
          <p>In Canada, the academic year is generally divided into two main intakes: <b>Fall
            Intake</b> and <b>Winter Intake</b>, with a few institutions offering a
            <b>Spring/Summer Intake</b> as well. Here's a breakdown of these intakes:</p>
          <p style={{ fontSize: "22px", fontWeight: "600" }}>1. Fall Intake:</p>
          <p><b>Starts:</b> Fall intake typically begins in September.</p>
          <p><b>Application Period:</b> Applications for fall intake usually open about a year in
            advance, around the previous fall or early winter (around September to December of
            the year before).</p>
          <p><b>Major Intake:</b> Fall is the major intake in Canadian universities and colleges.
            Most programs, especially at the undergraduate level, start in the fall.</p>
          <p><b>Application Deadline:</b> Deadlines for fall intake applications vary by
            institution and program. It's crucial to check the specific deadline for each
            program you are interested in.</p>
          <p style={{ fontSize: "22px", fontWeight: "600" }}>2. Winter Intake:</p>
          <p><b>Starts:</b> Winter intake begins in January.</p>
          <p><b>Application Period:</b> Applications for winter intake typically open around the
            same time as fall intake, approximately a year in advance (around September to
            December of the year before).</p>
          <p><b>Availability:</b> Winter intake is less common than the fall intake. Not all
            programs may have a winter intake, and the available programs might be limited
            compared to the fall intake.</p>
          <p><b>Application Deadline:</b> Similar to fall intake, deadlines vary by institution
            and program. It's important to check the specific deadlines for winter intake
            programs.</p>
          <p style={{ fontSize: "22px", fontWeight: "600" }}>3. Spring/Summer Intake:</p>
          <p><b>Starts:</b> Spring/Summer intake starts in May.</p>
          <p><b>Application Period:</b> Applications for spring/summer intake usually open around the same time as fall and winter intakes, but the application period might be more limited.</p>
          <p><b>Limited Programs:</b> Spring/summer intake options are limited, and only certain programs may offer this intake.</p>
          <p><b>Application Deadline:</b> Deadlines for spring/summer intake programs vary and might be earlier in the year, around February to April.                                </p>
          <br />
          <br />
          <p style={{ fontSize: "22px", fontWeight: "600" }}>Top courses to study in Canada</p>
          <p>Canada is known for its world-class education system and offers a diverse range of top courses for international students. Here are some of the top courses to study in Canada:</p>
          <br />
          <p><b>Engineering:</b> Canada is renowned for its engineering programs, including civil, mechanical, electrical, and software engineering.</p>
          <p><b>Computer Science and IT:</b> With a thriving tech industry, computer science, data science, and cybersecurity programs are in high demand.</p>
          <p><b>Business and Management:</b> MBA and undergraduate programs in business administration, finance, and marketing are popular choices.</p>
          <p><b>Health Sciences:</b> Canada's medical schools and healthcare programs, such as nursing, pharmacy, and public health, are highly regarded.</p>
          <p><b>Natural Sciences:</b> Programs in biology, chemistry, physics, and environmental science provide a strong scientific foundation.</p>
          <p><b>Finance and Accounting:</b> Financial analysis and accounting programs prepare students for careers in finance.</p>
          <p><b>Hospitality and Tourism:</b> Canada's booming tourism industry makes this field attractive.</p>
          <p><b>Creative Arts:</b> Visual arts, music, theater, and film production are vibrant in Canada.</p>
          <br />
          <br />
          <p style={{ fontSize: "22px", fontWeight: "600" }}>Top universities to study in Canada</p>
          <p>Canada is home to numerous world-class universities renowned for their academic excellence and diverse programs. Some of the top universities in Canada include:</p>
          <p><b>University of Toronto:</b> Known for its strong research programs and international reputation.</p>
          <p><b>University of British Columbia:</b> Offers a wide range of academic disciplines and is recognized for its stunning campus.</p>
          <p><b>McGill University:</b> A prestigious institution with a strong focus on research and innovation.</p>
          <p><b>University of Alberta:</b> Known for its leading programs in science, engineering, and healthcare.</p>
          <p><b>University of Waterloo:</b> Renowned for computer science and engineering.</p>
          <p><b>University of Montreal:</b> A French-language institution known for its research and medical programs.</p>
          <p><b>University of Calgary:</b> Offers a range of programs with a focus on entrepreneurship and innovation.</p>
          <p><b>University of Ottawa:</b> Located in the capital city, known for its law and international affairs programs.</p>
          <p><b>Queen's University:</b> Renowned for business and engineering programs.</p>
          <p><b>Simon Fraser University:</b> Known for its strong academic reputation and innovative research.</p>
          <br />
          <p>These universities provide a world-class education and a welcoming environment for international students.</p>
          <p style={{ fontSize: "22px", fontWeight: "600" }}>Testimonials</p>
          <Pagestestimonials />
        </div>
        <div className='col-sm-4'>
          <Contactus />
        </div>
      </div>
    </div>
  )
}

export default page
