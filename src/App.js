import logo from './logo.svg';
import './App.css';

function App() {
  function getWindowDimensions(){
    const {innerWidth: width, innerHeight:height} = window
    console.log('width ' + width, 'height ' + height)
    return(
      height,
      width
    )
  }
  console.log(getWindowDimensions())
  return (

    <div className="App">
      
    </div>
  );
}

export default App;
