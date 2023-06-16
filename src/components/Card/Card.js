import { useState } from 'react'
import './card.css'
import Memes from '../../memeData'


const Card = () => {
  const [memeState, setMemeState] = useState('')
  
  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * Memes.length)
    const randomImage = Memes[randomIndex].image
     setMemeState(randomImage)

   }
    return (
        <div className='card'>
            <div className='input-container'>
                <input className='input-1' type='text' placeholder=' type some stuff' />
                <input className='input-2' type='text' placeholder=" type some stuff" />
            </div>
            <button className='button' type='button' onClick={handleClick}>Get a new meme image</button>
             <img className='image' src={memeState} alt='fry' />
           </div> 
    )
}


export default Card;