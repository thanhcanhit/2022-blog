import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Content from "./components/Content/index";
import Footer from "./components/Footer";

function App() {
	const [isTablet, setTablet] = useState(() => window.innerWidth < 1023);

	useEffect(() => {
		const handleResize = () => {
			window.innerWidth < 1023 ? setTablet(true) : setTablet(false);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="wrapper tap-hilight-none font-jakarta m-0 p-0 w-full overflow-hidden">
			<Header isTablet={isTablet} />
			<Content />
			<Footer />
		</div>
	);
}

export default App;
