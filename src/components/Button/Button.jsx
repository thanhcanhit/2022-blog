import React from "react";

export default function Button({ link, children }) {
	return (
		<a
			className="flex items-center min-w-[100px] py-2 px-4 gap-2 bg-primary text-white dark:text-neutral-700 rounded-md hover:opacity-95 hover:shadow-md hover:transform hover:-translate-y-[2px] duration-200"
			href={link}
		>
			{children}
		</a>
	);
}
