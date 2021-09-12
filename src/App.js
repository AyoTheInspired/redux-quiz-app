import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Questions from "./components/Questions";

const API_URL =
	"https://opentdb.com/api.php?amount=10&category=14&difficulty=easy";

function App() {
	return (
		<div className="App">
			<Questions />
		</div>
	);
}

export default App;
