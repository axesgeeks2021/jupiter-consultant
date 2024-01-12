"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
function IndexForm() {

    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [text, setText] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        service: ""
    })

    const { email, message, name, phone, service } = text

    const handleChange = e => {
        setText({ ...text, [e.target.name]: e.target.value })
    }

    const sendEnquiry = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const formdata = new FormData();
            formdata.append("email", email);
            formdata.append("name", name);
            formdata.append("phone", phone);
            formdata.append("message", message);
            formdata.append("service", service);

            const requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };

            const res = await fetch("https://www.sankalpitsolutions.com/jupiter/api/enquiry.php", requestOptions)
            const data = await res.json()
            setLoading(false)
            if (data?.status === true) {
                return router.push('/thank-you')
            }
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='contact__input__form'>
            <form onSubmit={sendEnquiry}>
                <div
                    className="">
                    <p style={{ textAlign: "center", color: "#000", fontWeight: "600" }}>Fill in your details below to get a personalised
                        advice</p>
                    <div className="single-personal-info">
                        <input value={name} name='name' onChange={handleChange} type="text" placeholder="Your Name" id="firstName"
                            className="username main__input" required />
                    </div>
                    <div className="single-personal-info">
                        <input value={email} name='email' onChange={handleChange} type="email" placeholder="Your e-mail" id="emailId"
                            className="emailid main__input" required />
                    </div>
                    <div className="single-personal-info">
                        <input value={phone} name='phone' onChange={handleChange} type="number" placeholder="Your mobile" id="phoneNo"
                            className="mobile main__input" required />
                    </div>
                    <div className="single-personal-info">
                        <select id="yourservice" className="selectservice main__input" name='service' value={service} onChange={handleChange} required>
                            <option disabled selected value=""> Select your Services</option>
                            <option value="Admission">Admission</option>
                            <option value="Visa Assistance">Visa Assistance</option>
                            <option value="Student Ticketing Service">Student Ticketing Service
                            </option>
                            <option value="Career Counselling">Career Counselling</option>
                            <option value="Sop creation">SOP Creation</option>
                        </select>
                    </div>
                    <div className="single-personal-info">
                        <textarea placeholder="Your Message" value={message} name='message' onChange={handleChange} id="yourmessage"
                            className="yourmessage main__input" defaultValue="Request for service" required></textarea>
                    </div>
                    <button className='main__button'>
                    {
                        loading ? <section style={{width: "100%", display: 'flex', padding: '3px 10px'}}>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </section> : "Get Free Counselling"
                    }
                    </button>
                </div>
            </form>
        </div>
    )
}

export default IndexForm
