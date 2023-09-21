import './App.css';
import {getPhrase} from './apicalls';
import { useState, useEffect } from 'react';

function App() {
const [phraseData, setPhraseData] = useState(null)
const [favePhrase, setFavePhrase] = useState([])

useEffect(() => {
  getPhrase()
  .then(data => {
    console.log(data)
    setPhraseData(data)
  })
  .catch(error => {
    console.log('Error fetching data', error)
  })
}, [])

  return (
    <div>
      {/* <h1>This is my header</h1> */}
      {phraseData ? (
        <p>{phraseData.message}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
