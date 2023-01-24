import React from 'react'
import "./service.css"
import ServiceData from './ServiceData'
import pic1 from "../assets/ban.jpg"

function Service() {
  return (
    <div className='container' id='service'>
        <h1>Services</h1>
        <p>Lorem Ipsum is simply dummy text</p>
        <div className='servicecard'>
            <ServiceData 
                image={pic1}
                heading="EAZY ERP 4.0"
                text="Enterprise Resource Planning System, a software which made a significant impact in the life of Indian Manufacturers by remodeling their existing manual system of working to Automating it."
            />
            <ServiceData 
                image={pic1}
                heading="EAZY ERP"
                text="A system which was ideally designed to track the activities has travelled leaps and miles from being a mere tracking system to a virtual member that monitors, tracks and guides the users in order to streamline and maintain the operational efficiency of the business."
            />
            <ServiceData 
                image={pic1}
                heading="EAZY ERP"
                text=" ERP players, everyone stating themselves as the best. As we digged down more and more we realized that most of the small & mid size companies still resisting to move towards IT."
            />
            
        </div>
    </div>
  )
}

export default Service