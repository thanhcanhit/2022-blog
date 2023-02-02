import { createContext } from "react";

// Date format: "MM/dd/yyyy"
const data = [
	{
		id: 13,
		name: "Peach TOEIC",
		path: "/images/article_section/girl-13.jpg",
		link: "/peach-toeic",
		date: "2/2/2023",
		description:
			"Ứng dụng học tập và ôn luyện các từ vựng TOEIC thiết yếu nhất cho các bạn có dự định thi TOEIC",
		tag: ["app"],
		srcCode: "https://github.com/thanhcanhit/peach-toeic",
	},
	{
		id: 12,
		name: "NFT",
		path: "/images/article_section/girl-12.jpg",
		link: "/nft",
		date: "11/27/2022",
		description:
			"Trang quảng cáo sàn NFT các thứ, bản thiết kế lụm ở Figma, sử dụng Tailwindcss.",
		tag: ["web"],
		srcCode: "https://github.com/thanhcanhit/nft",
	},
	{
		id: 11,
		name: "Web.dev",
		path: "/images/article_section/girl-11.jpg",
		link: "/web.dev",
		date: "11/20/2022",
		description:
			"Trang giới thiệu dịch vụ làm website, bản thiết kế lụm ở Figma, sử dụng SCSS.",
		tag: ["web"],
		srcCode: "https://github.com/thanhcanhit/web.dev",
	},
	{
		id: 10,
		name: "Nerd Card",
		path: "/images/article_section/girl-10.jpg",
		link: "/nerd-card",
		date: "10/22/2022",
		description:
			"Website đơn giản thử nghiệm Darkmode. Bấm dô mặt trăng, mặt trời để đổi nhe. Sử dụng React + Tailwindcss.",
		tag: ["web"],
		srcCode: "https://github.com/thanhcanhit/nerd-card/tree/main",
	},
	{
		id: 9,
		name: "Lasles VPN",
		path: "/images/article_section/girl-9.jpg",
		link: "/lasles-vpn",
		date: "10/01/2022",
		description:
			"Landing page giới thiệu dịch vụ VPN, sử dụng SCSS. Dùng thư viện 'slick carousel' để làm SLIDER cuối trang.",
		tag: ["web"],
		srcCode: "https://github.com/thanhcanhit/lasles-vpn",
	},
	{
		id: 8,
		name: "Todo App",
		path: "/images/article_section/girl-8.jpg",
		link: "/react-todo-app",
		date: "09/27/2022",
		description:
			"Phần mềm quản lí việc cần làm. Được viết bằng Reactjs, sử dụng các Component của @aslatkit.",
		tag: ["app"],
		srcCode: "https://github.com/thanhcanhit/react-todo-app",
	},
	{
		id: 7,
		name: "BR Architects",
		path: "/images/article_section/girl-7.jpg",
		link: "/BR-architects",
		date: "09/15/2022",
		description:
			"Website giới thiệu dịch vụ thiết kế công trình, dùng Bootstrap 5 để hiện thực, tiết kiệm rất nhiều thời gian so với CSS thuần.",
		tag: ["web"],
		srcCode: "https://github.com/thanhcanhit/BR-architects",
	},
	{
		id: 6,
		name: "The Band",
		path: "/images/article_section/girl-6.jpg",
		link: "/the-band",
		date: "08/04/2022",
		description:
			"Trang giới thiệu band nhạc, bán vé các thứ.Phiên bản hoàn thiện hơn của website đầu tiên F8 hướng dẫn làm.",
		tag: ["web"],
		srcCode: "https://github.com/thanhcanhit/the-band",
	},
	{
		id: 5,
		name: "Music Player",
		path: "/images/article_section/girl-5.jpg",
		link: "/music-player",
		date: "06/27/2022",
		description:
			"Ứng dụng nghe nhạc đơn giản với Js thuần, dưới sự hướng dẫn của F8. Chào mừng bạn đến với playlist của Changg!. ",
		tag: ["app"],
		srcCode: "https://github.com/thanhcanhit/music-player",
	},
	{
		id: 4,
		name: "Sum Game",
		path: "/images/article_section/girl-4.jpg",
		link: "/SumGame",
		date: "06/16/2022",
		description: "Game tính nhẩm nhảm nhí làm bằng HTML, CSS, JS thuần",
		tag: ["app"],
		srcCode: "https://github.com/thanhcanhit/SumGame",
	},
	{
		id: 3,
		name: "Từ vựng tiếng anh",
		path: "/images/article_section/girl-3.jpg",
		link: "/tuvungtienganh2.4",
		date: "5/18/2022",
		description:
			'Ứng dụng học từ vựng chạy trên nền console nhưng vẫn sở hữu giao diện khá "dễ chịu", làm bằng C++.',
		tag: ["app"],
		srcCode: "https://github.com/thanhcanhit/src-code-tvta-2.4",
	},
	{
		id: 2,
		name: "Blog",
		path: "/images/article_section/girl-2.jpg",
		link: "/Blog",
		date: "04/15/2022",
		description:
			"Website Blog cá nhân đơn giản nhưng khá đẹp mắt viết bằng HTML, CSS thuần.",
		tag: ["web"],
		srcCode: "https://github.com/thanhcanhit/Blog",
	},
	{
		id: 1,
		name: "Shopee Clone",
		path: "/images/article_section/girl-1.jpg",
		link: "/shopee-f8",
		date: "03/07/2022",
		description:
			"Mô phỏng lại giao diện của Shọpee, dưới sự hướng dẫn của F8.",
		tag: ["web"],
		srcCode: "https://github.com/thanhcanhit/shopee-f8",
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
