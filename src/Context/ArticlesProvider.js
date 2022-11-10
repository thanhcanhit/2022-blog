import { createContext } from "react";

// Date format: "MM/dd/yyyy"
const data = [
	{
		id: 9,
		name: "Nerd Card",
		path: "/images/article_section/girl-8.jpg",
		link: "https://thanhcanhit.github.io/nerd-card/",
		date: "10/22/2022",
		description:
			"Trang đơn giản có Darkmode dùng React + Tailwindcss để code",
		tag: "Website",
		srcCode: 'https://github.com/thanhcanhit/nerd-card/tree/main'
	},
	{
		id: 8,
		name: "Lasles VPN Landing Page",
		path: "/images/article_section/girl-1.jpg",
		link: "https://thanhcanhit.github.io/lasles-vpn/",
		date: "10/01/2022",
		description:
			"Landing page đơn giản, sử dụng scss để làm giao diện, thư viện slick carousel để làm slider cuối trang.",
		tag: "Website",
		srcCode: 'https://github.com/thanhcanhit/lasles-vpn'
	},
	{
		id: 7,
		name: "Todo App",
		path: "/images/article_section/girl-2.jpg",
		link: "https://thanhcanhit.github.io/react-todo-app/",
		date: "09/27/2022",
		description:
			"Một phần mềm quản lí việc cần làm đơn giản, được viết hoàn toàn bằng Reactjs. Sử dụng các component của aslatkit.",
		tag: "Application",
		srcCode: 'https://github.com/thanhcanhit/react-todo-app'
	},
	{
		id: 6,
		name: "BR Architects",
		path: "/images/article_section/girl-3.jpg",
		link: "https://thanhcanhit.github.io/BR-architects/",
		date: "09/15/2022",
		description:
			"Giao diện website cơ bản dùng Bootstrap 5 để viết, tiết kiệm rất nhiều thời gian so với CSS thuần",
		tag: "Website",
		srcCode: 'https://github.com/thanhcanhit/BR-architects'
	},
	{
		id: 5,
		name: "The Band",
		path: "/images/article_section/girl-4.jpg",
		link: "https://thanhcanhit.github.io/the-band/",
		date: "08/04/2022",
		description:
			"Website đầu tiên mà F8 hướng dẫn làm, nhưng là phiên bản hoàn thiện hơn, đầy đủ hơn vì giới hạn kiến thức lúc đó không đủ để hoàn thành.",
		tag: "Website",
		srcCode: 'https://github.com/thanhcanhit/the-band'
	},
	{
		id: 4,
		name: "Music Player",
		path: "/images/article_section/girl-9.jpg",
		link: "https://thanhcanhit.github.io/music-player/",
		date: "06/27/2022",
		description:
			'Chào mừng bạn đến với playlist của Changg!. "Phần Mềm" nghe nhạc đơn giản với Js thuần, dưới sự hướng dẫn của F8.',
		tag: "Application",
		srcCode: 'https://github.com/thanhcanhit/music-player'
	},
	{
		id: 3,
		name: "Sum Game",
		path: "/images/article_section/girl-5.jpg",
		link: "https://thanhcanhit.github.io/SumGame/",
		date: "06/16/2022",
		description:
			"Tựa game đơn giản mình làm đầu tiên khi bước vào con đường lập trình. Ban đầu là C++, hiện tại viết bằng Js đem lại giao diện trực quan dễ dùng hơn.",
		tag: "Application",
		srcCode: 'https://github.com/thanhcanhit/SumGame'
	},
	{
		id: 2,
		name: "Từ vựng tiếng anh",
		path: "/images/article_section/girl-7.jpg",
		link: "https://thanhcanhit.github.io/tuvungtienganh2.4/",
		date: "5/18/2022",
		description:
			'Là phần mềm hoàn chỉnh đầu tiên của mình... 1 ứng dụng chạy trên nền console nhưng vẫn sở hữu giao diện khá "dễ chịu".',
		tag: "Application",
		srcCode: 'https://github.com/thanhcanhit/src-code-tvta-2.4'
	},
	{
		id: 1,
		name: "Shopee",
		path: "/images/article_section/girl-10.jpg",
		link: "https://thanhcanhit.github.io/shopee-f8/",
		date: "03/07/2022",
		description:
			"Mô phỏng lại giao diện cơ bản của trang website shọp pe mà ai cũng biết, dưới sự hướng dẫn của F8.",
		tag: "Website",
		srcCode: 'https://github.com/thanhcanhit/shopee-f8'
	},
];

export const ArticlesContext = createContext();

function ActiclesProvider({ children }) {
	return (
		<ArticlesContext.Provider value={data}>
			{children}
		</ArticlesContext.Provider>
	);
}

export default ActiclesProvider;
