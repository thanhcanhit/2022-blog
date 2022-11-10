import Header from "./components/Header/Header";
import Content from "./components/Content/index";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="wrapper font-jakarta m-0 p-0 w-full overflow-hidden">
			<Header />
			<Content />
			<Footer />
		</div>
	);
}

export default App;
