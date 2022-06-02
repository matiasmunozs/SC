//import react into the bundle
import { counter } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

// include your styles into the webpack bundle
import "../styles/index.css";
//import './icons'
// import "./icons.js";

//import your own components

function Counter(props) {
	return (
		<div className="todoslosnumeros">
			<p className="numero">
				{" "}
				<FontAwesomeIcon icon={faClock} />
			</p>
			<p className="numero">{props.numero4 % 10}</p>
			<p className="numero">{props.numero3 % 10}</p>
			<p className="numero">{props.numero2 % 10}</p>
			<p className="numero">{props.numero1 % 10}</p>
		</div>
	);
}

Counter.propTypes = {
	numero4: PropTypes.number,
	numero3: PropTypes.number,
	numero2: PropTypes.number,
	numero1: PropTypes.number,
};
let reloj = 0;
setInterval(function () {
	const cuatro = Math.floor(reloj / 1000);
	const tres = Math.floor(reloj / 100);
	const dos = Math.floor(reloj / 10);
	const uno = Math.floor(reloj / 1);
	console.log(cuatro, tres, dos, uno);
	reloj++;

	//render your react application
	ReactDOM.render(
		<Counter numero1={uno} numero2={dos} numero3={tres} numero4={cuatro} />,
		document.querySelector("#app")
	);
}, 1000);
