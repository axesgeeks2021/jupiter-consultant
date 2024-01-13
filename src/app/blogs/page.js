
import React from 'react'
import BlogContainer from '../component/BlogContainer';

const fetchBlogs = async () => {
    try {
        const res = await fetch("http://www.sankalpitsolutions.com/jupiter/api/blog_list.php", {
            cache: 'no-store',
            next: {
                revalidate: 20,
            }
        })
        const data = await res.json()
        return data

    } catch (error) {
        console.log(error)
    }
}

async function page() {
    const blogs = await fetchBlogs()
    console.log('hekki', blogs)
    return (
        <section className="container-fluid" style={{position: 'relative'}}>
            <h1 style={{ textAlign: "center" }} className='my-3'>Trending Blogs</h1>
            <BlogContainer blogs={blogs} />
        </section>
    )
}


export default page
