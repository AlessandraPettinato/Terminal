import Provider from "./api/Provider";
import Terminal from "./components/Terminal/Terminal";
import "./App.css";

function App() {
	return (
		<Provider>
			<Terminal />
		</Provider>
	);
}

export default App;
