import { useRef, useState } from "react";
import { Link } from "react-scroll";
import Button from "../Button/Button";
import { SiFacebook } from "react-icons/si";
import { HiSun, HiMenuAlt1 } from "react-icons/hi";
import { RiMoonClearFill } from "react-icons/ri";
import { MdCloseFullscreen } from "react-icons/md";
import useDarkMode from "../../useDarkMode";

export default function Header({ isTablet }) {
	const [isDarkMode, toggleDarkMode] = useDarkMode();
	const [isOpenMenu, setOpenMenu] = useState(false);

	const toggleMenu = useRef(() => {
		setOpenMenu((prev) => !prev);
	});

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
						className="relative top-1 select-none lg:tooltip after:top-10"
					>
						{isDarkMode ? (
							<RiMoonClearFill
								fontSize={22}
								color="#FEC260"
								className=" animate-wiggle"
							/>
						) : (
							<HiSun
								fontSize={28}
								color="#FEC260"
								className=" animate-spinSlow"
							/>
						)}
					</button>
				</div>
				<nav
					className={
						isTablet && isOpenMenu
							? "fixed z-[9] right-0 top-0 bg-white dark:bg-[#191919] bottom-0 shadow-lg transform translate-x-0 transition-transform duration-300"
							: isTablet && !isOpenMenu
							? "fixed z-[9] right-0 top-0 bg-white dark:bg-[#191919] bottom-0 shadow-lg transform translate-x-full transition-transform duration-300"
							: "hidden lg:block"
					}
				>
					<ul
						className={
							isTablet
								? "flex flex-col items-center px-4 mt-12 gap-[50px] sub-heading-2"
								: "flex items-center gap-[50px] sub-heading-2"
						}
					>
						<li className="nav-item">
							<Link
								onClick={
									isTablet ? toggleMenu.current : () => {}
								}
								to="hero"
								spy={true}
								smooth={true}
								offset={-50}
								duration={500}
							>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								onClick={
									isTablet ? toggleMenu.current : () => {}
								}
								to="category"
								spy={true}
								smooth={true}
								offset={-60}
								duration={500}
							>
								Category
							</Link>
						</li>
						<li className="nav-item">
							<Link
								onClick={
									isTablet ? toggleMenu.current : () => {}
								}
								to="production"
								spy={true}
								smooth={true}
								offset={-50}
								duration={500}
							>
								Production
							</Link>
						</li>
						<li className="nav-item">
							<Link
								onClick={
									isTablet ? toggleMenu.current : () => {}
								}
								to="about"
								spy={true}
								smooth={true}
								offset={50}
								duration={500}
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
				{isTablet && (
					<>
						<button
							className="fixed opacity-80 z-10 bottom-5 right-5 text-white bg-primary shadow-md rounded-md p-1 dark:bg-slate-600 dark:text-white"
							onClick={toggleMenu.current}
						>
							{isOpenMenu ? (
								<MdCloseFullscreen fontSize={32} />
							) : (
								<HiMenuAlt1 fontSize={32} />
							)}
						</button>
						{isOpenMenu && (
							<div
								className="fixed inset-0 bg-black opacity-75"
								onClick={toggleMenu.current}
							></div>
						)}
					</>
				)}
			</div>
		</header>
	);
}
