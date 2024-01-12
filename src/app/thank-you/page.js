import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div id="wrapper" >
    <div className="wrapper__box">
        <h1 className="thank-you">
            <underline>Thank you!</underline>
        </h1>
        <h3>
            We will contact you soon...
        </h3>
        <Link className="goback" href="/">Go Back To Home</Link>
    </div>
</div>
  )
}

export default page
