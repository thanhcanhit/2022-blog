import React, { useContext, useMemo } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { ArticlesContext } from "../../../Context/ArticlesProvider";
import { CategoryContext } from "../../../Context/CategoryProvider";
import ContentCard from "./ContentCard";

function MainContent({ current }) {
	const articles = useContext(ArticlesContext);
	const categoryData = useContext(CategoryContext);

	const list = useMemo(() => {
		return current === 0
			? articles
			: articles.filter(
					(item) => item.tag === categoryData[current].name
			  );
	}, [current, categoryData, articles]);

	return (
		<section
			id="production"
			className="pt-[80px] pb-[150px] bg-light-grey-2 dark:bg-zinc-800 dark:text-dark-grey"
		>
			<div className="container">
				<section>
					<SectionTitle name={categoryData[current].name} />
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[8px] md:gap[15px] lg:gap-[20px]">
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
