
import React from 'react'
import BlogContainer from '../component/BlogContainer';

const fetchBlogs = async () => {
    try {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        const res = await fetch("http://www.sankalpitsolutions.com/jupiter/api/blog_list.php", requestOptions)
        const data = await res.json()
        return data

    } catch (error) {
        console.log(error)
    }
}

async function page() {
    const blogs = await fetchBlogs()

    return (
        <section className="container-fluid" style={{position: 'relative'}}>
            <h1 style={{ textAlign: "center" }} className='my-3'>Trending Blogs</h1>
            <BlogContainer blogs={blogs} />
        </section>
    )
}

// async function getServerSideProps() {
//     try {
//         var requestOptions = {
//             method: 'GET',
//             redirect: 'follow'
//         };

//         const res = await fetch("http://www.sankalpitsolutions.com/jupiter/api/blog_list.php", requestOptions)
//         const data = await res.json()
//         return {props: {data}}

//     } catch (error) {
//         console.log(error)
//     }
// }

export default page
