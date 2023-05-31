import './card.css'
import Fry from '../Card/cardImage/memeimg.png'
const Card = () => {
    return (
        <div className='card'>
            <div className='input-container'>

            
                <input className='input-1' type='text' />
        
            
                <input className='input-2' type='text' />
            
            </div>
        
                
            <button className='button'>Add new pic</button>
            
        
                <img className='image' src={Fry} alt='fry' />
            
            
        </div>
    )
}


export default Card;