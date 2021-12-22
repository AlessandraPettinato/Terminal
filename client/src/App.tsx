import Provider from "./api/Provider";
import Desktop from "./components/Desktop/Desktop";
import "./App.css";

function App() {
	return (
		<Provider>
			<Desktop />
		</Provider>
	);
}

export default App;
