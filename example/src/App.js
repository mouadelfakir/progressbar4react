import React, {useState} from 'react'
import './index.css';

import { SimpleProgress, SmartProgress } from 'progressbar4react'
import 'progressbar4react/dist/index.css'

const App = () => {

  const [end, setEnd] = useState(false);

  const progressStyle = {
    fontSize: ".50rem",
    backgroundColor: "#000000",
    borderRadius: 0
  };

  const progressBarStyle = {
    color: "#fff",
    backgroundColor: "red"
  };

  return (
    <>
      <h3>Simple Progress</h3>
      <SimpleProgress striped={true} animated={true} showLabel={true} percentage={60} progressStyle={progressStyle} progressBarStyle={progressBarStyle} />

      <br/>

      <h3>Smart Progress</h3>
      <SmartProgress striped={true} animated={true} finish={end}/>

      <br/>
      <button onClick={() => setEnd(true)}>Finish</button>
    </>
  )
};

export default App
