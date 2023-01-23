import React from 'react'
import "./contact.css"

function Contact() {
  return (
    <div className='container' id='contact'>
        <h1>Reserve Your Seat</h1>
        <form>
            <input  placeholder='Name'/>
            <input  placeholder='Destination'/>
            <input  placeholder='Company Name'/>
            <input  placeholder='Contact Number'/>
            <input  placeholder='Email'/>
            <button>Send</button>
        </form>
    </div>
  )
}

export default Contact