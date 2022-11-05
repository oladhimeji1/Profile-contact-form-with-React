import { useState } from 'react';
import '../css/contact.css'
import Footer from './Footer';
import slack from '../img/slackw.png'
import github from '../img/github.png'

const Contact = () =>{
    // state for firstname & fname error msg
    const [fname, setFname] = useState('')
    const [isfname, setIsFname] = useState(false)
    const [fstyle, setFStyle] = useState({})

     // state for lastname & lname error msg
    const [lname, setLname] = useState('')
    const [islname, setIsLname] = useState(false)
    const [lstyle, setLStyle] = useState({})

     // state for email & email error msg
    const [email, setEmail] = useState('')
    const [isemail, setIsEmail] = useState(false)
    const [estyle, setEStyle] = useState({})

     // state for message & message error msg
    const [message, setMessage] = useState('')
    const [ismessage, setIsMessage] = useState(false)
    const [mstyle, setMStyle] = useState({})

     // state for checkbox & checkbox border
    const [check, setCheck] = useState(false)
    const [ischeck, setIsCheck] = useState({})

     // state for disableBtn & disableBtn error msg
    const [disable, setDisable] = useState(false)
    const [btnDisable, setBtnDisable] = useState({cursor:'not-allowed',
    backgroundColor:'rgba(0, 0, 255, 0.328)',
    border: '1px solid rgba(0, 0, 255, 0.328)'})

    
    
    const validatForm = (e) => {
        e.preventDefault();
        if(!fname){
            setIsFname(true)
            setFStyle({border:'1px solid red'})
        } else if(!lname){
            setIsLname(true)
            setLStyle({border:'1px solid red'})
        } else if(!email){
            setIsEmail(true)
            setEStyle({border:'1px solid red'})
        } else if(!message){
            setIsMessage(true)
            setMStyle({border:'1px solid red'})
        } else if(!check){
            setIsCheck({outline: '1px solid red'})
        } else{
            setIsFname(false)
            setIsLname(false)
            setIsEmail(false)
            setIsMessage(false)
            setIsCheck({})
            alert('Thank you for submitting your Info')
            setFname('')
            setLname('')
            setEmail('')
            setMessage('')
            setCheck(true)
            setFStyle({})
            setLStyle({})
            setEStyle({})
            setMStyle({})
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

                    <input value={fname}  style={fstyle}
                    onChange={(e)=>{
                        setFname(e.target.value)
                        setIsFname(false)
                        setFStyle({})
                    }} 
                    type="text" name="fname" className='inputx' 
                    id="first_name" placeholder="Enter your first name" />

                    {isfname && <small>Please enter your first name</small>}
                    </div>

                    <div className='input-container'>
                    <label htmlFor="lname">Last name</label> <br />

                    <input value={lname} style={lstyle}
                    onChange={(e)=>{
                        setLname(e.target.value)
                        setIsLname(false)
                        setLStyle({})
                    }} type="text" name="lname" className='inputx' id="last_name" placeholder="Enter your last name" />
                    {islname && <small>Please enter your last name</small>}
                    </div>
                </div>

                <div style={{marginBottom:'10px'}}>
                <label htmlFor="email">Email</label> <br />
                <input value={email} style={estyle}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                        setIsEmail(false)
                        setEStyle({})
                    }} 
                    type="email" name="email" id="email" 
                    placeholder="youremail@gmail.com" />
                {isemail && <small>Your email must contain '@'</small>} <br />
                </div>

                <div style={{marginBottom:'10px'}}>
                <label htmlFor="message">Message</label> <br />
                <textarea name="message" value={message} style={mstyle}
                    onChange={(e)=>{
                        setMessage(e.target.value)
                        setIsMessage(false)
                        setMStyle({})
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
                        setDisable(!disable)
                        setBtnDisable(disable ? {cursor:'not-allowed', 
                        backgroundColor:'rgba(0, 0, 255, 0.328)',
                        border: '1px solid rgba(0, 0, 255, 0.328)'} : {})
                    }}
                    name="comfirmaton" id="comfirmaton" /> You 
                    agree to providing your data to <em><b>Oladhimeji</b></em> who may contact you.
                </label> <br />
                    
                <button
                onClick={!disable ? (e)=>{
                    e.preventDefault()
                } : validatForm} style={btnDisable} title='Send message' 
                className='btn-submit' id="btn__submit">
                    Send message
                </button>
                <div className="logo">
                    <img src={slack} alt="" />
                    <img src={github} alt="" />
                </div>
            </form>

            <Footer />
        </div>
    )
}

export default Contact;