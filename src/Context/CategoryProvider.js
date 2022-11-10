import { createContext } from "react";

const categoryData = [
	{
		name: "Tất cả",
		path: "images/category/all.png",
	},
	{
		name: "Website",
		path: "images/category/website.png",
	},
	{
		name: "Application",
		path: "images/category/app.png",
	},
	// {
	// 	name: "CSS",
	// 	path: "images/category/css3.png",
	// },
	// {
	// 	name: "Bootstrap",
	// 	path: "images/category/bootstrap.png",
	// },
	// {
	// 	name: "JS",
	// 	path: "images/category/js.png",
	// },
	// {
	// 	name: "SASS",
	// 	path: "images/category/sass.png",
	// },
	// {
	// 	name: "React JS",
	// 	path: "images/category/react.png",
	// },
	// {
	// 	name: "C/C++",
	// 	path: "images/category/cpp.png",
	// },
	// {
	// 	name: "Java",
	// 	path: "images/category/java.png",
	// },
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
