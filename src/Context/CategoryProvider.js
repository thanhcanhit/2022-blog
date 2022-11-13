import { createContext } from "react";

const categoryData = [
	{
		name: "Tất cả",
		path: "images/category/all.png",
		value: "all"
	},
	{
		name: "Website",
		path: "images/category/website.png",
		value: "web"
	},
	{
		name: "Application",
		path: "images/category/app.png",
		value: "app"
	}
];

export const CategoryContext = createContext();

function CategoryProvider({ children }) {
	return (
		<CategoryContext.Provider value={categoryData}>
			{children}
		</CategoryContext.Provider>
	);
}

export default CategoryProvider;
