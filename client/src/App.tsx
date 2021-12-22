import Provider from "./api/Provider";
import Desktop from "./components/Desktop/Desktop";
import "./App.css";

function App() {
	return (
		<Provider>
			<div className="App">
				<Desktop />
			</div>
		</Provider>
	);
}

export default App;
