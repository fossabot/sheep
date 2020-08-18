import React, { Component, Fragment as Frag } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/header';

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

class NotFound extends Component {
	render() {
		var color = Math.floor(Math.random()*16777215).toString(16);
        var rgb = hexToRgb(color);
        var bg;
        if(rgb) bg = (rgb.r * 0.299) + (rgb.g * 0.587) + (rgb.b * 0.114) < 186 ? "white" : "black";
        else {
          color = "000";
          bg = "white"
        }

        return (
            <Frag>
            <Header />
        	<div className="App-container">
            
            <section className="App-about">
            <div>
            <p>
            	Sorry! That page wasn't found.{" "}
            	Here's a sheep for your troubles &lt;3
            </p>
            </div>
            <div style={{textAlign: "center"}}>
            <img className="App-sheep" src={"/sheep/"+color} alt="Sheep image" />
            </div>
            </section>
            </div>
            </Frag>
        );
	}
}

export default NotFound;