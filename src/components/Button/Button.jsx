import React from "react";

export default function Button({ link, children }) {
	return (
		<a
			className="flex items-center gap-[8px] bg-primary dark:text-neutral-700 text-white py-2 px-4 rounded-md hover:opacity-95 min-w-[100px] hover:shadow-md  transform hover:-translate-y-[2px] duration-200"
			href={link}
		>
			{children}
		</a>
	);
}
