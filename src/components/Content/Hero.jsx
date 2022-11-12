import React from "react";
import HeroImg from "../../assets/img/hero.png";
import { Link } from "react-scroll";
import { FaChevronDown } from "react-icons/fa";

function Hero() {
	return (
		<section
			id="hero"
			className="relative w-full bg-light-grey-2 dark:bg-zinc-800 dark:text-dark-grey bg-hero-pattern bg-repeat pt-[150px] lg:pt-[200px] pb-[200px] lg:pb-[300px]"
		>
			<div className="container flex flex-col items-center text-center lg:text-left lg:flex-row gap-[50px] lg:gap-[100px]">
				<div className="order-2 lg:order-1 max-w-[665px] mt-[50px]">
					<h1 className="heading-1 text-[40px] lg:text-[64px] mb-[50px] lg:mb-[32px]">
						Hi, I'm {" "}
						<span className="block lg:inline-block text-primary">
							 Thanh Cảnh
						</span>
						Front End Dev
						<span className="block lg:inline text-20 text-primary">
							tập sự
						</span>
					</h1>
					<p className="lg:border-l-4 lg:border-black dark:lg:border-primary lg:pl-2 lg:paragraph-1 text-dark-grey text-justify">
						Trong trang web này mình sẽ đăng tải các phần mềm, trang
						web và source code của chúng trong suốt quá trình học
						tập và nghiên cứu của bản thân.
					</p>
				</div>
				<div
					message="Chào mừng bạn đã ghé thăm trang web của mình 😍"
					className="tooltip order-1 lg:order-2 max-w-[550px] after:animate-pulse after:block"
				>
					<img
						src={HeroImg}
						className="select-none w-full"
						alt="Coder minh họa"
					/>
				</div>
			</div>
			<Link
				to="production"
				spy={true}
				smooth={true}
				offset={-50}
				duration={500}
				message="Đi đến sản phẩm"
				className="inline-block tooltip hover:animate-none cursor-pointer animate-pulse hover:text-primary dark:text-primary transition-colors duration-100 absolute left-[50%] bottom-[50px] transform translate-x-[-50%] p-2 text-[24px] lg:text-[28px]"
			>
				<FaChevronDown />
			</Link>
		</section>
	);
}

export default React.memo(Hero);
