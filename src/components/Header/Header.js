import './header.css'
import MemeLogo from '../Header/headerImage/Logo.png'

const Header = () => {
    return (
        <div className='header'>
            <img className='meme-logo' src={MemeLogo} alt='memeLogo' />
            <span className='react-project'>React Course - Project 3</span>
        </div>
    )
}

export default Header;