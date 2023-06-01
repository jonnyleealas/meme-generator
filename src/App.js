
import './App.css';
import Header from '../src/components/Header/Header'
import Card from '../src/components/Card/Card'
import Memes from './memeData'

function App() {

  const memeData = Memes.map((data) => {

    return (
      <div>
        
        <Card
          id={data.id}
          data={data}
         />
        
       
        
      </div>
    )
  })

  return (
    <div className="App">
      <Header />
   
      {memeData}
    </div>
  );
}

export default App;
