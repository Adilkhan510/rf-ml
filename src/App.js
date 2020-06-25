import React, {useEffect} from 'react';
import axios from 'axios'
import './App.css';

function App() {
  useEffect(()=>{
    axios.get('/time')
    .then(res=>{
      console.log(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  })

  return (
    <div className="App">
      <div>

      </div>
    </div>
  );
}

export default App;
