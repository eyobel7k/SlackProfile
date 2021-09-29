import Image from './Image/Eyob.png'
import './App.css';
// import "./img.css"

function App() {
  return (
    <div className="App">
      
      <div className="photo">
        <img alt='Eyobel' src={Image} width="300px" heigh="300px" />
        
     

      </div>
      <div className='Wrapp'>
        <h3>Eyobel Legese he/him {' '}<span className="logged-in">●</span></h3>
        
        <h5>React Native Apprentice</h5>


        </div>
      
      </div>
      
        
    
  );
}

export default App;
