import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Content from "./components/Content/index";
import Footer from "./components/Footer";

function App() {
	const [isTablet, setTablet] = useState(() => window.innerWidth < 1023);

	useEffect(() => {
		console.log("%cChào bạn 😈", 'font-weight: bold; font-size: 24px; color: #6FC183');
		console.log("%cTrang này mình làm bằng ReactJS + TailwindCSS bạn có thể tham khảo code tại:\nhttps://github.com/thanhcanhit/thanhcanhit.github.io", 'font-weight: bold; font-size: 14px; color: #6FC183');
	}, [])

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
