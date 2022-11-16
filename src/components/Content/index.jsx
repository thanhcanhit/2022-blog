import React, { useState, useCallback } from "react";
import Category from "./Category/Category";
import Hero from "./Hero/Hero";
import MainContent from "./MainContent/MainContent";

export default function Content() {
	const [category, setCategory] = useState(() => {
		const prev = window.localStorage.getItem("TC_CATEGORY");
		return JSON.parse(prev) || 0;
	});

	const [sortType, setSortType] = useState("date");

	const handleChangeCategory = useCallback((index) => {
		window.localStorage.setItem("TC_CATEGORY", index);
		setCategory(index);
	}, []);

	const handleChangeSortType = useCallback((type) => {
		setSortType(type);
	}, []);

	return (
		<main>
			<Hero />
			<Category active={category} changeCategory={handleChangeCategory} />
			<MainContent
				current={category}
				sortType={sortType}
				changeSortType={handleChangeSortType}
			/>
		</main>
	);
}
