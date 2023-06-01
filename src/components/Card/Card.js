import './card.css'
import Fry from '../Card/cardImage/memeimg.png'


const Card = (props) => {

    const clickMe = () => {
        return alert('hello')
    }

    return (
        <div className='card'>
            <div className='input-container'>
                <input className='input-1' type='text' placeholder=' type some stuff' />
                <input className='input-2' type='text' placeholder=" type some stuff" />
            </div>
            <button className='button' onClick={clickMe} type='button'>Get a new meme image</button>
            <img className='image' src={Fry} alt='fry' onMouseOver={clickMe} />
            <div>{props.data.name}</div>
           </div> 
    )
}


export default Card;