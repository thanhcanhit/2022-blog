import React, { useState, useCallback } from "react";
import Category from "./Category/Category";
import Hero from "./Hero";
import MainContent from "./MainContent/MainContent";

export default function Content() {
	const [category, setCategory] = useState(() => {
		const prev = window.localStorage.getItem("CATEGORY");
		return JSON.parse(prev) || 0;
	});

	const handleChangeCategory = useCallback((index) => {
		window.localStorage.setItem("CATEGORY", index);
		setCategory(index);
	}, []);

	return (
		<main>
			<Hero />
			<Category active={category} changeCategory={handleChangeCategory} />
			<MainContent current={category} />
		</main>
	);
}
