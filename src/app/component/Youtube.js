"use client"
import { faArrowDown,} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useState} from 'react'

function Youtube() {

    const [showYouTube, setShowYouTube] = useState(false)
  return (
    <div className="youtube__videos">
    <p style={{ fontSize: "34px", fontWeight: "600", marginBottom: 0, alignSelf: 'flex-start', padding: '0px 20px' }}>Know Us</p>
     <div className="youtube__video">
      <iframe src="https://www.youtube.com/embed/qX6VGx3Aa9E?si=G3frCisz_GMmTwkL"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
      <iframe src="https://www.youtube.com/embed/a6IKbTrFFNI?si=Ud4aKtMimajg2iO5"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
      <iframe src="https://www.youtube.com/embed/Xq00Uw02kmQ?si=qg-2aHewmSvVM69Z"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
      <iframe src="https://www.youtube.com/embed/CrOVVgU14jI?si=IJa-LtS4gMibFPtK"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>

    </div>
    <div className="youtube__video" style={{ display: showYouTube ? 'flex' : 'none' }}>
      <iframe src="https://www.youtube.com/embed/HFcy7x1Ig1U?si=VWjjdlO0UwYRZf4T"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
      <iframe src="https://www.youtube.com/embed/OmysXu-j__g?si=-He8i-hFm1IUJjfr"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
      <iframe src="https://www.youtube.com/embed/9A0WXGeiT28?si=LtwC3J_clB9WnAVe"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
      <iframe src="https://www.youtube.com/embed/TcgqYLOm3Y0?si=SJCP0OKfzdUUqmLq"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>

    <div className="view__all">
      <div><span><button style={{ padding: "10px 40px", fontSize: "22px" }}
        className="main__button" onClick={() => setShowYouTube(!showYouTube)}>
        {!showYouTube ? 'View All' : 'Hide'} &nbsp;<FontAwesomeIcon icon={faArrowDown} style={{transition: '0.2s', transform: showYouTube ? 'rotate(180deg)' : 'rotate(0deg)'}}/>
        </button></span>
      </div>
    </div>
  </div>
  )
}

export default Youtube
