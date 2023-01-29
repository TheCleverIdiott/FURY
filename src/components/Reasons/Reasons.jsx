import React from 'react'
import './Reasons.css'
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
const Reasons = () => {
    return(
        <div className = "Reasons" id='reasons'>
        <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
        </div>
        <div className="right-r">
        <span>some reasons</span>
        <div>
        <span className="stroke-text">why</span>
        <span>choose us?</span>
        </div>
        <div className='details-r'>
        <div>
        <span>
        Our system provides a clean ,comfortable and enjoyable workout environment which one can easily avail at any place they are comfortable with.
        </span>
        </div>
        <div>
        <span>
        We provide a wide range of customised programs depending on the needs of each and every individual. We offer  range of membership options, including short-term, long-term, and pay-as-you-go options, to fit a variety of budgets.
        </span>
        </div>
        <div>
        <span>
        We have a point system which will be given to users after they complete their daily tasks. The points can be exchanged for exciting rewards and goodies which will buff up the Motivation. We have an inbuilt AI Chatbox that makes our system even more user friendly and less challenging.
        </span>
        </div>
        <div>
        <span>
        So stop thinking and Join our Community NOW!!!!.
        </span>
        </div>
        </div>
        </div>
        </div>
    )};

export default Reasons;