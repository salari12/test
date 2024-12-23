import logo from './logo.svg';
import './App.css';
import data from "./data.json"
import React from 'react'
import ReactDOM from 'react-dom'
import { SocialIcon } from 'react-social-icons'
function App() {
  return (
    <div className="App">
      <div className='navigation'>
      </div>
      <div className='fullpage_first'>
        <h1 className='title'>
          {data.title}
          <h2>
          {data.subtitle}
        </h2>
        </h1>
        {
          Object.keys(data.links).map(key => {
            return(
              <SocialIcon url={data.links[key]} />
            )
          })
        }
      </div>
      <div className='fullpage_second'>
        <h3>
          {data.sections[0].title}
        </h3>
        <p>
          {data.sections[0].items[0].content}
        </p>
      </div>
      <div className='fullpage_third'>
      </div>
    </div>
  );
}

export default App;
