import React from 'react'
import TestimonialContainer from '../component/TestimonialContainer';

const fetchTestimonial = async () => {
    try {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        const result = await fetch(`http://www.sankalpitsolutions.com/jupiter/api/testimonials.php?limit`, requestOptions)
        const data = await result.json()
        return data
    } catch (error) {
        console.log(error)
    }
}



async function page() {
    
    const testimonial = await fetchTestimonial()

    return (
        <section>
            <h1 style={{ padding: "10px 20px", borderBottom: "5px dotted #eee" }} className='my-2'>Testimonial</h1>
            <TestimonialContainer testimonial={testimonial} />
        </section>
    )
}

export default page
