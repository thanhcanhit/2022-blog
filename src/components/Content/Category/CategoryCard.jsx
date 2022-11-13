import React from "react";

function CategoryCard({ path, name, isActive, handleClick }) {
	return (
		<article
			className={
				isActive
					? "category-card bg-primary dark:text-white cursor-default opacity-80 shadow-md border-4 border-black dark:border-white transition-all"
					: "category-card"
			}
			onClick={handleClick}
		>
			<div className="mt-16 mb-100 ml-5">
				<img
					className="bg-white p-2 rounded-lg border border-black"
					src={path}
					alt={`Category ${name}`}
					width={60}
					height={60}
				/>
				<h5 className="mt-5 sub-heading-1 overflow-hidden text-ellipsis" title={name}>
					{name}
				</h5>
			</div>
		</article>
	);
}

export default React.memo(CategoryCard);
