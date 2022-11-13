import React, { useContext } from "react";
import CategoryCard from "./CategoryCard";
import { CategoryContext } from "../../../Context/CategoryProvider";

function Category({ active, changeCategory }) {
	const categoryData = useContext(CategoryContext);

	return (
		<section
			id="category"
			className="dark:text-white bg-light-grey-1 dark:bg-zinc-700"
		>
			<div className="container py-16">
				<div className="flex justify-between items-center mb-5 lg:mb-8">
					<h4 className="section-name after:hidden md:after:block">
						Danh mục
					</h4>
				</div>
				<div className="flex gap-9 overflow-x-auto overflow-y-hidden hidden-scrollbar p-5 snap-x snap-mandatory">
					{categoryData.map((item, index) => (
						<CategoryCard
							key={index}
							path={item.path}
							name={item.name}
							isActive={index === active}
							handleClick={() => changeCategory(index)}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default React.memo(Category);
