import React,{useEffect,useState} from 'react'
import './App.css'

const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [again,setAgain] = useState(0)
  const [half,setHalf] = useState(0)
  const [third,setThird] = useState(0)
  let myInterval

  const changeColor = () => {
    if (seconds <= third) {
    document.getElementById("divChange").style.background = 'red';
    }
    else if (seconds <= half) {
      document.getElementById("divChange").style.background = "yellow";
    }
    else if(seconds == 0){
      document.getElementById("divChange").style.background = 'black';
    }
    else if(seconds > half){
    document.getElementById("divChange").style.background = 'green';
    }
  }

  useEffect(() => {
    if (seconds > 0) {
      setHalf(parseInt(again/2))
      setThird(parseInt(again/3))
      myInterval = setTimeout(() => setSeconds(seconds - 1), 1000);
      changeColor();
    } else {
      setSeconds(again);
    }
    return ()=> {
      clearTimeout(myInterval);
    };
  });

  const Start = (e) => {
    e.preventDefault()
    setSeconds(e.target.count.value)
    setAgain(e.target.count.value)
  }

  const Stop = () => {
    setSeconds(0)
    setAgain('')
    clearTimeout(myInterval);
    document.getElementById("divChange").style.background = 'black';
  }

  return (
    <div className="App">
      <div id={'divChange'} style={{
        textAlign:'center',
        width:'300px',
        height:'100px',
        backgroundColor:'grey',
        margin: '0 auto',
        padding: '10px',
        position: 'relative'
        }}>
        <h1 style={{color: 'white'}}>{seconds}</h1>
      </div>
      <div>
        <form onSubmit={Start}> 
        <label for="fname">Enter Value In Seconds:</label>
        <br/>
            <input type='text' name='count' placeholder="Enter Value in seconds..." required/>
            <button type="submit">Start</button>
         </form>
         <button onClick={Stop}>Stop</button>
      </div>
    </div>
  )
  
}
export default App;