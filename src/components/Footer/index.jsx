import React from "react";
import { HiUser, HiPhone, HiMailOpen } from "react-icons/hi";
import { FaSchool } from "react-icons/fa";
import { MdSchool, MdPlace } from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";

export default function Footer() {
	return (
		<footer id="about" className="bg-light-grey-1 dark:bg-zinc-700 dark:text-light-grey-2 pt-[70px] pb-[26px]  text-center lg:text-left">
			<div className="container">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] lg:gap-0">
					<div className="md:col-span-2 mb-[50px] lg:mb-0">
						<div className="font-semibold text-36 mb-[20px]">
							thanh
							<span message='Chiến thần' className="cursor-help after:animate-pulse tooltip">
								c
							</span>
							anhit
							<span className="font-bold text-18 text-primary">
								.github.io
							</span>
						</div>
						<p className="text-[15px]">
							Châm ngôn ưa thích:
								<span className="italic text-dark-grey block mt-[10px] ml-[8px]">
								"Có thực lực mới buồn, không có sao phải buồn" -
								QTV
							</span>
						</p>
						<div></div>
					</div>
					<div className="">
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
					<div>
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
				<div className="mt-[50px]">
					<hr />
					<div className="flex justify-between mt-[26px]">
						<p className="text-primary">@2022ThanhCanh</p>
						<p>Made with ❤️</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
