import React from "react";

export default function SectionTitle({ name }) {
	return (
		<div className="flex justify-between items-center mb-5 lg:mb-8">
			<h4 className="section-name after:hidden md:after:block">{name}</h4>
			{/* <a
						className="text-[14px] font-semibold md:sub-heading-2 hover:text-primary hover:outline-dashed p-2 transition-colors ease-in duration-200 rounded-md"
						href="#1"
					>
						See All Category
					</a> */}
		</div>
	);
}
