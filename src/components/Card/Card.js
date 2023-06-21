import { useState } from 'react'
import './card.css'
import Memes from '../../memeData'


const Card = () => {
  const [memeState, setMemeState] = useState('')
  const randomFirstMeme = Memes[Math.floor(Math.random() * Memes.length)].image
  
  const handleClick = () => {
    const randomImage = Memes[Math.floor(Math.random() * Memes.length)].image
     setMemeState(randomImage)

   }
    return (
        <div className='card'>
            <div className='input-container'>
                <input className='input-1' type='text' placeholder=' type some stuff' />
                <input className='input-2' type='text' placeholder=" type some stuff" />
            </div>
            <button className='button' type='button' onClick={handleClick}>Get a new meme image</button>
             <img className='image' src={memeState === '' ? randomFirstMeme : memeState} alt='fry' />
           </div> 
    )
}


export default Card;