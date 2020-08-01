 import React, { Component } from "react";
 import l from './i/a.jpg';
import x from './i/d.png';
import y from './i/c.gif';
import f from './i/f.jpg';
import e from './i/e.jpg';
import './App.css';
export default class TopBar extends Component {
render(){
	return(
		<div class='lo'>
     <img src={l} alt="l" width="600" height="120"/>
     <img src={f} alt="f" width="160" height="120"/>
     <img src={e} alt="e" width="150" height="120"/>
     <img src={y} alt="y" width="200" height="120"/>
     <img src={x} alt="x" width="200" height="120"/>
    </div>
		)
}
};