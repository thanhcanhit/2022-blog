import React from "react";
import { HiUser, HiPhone, HiMailOpen } from "react-icons/hi";
import { FaSchool } from "react-icons/fa";
import { MdSchool, MdPlace } from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";

export default function Footer() {
	return (
		<footer
			id="about"
			className="bg-light-grey-1 dark:bg-zinc-700 dark:text-light-grey-2 pt-16 pb-6 text-center lg:text-left"
		>
			<div className="container">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-0">
					<div className="md:col-span-2 mb-50 lg:mb-0">
						<div className="font-semibold text-36 mb-4">
							thanh
							<span
								message="Chiến thần 😈"
								className="cursor-help tooltip after:animate-pulse"
							>
								c
							</span>
							anhit
							<span className="font-bold text-18 text-primary">
								.github.io
							</span>
						</div>
						<div
							className="relative w-200 h-200 mx-auto lg:ml-10 mb-4 shadow-md hover:shadow-lg hover:cursor-cell hover:transform hover:scale-105 transition-all duration-200 ease-in-out tooltip after:-bottom-12"
							message="Hai con người này vẫn đang yêu đương nhe 😍"
						>
							<img
								alt="Thanh Cảnh & Ngọc Anh"
								className="w-200 h-200 object-cover rounded-md"
								src="/images/about/about.jpg"
							/>
						</div>
						<div>
							<p className="text-15">
								Câu nói truyền động lực nếu bạn đang buồn:
								<span className="block mt-2 ml-1 italic text-dark-grey">
									"Có thực lực mới buồn, không có sao phải
									buồn"
								</span>
							</p>
						</div>
					</div>
					<div className="footer-col">
						<h4 className="footer-heading">About me</h4>
						<ul>
							<li className="footer-item">
								<HiUser />
								<p>Nguyễn Thanh Cảnh</p>
							</li>
							<li className="footer-item">
								<BsCalendarDate />
								<p>11/03/2003</p>
							</li>
							<li className="footer-item">
								<MdPlace />
								<p>Gia Lai</p>
							</li>
							<li className="footer-item">
								<MdSchool />
								<p>Software Engineer</p>
							</li>
							<li className="footer-item">
								<FaSchool />
								<p>K17 - IUH</p>
							</li>
						</ul>
					</div>
					<div className="footer-col">
						<h4 className="footer-heading">Contact</h4>
						<ul>
							<li className="footer-item">
								<HiPhone />
								<a href="tel:+0325690224">0325690224</a>
							</li>
							<li className="footer-item">
								<HiMailOpen />
								<a href="mailto:thanhcanh.dev@gmail.com">
									thanhcanh.dev@gmail.com
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="mt-50">
					<hr />
					<div className="flex justify-between mt-6">
						<p className="text-primary">@2022ThanhCanh</p>
						<p>Made with ❤️</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
