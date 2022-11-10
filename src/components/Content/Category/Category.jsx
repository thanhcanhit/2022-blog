import React, { useContext } from "react";
import CategoryCard from "./CategoryCard";
import { CategoryContext } from "../../../Context/CategoryProvider";
import SectionTitle from "../SectionTitle/SectionTitle";

function Category({ active, changeCategory }) {
	const categoryData = useContext(CategoryContext);

	return (
		<section id="category" className="bg-light-grey-1 dark:bg-zinc-700 dark:text-zinc-300">
			<div className="container py-[70px]">
				<SectionTitle name="Browser All Category" />
				<div className="flex gap-[37px] overflow-auto hidden-scrollbar p-[20px] snap-x snap-mandatory">
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
