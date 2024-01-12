import React from 'react'
import Contactus from '../component/Contactus';

const fetchBlogInformation = async (slug) => {
  try {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    const res = await fetch(`http://www.sankalpitsolutions.com/jupiter/api/blog_info.php?slug=${slug}`, requestOptions)
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

async function page(router) {
  const blogContent = await fetchBlogInformation(router?.params?.blogcontent)

  return (
    <section style={{ width: "100%", padding: "0 20px" }} className="blog__section">
      <div className="img" style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img src={blogContent?.data?.image_path} style={{ width: "80%", objectFit: "cover" }} className="img-fluid" />
      </div>
      <div className="row my-4 ">
        <div className="col-sm-8 " dangerouslySetInnerHTML={{ __html: blogContent?.data?.description?.replaceAll("&amp;quot;", '"').replaceAll("&amp;#39;", "'").replaceAll("amp;", "").replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", '"').replaceAll("className", "class").replaceAll("classname", "class").replaceAll("&amp;nbsp;", "") }}>
        </div>
        <div className="col-sm-4">
          <div className="blog__form" style={{ position: "sticky !important", top: "2% !important" }}>
            <Contactus />
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
