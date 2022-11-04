import { useState } from 'react';
import '../css/contact.css'

const Contact = () =>{

    const [fname, setFname] = useState('')
    const [isfname, setIsFname] = useState(false)
    const [lname, setLname] = useState('')
    const [islname, setIsLname] = useState(false)
    const [email, setEmail] = useState('')
    const [isemail, setIsEmail] = useState(false)
    const [message, setMessage] = useState('')
    const [ismessage, setIsMessage] = useState(false)
    const [check, setCheck] = useState(false)
    const [ischeck, setIsCheck] = useState({})
    
    const validatF = (e) => {
        e.preventDefault();
        if(!fname || !lname || !email || !message || !check){
            setIsFname(true)
            setIsLname(true)
            setIsEmail(true)
            setIsMessage(true)
            setIsCheck({outline: '1px solid red'})
        } else{
            setIsFname(false)
            setIsLname(false)
            setIsEmail(false)
            setIsMessage(false)
            setIsCheck({})
            alert('Thanks for submitting your Info')
        }
        
    }
    return(
        <div className="contact-body">
            <form className="contact-form">
                <h2>Contact Me</h2>
                <p>Hi there, contact me to ask me about anything you have in mind.</p>

                <div className="names">

                    <div className='input-container'>
                    <label htmlFor="fname">First name</label> <br />

                    <input value={fname}
                    onChange={(e)=>{
                        setFname(e.target.value)
                        setIsFname(false)
                    }} 
                    type="text" name="fname" className='inputx' 
                    id="first_name" placeholder="Enter your first name" />

                    {isfname && <small>Please enter your first name</small>}
                    </div>

                    <div className='input-container'>
                    <label htmlFor="lname">Last name</label> <br />

                    <input value={lname}
                    onChange={(e)=>{
                        setLname(e.target.value)
                        setIsLname(false)
                    }} type="text" name="lname" className='inputx' id="last_name" placeholder="Enter your last name" />
                    {islname && <small>Please enter your last name</small>}
                    </div>
                </div>

                <div style={{marginBottom:'10px'}}>
                <label htmlFor="email">Email</label> <br />
                <input value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                        setIsEmail(false)
                    }} 
                    type="email" name="email" id="email" 
                    placeholder="youremail@gmail.com" />
                {isemail && <small>Your email must contain '@'</small>} <br />
                </div>

                <div style={{marginBottom:'10px'}}>
                <label htmlFor="message">Message</label> <br />
                <textarea name="message" value={message}
                    onChange={(e)=>{
                        setMessage(e.target.value)
                        setIsMessage(false)
                    }} 
                    placeholder="Send me a mesage and I'll reply you a soon as possible.." 
                    id="message"></textarea>
                {ismessage && <small>Please enter a message</small>}
                </div>

                <br />
                <label className='comfirmaton' htmlFor="comfirmaton">
                    <input type="checkbox" checked={check} style={ischeck}
                    onChange={()=>{
                        setCheck(!check)
                        setIsCheck({})
                    }}
                    name="comfirmaton" id="comfirmaton" /> You 
                    agree to providing your data to <em><b>Oladhimeji</b></em> who may contact you.
                </label> <br />

                <button
                onClick={validatF} title='Send message' className='btn-submit' id="btn__submit">Send message</button>
            </form>
        </div>
    )
}

export default Contact;