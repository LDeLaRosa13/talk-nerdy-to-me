import './App.css';
import {getPhrase} from './apicalls';
import { useState, useEffect } from 'react';

function App() {
const [phraseData, setPhraseData] = useState(null)


useEffect(() => {
  getPhrase()
  .then(data => {
    setPhraseData(data)
  })
  .catch(error => {
    console.log('Error fetching data', error)
  })
}, [])

  return (
    <div>
      <h1>This is my header</h1>
      {phraseData ? (
        <p>{phraseData.message}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
