import { useRef, useState } from "react";
import { Link } from "react-scroll";
import Button from "../Button/Button";
import { SiFacebook } from "react-icons/si";
import { HiSun, HiMenuAlt1 } from "react-icons/hi";
import { RiMoonClearFill } from "react-icons/ri";
import { MdCloseFullscreen } from "react-icons/md";
import useDarkMode from "../../useDarkMode";

export default function Header({ isTablet, isPrimary }) {
	const [isDarkMode, toggleDarkMode] = useDarkMode();
	const [isOpenMenu, setOpenMenu] = useState(false);

	const toggleMenu = useRef(() => {
		setOpenMenu((prev) => !prev);
	});

	return (
		<header className="fixed inset-0 bottom-[unset] w-full h-header z-10 dark:text-dark-grey bg-white dark:bg-dark-black shadow-heading dark:shadow-lg">
			<div className="flex justify-between items-center h-full container">
				<div className="flex w-full lg:w-auto justify-between lg:justify-start gap-5 items-center ">
					<a
						href="/"
						className="font-semibold text-24 md:text-36 tooltip"
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
						className="relative top-1 select-none tooltip after:top-10"
					>
						{isDarkMode ? (
							<RiMoonClearFill
								fontSize={22}
								className="text-yellow animate-wiggle"
							/>
						) : (
							<HiSun
								fontSize={28}
								className="text-yellow animate-spinSlow"
							/>
						)}
					</button>
				</div>
				{isPrimary && (
					<nav
						className={
							isTablet && isOpenMenu
								? "nav translate-x-0"
								: isTablet && !isOpenMenu
								? "nav"
								: "hidden lg:block"
						}
					>
						<ul
							className={
								isTablet
									? "nav-list flex-col px-4 mt-12 "
									: "nav-list"
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
									offset={-100}
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
				)} 
				{isPrimary && isTablet && (
					<>
						<button
							className="fixed z-10 p-1 bottom-5 right-5 text-white bg-primary dark:bg-gray-600 opacity-80 shadow-md rounded-md "
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
