import '../css/footer.css'
import hng from '../img/hng.JPG'
import Ing from '../img/Ing.JPG'
import zuri from '../img/zuri.JPG'
const Footer = () => {
    return (
        <div className='footer-div'>
            <footer>
                <img src={zuri} alt="" />
                <img src={hng} alt="" />
                <img src={Ing} alt="" />
            </footer>
        </div>
    )
}

export default Footer;