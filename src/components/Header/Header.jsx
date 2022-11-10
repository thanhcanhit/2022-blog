import { Link } from "react-scroll";
import Button from "../Button/Button";
import { SiFacebook } from "react-icons/si";
import { HiSun } from "react-icons/hi";
import { RiMoonClearFill } from "react-icons/ri";
import useDarkMode from "../../useDarkMode";

export default function Header() {
	const [isDarkMode, toggleDarkMode] = useDarkMode();

	return (
		<header className="fixed z-10 top-0 left-0 right-0 w-full h-[80px] dark:text-dark-grey bg-white dark:bg-[#191919] shadow-c1 dark:shadow-lg">
			<div className="flex justify-between items-center h-full container">
				<div className="flex justify-between w-full lg:w-auto lg:justify-start gap-[20px] items-center ">
					<a
						href="/"
						className="font-semibold text-[24px] md:text-36 tooltip"
						message="Trở về trang chủ"
					>
						thanhcanhit
						<span className="font-bold text-14 md:text-18 text-primary">
							.github.io
						</span>
					</a>
					<button
						onClick={toggleDarkMode}
						message="Chuyển chế độ sáng/tối"
						className="relative top-1 animate-bounce select-none tooltip after:top-10"
					>
						{isDarkMode ? (
							<RiMoonClearFill fontSize={22} color="#FEC260" />
						) : (
							<HiSun fontSize={28} color="#FEC260" />
						)}
					</button>
				</div>
				<nav className="hidden lg:block">
					<ul className="flex items-center gap-[50px] sub-heading-2">
						<li className="nav-item">
							<Link
								to="hero"
								spy={true}
								smooth={true}
								offset={-50}
								duration={500}
								href="#1"
							>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="category"
								spy={true}
								smooth={true}
								offset={-60}
								duration={500}
								href="#1"
							>
								Category
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="production"
								spy={true}
								smooth={true}
								offset={-50}
								duration={500}
								href="#1"
							>
								Production
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="about"
								spy={true}
								smooth={true}
								offset={50}
								duration={500}
								href="#1"
							>
								About Me
							</Link>
						</li>
						<li>
							<Button link="https://www.facebook.com/thanhcanhit/">
								<SiFacebook />
								Tìm tôi trên Facebook
							</Button>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
