import '../css/App.css';
import profilePic from '../img/oladhimeji.jpg'

const HomePage = () => {
  return (
    <div className="App">
      <img src={profilePic} alt="My Pic" id="profile__img" />

      <p><b>Abdulrazaq Oladimeji (Oladhimeji)</b></p> <br />

      {/* Twitter Link */}
      <a href="https://twitter.com/iam_oladhimeji/" 
      target="_blank" id='twitter' className='btn btn-twitter' 
      rel="noopener noreferrer"
      title='My twitter link'>
        Twitter Link
      </a> <br /> <br />

      {/* Slack */}
      <a href="https://twitter.com/" style={{display:'none'}} target="_blank" id='slack' className='btn' 
      rel="noopener noreferrer">
        Slack
      </a>

      {/* Links section */}
      <a href="https://training.zuri.team/" 
      target="_blank" id='btn__zuri' className='btn btn-zuri' 
      rel="noopener noreferrer" title='Zuri training link'>
        Zuri Team
      </a> <br /> <br />

      {/* Zuri Book Link */}
      <a href="https://books.zuri.team/" 
      target="_blank" title='Get books about design and coding' 
      id='books' className='btn btn-book' rel="noopener noreferrer">
        Zuri Books
      </a> <br /> <br />

      {/* Python Book Link */}
      <a href="https://books.zuri.team/python-for-beginners?ref_id=oladhimeji" 
      target="_blank" title='A complete python guide for beginners' 
      id='book__python' className='btn btn-python' rel="noopener noreferrer">
        Python Books
      </a> <br /> <br />

      {/* Background check */}
      <a href="https://background.zuri.team/" 
      target="_blank" title='Certified background checker for coders' 
      id='pitch' className='btn btn-bg' rel="noopener noreferrer">
        Background Check for Coders
      </a> <br /> <br />

      {/* Design Book link */}
      <a href="https://books.zuri.team/design-rules" 
      target="_blank" title='Get free design books from Zuri' 
      id='book__design' className='btn btn-des' rel="noopener noreferrer">
        Design Books
      </a> <br /> <br />

      {/* Contact me link */}
      <a href="/contact" title='Contact me' 
      id='contact' className='btn btn-contact' rel="noopener noreferrer">
        Contact Me
      </a> <br /> <br />
      
      <div className="logo">
        <img src={slack} alt="" />
        <img src={github} alt="" />
      </div>
    </div>
  );
}

export default HomePage;
