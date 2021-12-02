import Provider from "./api/Provider";
import Terminal from "./components/Terminal/Terminal";
import "./App.css";

function App() {
	return (
		<Provider>
			<div className="App">
				<Terminal />
			</div>
		</Provider>
	);
}

export default App;
