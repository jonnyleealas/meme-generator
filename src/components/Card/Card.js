import { useState, useEffect } from 'react'
import './card.css'
import Memes from '../../memeData'


const Card = () => {
  const [memeState, setMemeState] = useState({
    topText: '',
    bottomText: '',
    memeImage: "https://i.imgflip.com/1ihzfe.jpg",
  })
  
  const [allMemes, setAllMemes] = useState([])
  
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMemes(data.data.memes))
  },[])
  
  console.log(allMemes)

  const handleChange = (e) => {
    const { name, type, value } = e.target
    setMemeState(prevMemeState => {
      return {
        ...prevMemeState,
        [name]: value
      }
    })
  }


  const handleClick = () => {
    const newMeme = allMemes[Math.floor(Math.random() * allMemes.length)].url

    setMemeState(prevMeme => ({
      ...prevMeme,
      memeImage: newMeme
    }))
    console.log(newMeme,"new Meme")
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(memeState)
  }
  return (

    <form className='card' onSubmit={handleSubmit}>
      <div className='input-container'>
        <input
          name="topText"
          onChange={handleChange}
          value={memeState.topText}
          type='text'
          placeholder=" Top Text"
          className='topTextInput'
        />
        <input
          name="bottomText"
          onChange={handleChange}
          value={memeState.bottomText}
          type='text'
          placeholder=" Bottom Text"
          className='bottomTextInput'
        />
      </div>
      <button className='button' type='button' onClick={handleClick} >Get a new meme image</button>
      <button className='button' type='button' onClick={handleSubmit} >Submit</button>
      <div className="memeWrapper">
   

      <img className='image' src={memeState.memeImage} alt='fry' />
     
      <div className='topText'>{memeState.topText}</div>
      <div className='bottomText'>{memeState.bottomText}</div>
      </div>
    </form>

  )
}


export default Card;