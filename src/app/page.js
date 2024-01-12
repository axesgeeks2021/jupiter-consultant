import Image from 'next/image';
import IndexForm from './component/IndexForm';
import Youtube from './component/Youtube';
import Reviews from './component/Reviews';
import Marquee from './component/Marquee';
import Slider from './component/Slider';
import Link from 'next/link';

export default function Home() {

  return (
    <>
      <section className='main'>
      <Slider />
        <div className='contact__form__box mt-4'>
          <h3 style={{ textAlign: "center", color: "#000", fontSize: "42px", fontWeight: "500" }}>Study Abroad with
            Jupiter</h3>
          <div className='contact__form'>
            <div className='contact__form__image'>
              <Image src="/contactform.webp" alt="" width={1000} height={1000} />
            </div>
            <IndexForm />
          </div>
        </div>
        <Youtube />
        <Reviews />
        <div className="container my-5">
          <div style={{ width: "100%", marginBottom: "5rem", backgroundColor: "#eee", padding: "1rem 1rem" }}>
            <p style={{ fontSize: "30px", fontWeight: "600", color: "#000" }}><span
              style={{ borderBottom: "2px solid #388062" }}>Let’s</span> help you live your dream</p>
          </div>
          <div className="row align-items-center jumbo-row">
            <div className="col-lg-4">
              <p className=" jumbo-bg jumbo-bg-pathway first"
                style={{ color: "rgba(0,0,0,0)" }}>Study in
                Australia with Jupiter Consultants Discover your educational aspirations with Jupiter
                Consultants and explore the
                boundless opportunities of studying in Australia. Our expert guidance, personalized
                support, and in-depth knowledge of Australian education will lead you to your dream
                institution. From top-rank.</p>
            </div>
            <div className="col-lg-8 card__content__box">
              <div className="pathway-items">
                <div className="pathway-item">
                  <p className="jumbo-heading jumbo-bg jumbo-bg-pathway " style={{ color: "#388062" }}>Study in
                    Australia with Jupiter Consultants</p>
                  <p className="subheading text-black my-2" >Your Path to Excellence,
                    Guided by Experience</p>
                  <p>Discover your educational aspirations with Jupiter Consultants and explore the
                    boundless opportunities of studying in Australia. Our expert guidance, personalized
                    support, and in-depth knowledge of Australian education will lead you to your dream
                    institution. From top-ranked universities to vibrant cultural experiences, we're
                    your trusted partner on this academic adventure. Begin your journey to excellence
                    and a brighter future today.&nbsp;&nbsp; <Link
                      href="/study-in-australia">Read More...</Link></p>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center jumbo-row">
            <div className="col-lg-4">
              <p className=" jumbo-bg jumbo-bg-pathway jumbo-bg-blue second"
                style={{ color: "rgba(0,0,0,0)" }}>Study in the UK
                with Jupiter Consultants Unlock the doors to exceptional British education through Jupiter
                Consultants. Our
                expert team will guide you through the application process, visa requirements, and
                more, ensuring a seamless transition to the UK. From prestigious un</p>
            </div>
            <div className="col-lg-8 card__content__box">
              <div className="pathway-items">
                <div className="pathway-item">
                  <p className="jumbo-heading jumbo-bg jumbo-bg-pathway jumbo-bg-blue">Study in the UK
                    with Jupiter Consultants</p>
                  <p className="subheading text-black my-2" >Your Gateway to British
                    Education Excellence</p>
                  <p>Unlock the doors to exceptional British education through Jupiter Consultants. Our
                    expert team will guide you through the application process, visa requirements, and
                    more, ensuring a seamless transition to the UK. From prestigious universities to a
                    rich cultural heritage, your academic adventure awaits. Start your journey with us
                    today, and embrace a world of opportunities and knowledge in the UK. &nbsp;&nbsp; <Link
                      href="/study-in-uk">Read More...</Link></p>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center jumbo-row">
            <div className="col-lg-4">
              <p className=" jumbo-bg jumbo-bg-pathway jumbo-bg-blue third "
                style={{ color: "rgba(0,0,0,0)" }}>Study in Canada
                with Jupiter Consultants Your Path to World-Class Canadian Education Jupiter Consultants is
                your trusted partner on your educational journey to Canada.
                Our experienced team will assist you every step of the way, from university
                selection to visa applications, ensuring a smooth transition to Canadian
              </p>
            </div>
            <div className="col-lg-8 card__content__box">
              <div className="pathway-items">
                <div className="pathway-item">
                  <p className="jumbo-heading jumbo-bg jumbo-bg-pathway jumbo-bg-blue">Study in Canada
                    with Jupiter Consultants</p>
                  <p className="subheading text-black" >Your Path to World-Class
                    Canadian Education</p>
                  <p>Jupiter Consultants is your trusted partner on your educational journey to Canada.
                    Our experienced team will assist you every step of the way, from university
                    selection to visa applications, ensuring a smooth transition to Canadian
                    institutions. Explore top-ranked universities, a diverse cultural landscape, and a
                    world of opportunities in the Great White North. Your academic adventure begins
                    here. &nbsp;&nbsp; <Link href="/study-in-canada">Read More...</Link></p></div>
              </div>
            </div>
          </div>
          <div className="row align-items-center jumbo-row">
            <div className="col-lg-4">
              <p className=" jumbo-bg jumbo-bg-pathway jumbo-bg-blue forth"
                style={{ color: "rgba(0,0,0,0)" }}>Visiting Canada
                with Jupiter Consultants Simplify Your Canadian Travel Experience Explore the wonders of
                Canada with the expert guidance of Jupiter Consultants. We
                creating unforgettable memories. Your Canadian adventure awaits</p>
            </div>
            <div className="col-lg-8 card__content__box">
              <div className="pathway-items">
                <div className="pathway-item">
                  <p className="jumbo-heading  jumbo-bg jumbo-bg-pathway">Visiting Canada
                    with Jupiter Consultants</p>
                  <p className="subheading text-black" >Simplify Your Canadian
                    Travel Experience</p>
                  <p>Explore the wonders of Canada with the expert guidance of Jupiter Consultants. We
                    specialize in visitor visas, ensuring a smooth and hassle-free journey to this
                    beautiful country. From majestic landscapes to vibrant cities, let us assist you in
                    creating unforgettable memories. Your Canadian adventure awaits – trust Jupiter
                    Consultants to make it a reality. &nbsp;&nbsp; <Link
                      href="/tourist-in-canada">Read More...</Link></p>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center jumbo-row">
            <div className="col-lg-4">
              <p className=" jumbo-bg jumbo-bg-pathway jumbo-bg-blue fifth"
                style={{ color: "rgba(0,0,0,0)" }}>Visiting the UK
                with Jupiter Consultants Your Gateway to Exploring the United Kingdom Simplify your UK
                travel experience with Jupiter Consultants. We specialize in visitor
                visas, making your journey to the United Kingdom seamless and stress-free. From
              </p>
            </div>
            <div className="col-lg-8 card__content__box">
              <div className="pathway-items">
                <div className="pathway-item">
                  <p className="jumbo-heading  jumbo-bg jumbo-bg-pathway jumbo-bg-blue">Visiting the UK
                    with Jupiter Consultants</p>
                  <p className="subheading text-black" >Your Gateway to Exploring
                    the United Kingdom</p>
                  <p>Simplify your UK travel experience with Jupiter Consultants. We specialize in visitor
                    visas, making your journey to the United Kingdom seamless and stress-free. From
                    iconic landmarks to rich history, let us assist you in creating unforgettable
                    memories. Your British adventure awaits – trust Jupiter Consultants to make it
                    happen. &nbsp;&nbsp; <Link href="/tourist-in-uk">Read More...</Link> </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center jumbo-row">
            <div className="col-lg-4">
              <p className=" jumbo-bg jumbo-bg-pathway jumbo-bg-blue sixth"
                style={{ color: "rgba(0,0,0,0)" }}>Visiting
                Australia with Jupiter Consultants Explore the beauty of Australia with confidence, thanks
                to Jupiter Consultants. We
                specialize in visitor visas, ensuring your journey to the land Down Under is smooth
              </p>
            </div>
            <div className="col-lg-8 card__content__box">
              <div className="pathway-items">
                <div className="pathway-item">
                  <p className="jumbo-heading  jumbo-bg jumbo-bg-pathway jumbo-bg-blue">Visiting
                    Australia with Jupiter Consultants</p>
                  <p className="subheading text-black" >Simplify Your Australian
                    Travel Experience</p>
                  <p>Explore the beauty of Australia with confidence, thanks to Jupiter Consultants. We
                    specialize in visitor visas, ensuring your journey to the land Down Under is smooth
                    and straightforward. From stunning landscapes to unique wildlife, let us help you
                    create unforgettable memories. Your Australian adventure begins here – trust Jupiter
                    Consultants to make it unforgettable. &nbsp;&nbsp; <Link
                      href="/tourist-in-australia">Read More...</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Marquee />
      </section>
    </>
  )
}
