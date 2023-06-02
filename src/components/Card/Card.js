import './card.css'
import Fry from '../Card/cardImage/memeimg.png'
import Memes from '../../memeData'


const Card = () => {
    

  const handleClick = () => {
    const memeLength = Memes.length
    const randomNumber = Math.floor(Math.random() * memeLength)
    const newMeme = Memes[randomNumber].name
  console.log('Memes:', randomNumber)
  console.log('Memes:', Memes[randomNumber].name)
    return (
        <div>

        newMeme
        </div>
    )
    
  }


    return (
        <div className='card'>
            <div className='input-container'>
                <input className='input-1' type='text' placeholder=' type some stuff' />
                <input className='input-2' type='text' placeholder=" type some stuff" />
            </div>
            <button className='button' type='button'>Get a new meme image</button>
             <img className='image' src={Fry} alt='fry' onClick={handleClick} />
            {/* <div>{newMeme}</div> */}
           </div> 
    )
}


export default Card;