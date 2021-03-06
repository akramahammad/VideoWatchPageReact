import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import VideoWatchPage from './VideoWatchPage/VideoWatch';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Route path="/" component={ VideoWatchPage }/>
    </BrowserRouter>
    </div>
  );
}

export default App;
