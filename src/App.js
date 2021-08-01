import React, {useState, useEffect, useRef} from 'react';
import './App.scss';
import PromoPage from './components/PromoPage/PromoPage';

import WordPage from './components/WordPage/WordPage';

function App() {

  let url = 'https://owlbot.info/api/v4/dictionary/';
  const token = 'b159560ab9112e57d762a88cabd5652feaf0292f';
  let params = {
    method: 'GET',
    headers: {
        'Authorization': 'Token ' + token,
    }
} 

  const def = {
    "definitions": [
        {
            "type": 'I could not find anything',
            "definition": null,
            "example": null,
        },
    ],
    "word": 'Ops...',
    "pronunciation": '404'
  }

  const load = {
    "definitions": [
        {
            "type": 'Please wait...',
            "definition": null,
            "example": null,
        },
    ],
    "word": 'Loading',
    "pronunciation": '...'
  }

  const [promo, setPromo] = useState(true);
  const [data, setData] = useState(load);

  async function updateData(value) {
    setPromo(false);
    await getWord(value)
  }

  async function getWord(word) {
    const response = await fetch(`${url}${word}`, params);
    if (!response.ok) {
      setData(def)
      return;
    }
    const newData = await response.json();
    if (newData.length === 1) {
      setData(load);
      return;
    }
    setData(newData);
  }

  // console.log('loadParent');
  // console.log(data);
  // console.log(promo);

  let content = promo ? <PromoPage updateData={updateData}/> : <WordPage data={data} updateData={updateData}/>

  return (
    <div className="app">

      {content}
      {/* <WordPage 
        data={data}
        updateData={updateData}
      />
      <PromoPage updateData={updateData}/> */}
    </div>
  );
}

export default App;
