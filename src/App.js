import './App.css';
import { useEffect } from 'react';


function App() {
  const {innerWidth: width, innerHeight: height} = window
  
  let pixelArr = []
  let pixelSizer = 20
  createPixels()


  function createPixels(){
    for(let x = 0; x < pixelSizer; x++){
      for(let y = 0; y < pixelSizer; y++){
        pixelArr.push({
          xCoord: x,
          yCoord: y
        })
      }
    }
  }



  let pixelMap = pixelArr.map((e) => { //creates all of the "pixels" or squares on the screen (basically a prefab in a way)
    return(
      <div 
        style={{height: pixelSizer, width: width/pixelSizer, height: height/pixelSizer}} 
        className='pixel' 
        id={`y${e.xCoord}`} 
        key={`${e.xCoord}-${e.yCoord}`}
      >

      </div>
    )
  })
  return (
      <div className='pixel-container'>
        {pixelMap}
      </div>
  );
}

export default App;
