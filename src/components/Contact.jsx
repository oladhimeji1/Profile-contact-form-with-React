import '../css/contact.css'

const Contact = () =>{
    return(
        <div className="contact-body">
            <form className="contact-form">
                <h2>Contact Me</h2>
                <p>Hi there, contact me to ask me about anything you hav in mind.</p>

                <div className="names">

                    <div className='input-container'>
                    <label htmlFor="fname">First name</label> <br />
                    <input type="text" name="fname" className='inputx' id="first_name" placeholder="Enter your first name" />
                    </div>

                    <div className='input-container'>
                    <label htmlFor="lname">Last name</label> <br />
                    <input type="text"name="lname" className='inputx' id="last_name" placeholder="Enter your last name" />
                    </div>
                </div>

                <label htmlFor="email">Email</label> <br />
                <input type="email" name="email" id="email" placeholder="youremail@gmail.com" />

                <label htmlFor="message">Message</label> <br />
                <textarea name="message" placeholder="Send me a mesage and I'll reply you a soon as possible.." id="message"></textarea>
                <br />
                <label className='comfirmaton' htmlFor="comfirmaton">
                    <input type="checkbox" name="comfirmaton" id="comfirmaton" /> You 
                    agree to providing your data to Oladhimeji who may contact you.
                </label> <br />

                <button title='Send message' className='btn-submit' id="btn__submit">Send message</button>
            </form>
        </div>
    )
}

export default Contact;