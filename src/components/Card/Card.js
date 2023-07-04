import { useState } from 'react'
import './card.css'
import Memes from '../../memeData'


const Card = () => {
  const firstRandomImage = Memes[Math.floor(Math.random() * Memes.length)].image
  const [memeState, setMemeState] = useState({
    topName: '',
    bottomName: '',
    memeImage: firstRandomImage
  })

  const [allMemes, setAllMemes] = useState(Memes)
  console.log(Memes)

  const handleClick = () => {
    const newMeme = allMemes[Math.floor(Math.random() * allMemes.length)].image

    setMemeState(prevMeme => ({
      ...prevMeme,
      memeImage: newMeme
    }))
  }

    return (
        <div className='card'>
            <div className='input-container'>
                <input className='input-1' type='text' placeholder=' type some stuff' />
                <input className='input-2' type='text' placeholder=" type some stuff" />
            </div>
            <button className='button' type='button' onClick={handleClick} >Get a new meme image</button>
             <img className='image' src={memeState.memeImage} alt='fry' />
           </div> 
    )
}


export default Card;