import { useState } from 'react'
import './card.css'
import Memes from '../../memeData'


const Card = () => {
    const [imageState, setImageState] = useState('')

  const handleClick = () => {
    const randomName = Memes[Math.floor(Math.random() * Memes.length)].image
    setImageState(randomName)
  }


    return (
        <div className='card'>
            <div className='input-container'>
                <input className='input-1' type='text' placeholder=' type some stuff' />
                <input className='input-2' type='text' placeholder=" type some stuff" />
            </div>
            <button className='button' type='button' onClick={handleClick}>Get a new meme image</button>
             <img className='image' src={imageState} alt='fry' />
              <div>{imageState.id}</div>
           </div> 
    )
}


export default Card;