import React from "react";

function CategoryCard({ path, name, isActive, handleClick }) {
	return (
		<article
			className={
				isActive
					? "category-card bg-primary dark:text-white cursor-default opacity-80 shadow-none border-4 border-black dark:border-white transition-all"
					: "category-card"
			}
			onClick={handleClick}
		>
			<div className="mt-[65px] mb-[95px] ml-[20px]">
				<img
					className="bg-white p-2 rounded-lg outline-dashed outline-slate-600"
					src={path}
					alt={`Category ${name}`}
					width={60}
					height={60}
				/>
				<h5 className="mt-[30px] sub-heading-1 overflow-hidden text-ellipsis">
					{name}
				</h5>
			</div>
		</article>
	);
}

export default React.memo(CategoryCard);
