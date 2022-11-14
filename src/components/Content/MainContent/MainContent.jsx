import React, { useContext, useMemo } from "react";
import { ArticlesContext } from "../../../Context/ArticlesProvider";
import { CategoryContext } from "../../../Context/CategoryProvider";
import ContentCard from "./ContentCard";

function MainContent({ current, sortType, changeSortType }) {
	const articles = useContext(ArticlesContext);
	const categoryData = useContext(CategoryContext);

	const list = useMemo(() => {
		const afterFilter =
			current === 0
				? articles
				: articles.filter(
						(item) => item.tag === categoryData[current].name
				  );

		switch (sortType) {
			case "name":
				return afterFilter.sort((a, b) => a.name.localeCompare(b.name));
			case "date":
				return afterFilter.sort((a, b) => {
					return new Date(b.date) - new Date(a.date);
				});
			default:
				return afterFilter.sort((a, b) => b.id - a.id);
		}
	}, [current, sortType, categoryData, articles]);

	return (
		<section
			id="production"
			className="pt-header pb-150 bg-light-grey-2 dark:bg-zinc-800 dark:text-dark-grey"
		>
			<div className="container">
				<section>
					<div className="flex justify-between items-center mb-5 lg:mb-14">
						<h4 className="section-name after:hidden md:after:block">
							{categoryData[current].name}
						</h4>
						<div>
							<label
								htmlFor="sort-type"
								className="hidden md:inline mr-2 text-16 font-semibold"
							>
								Sắp xếp theo
							</label>
							<select
								id="sort-type"
								className="px-2 py-1 rounded-sm text-14 shadow-sm dark:text-dark-grey dark:bg-zinc-600"
								onChange={(e) => {
									changeSortType(e.target.value);
								}}
							>
								<option value="date">Ngày đăng</option>
								<option value="name">Tên</option>
							</select>
						</div>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4 lg:gap-5">
						{list.map((item) => (
							<ContentCard key={item.id} data={item} />
						))}
					</div>
				</section>
			</div>
		</section>
	);
}

export default React.memo(MainContent);
