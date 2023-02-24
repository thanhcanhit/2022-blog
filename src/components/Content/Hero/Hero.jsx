import React from "react";
import HeroImg from "../../../assets/img/hero.png";
import { Link } from "react-scroll";
import { FaChevronDown } from "react-icons/fa";

function Hero() {
	return (
		<section
			id="hero"
			className="relative w-full bg-light-grey-2 dark:bg-zinc-800 dark:text-dark-grey pt-[150px] lg:pt-[200px] pb-[200px] lg:pb-[300px] bg-hero-pattern bg-repeat"
		>
			<div className="container flex flex-col-reverse lg:flex-row items-center text-center lg:text-left gap-[50px] lg:gap-[100px]">
				<div className="max-w-[665px] mt-[50px]">
					<h1 className="heading-1 text-[40px] lg:text-[64px] mb-[50px] lg:mb-[32px]">
						Hi, I'm{" "}
						<span className="block lg:inline-block animate-flyUp text-primary">
							Thanh Cảnh
						</span>
						FullStack dev	
						<span className="block lg:inline text-20 text-primary">
							in future
						</span>
					</h1>
					<p className="text-justify text-dark-grey lg:paragraph-1 lg:border-l-4 lg:border-black dark:lg:border-primary lg:pl-2">
						Phần mềm - Website nhảm nhí và source code của chúng
						
					</p>
				</div>
				<div
					message="Chào mừng bạn đã ghé thăm trang web của mình"
					className="max-w-[550px] tooltip after:block after:min-w-[250px] after:whitespace-normal sm:after:whitespace-nowrap after:animate-pulse"
				>
					<img
						src={HeroImg}
						className="w-full select-none"
						alt="Coder áo xanh lá"
					/>
				</div>
			</div>
			<Link
				to="production"
				spy={true}
				smooth={true}
				offset={-50}
				duration={500}
				message="Đi đến mục sản phẩm"
				className="inline-block absolute left-[50%] bottom-[50px] transform translate-x-[-50%] p-2 text-[24px] lg:text-[28px] cursor-pointer animate-pulse hover:animate-none tooltip hover:text-primary dark:text-primary transition-colors duration-100"
			>
				<FaChevronDown />
			</Link>
		</section>
	);
}

export default React.memo(Hero);
