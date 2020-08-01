 import React, { Component } from "react";
 import TopBar from './TopBar';
 import FootBar from './FootBar';
import Center from './Center';
import './App.css';
class App extends Component {
  render()
  {
  return (
    <div>
 <TopBar/>
   <Center/>
   <FootBar/>
   </div>
  );
}
}

export default App;
