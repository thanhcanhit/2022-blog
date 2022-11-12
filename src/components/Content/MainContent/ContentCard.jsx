import React, { useMemo } from "react";
import { AiFillGithub } from "react-icons/ai";

function ContentCard({ data }) {
	const date = useMemo(() => {
		return new Date(data.date);
	}, [data.date]);

	const dateFormatted = useMemo(() => {
		return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
	}, [date]);

	const stringGap = useMemo(() => {
		let numDays = Math.floor((Date.now() - date) / (1000 * 3600 * 24));
		let tempString = `${numDays} ngày trước`;
		if (numDays === 0) tempString = "Vừa mới xong hôm nay";
		if (numDays >= 30)
			tempString = `${Math.floor(numDays / 30)} tháng trước`;
		if (numDays > 365)
			tempString = `${Math.floor(numDays / 365)} năm trước`;

		return tempString;
	}, [date]);

	return (
		<article className="bg-white dark:bg-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-600 w-full min-h-[300px] flex flex-col p-[20px] rounded-md shadow-md hover:shadow-lg transition-all 	 duration-200 ease-in-out hover:transform hover:translate-y-[-3px] hover:bg-[#DEF5E5]">
			<a href={data.link}>
				<img
					className="w-full h-[150px] transition-all duration-300 md:h-[220px] object-top object-cover mb-[25px] rounded-sm"
					alt={data.name}
					loading="lazy"
					src={data.path}
				/>
				<h4
					title={data.name}
					className="text-[15px] sub-heading-2 md:text-[20px] two-line"
				>
					{data.name}
				</h4>
				<p
					title={data.description}
					className="paragraph-4 text-[11px] md:text-[13px] mb-[12px] mt-[8px] text-dark-grey four-line"
				>
					{data.description}
				</p>
			</a>
			<div className="paragraph-4 mt-auto">
				<a
					href={data.srcCode}
					className="flex items-center p-2 text-white bg-primary rounded-md mb-2 hover:opacity-90"
				>
					<AiFillGithub fontSize={20} />
					<p className="text-[12px] md:text-16 block text-center flex-1 ">
						Source Code
					</p>
				</a>
				<div className="flex md:flex-row flex-col items-center justify-between">
					<span className="font-bold">{dateFormatted}</span>
					<span className="text-dark-grey italic">- {stringGap}</span>
				</div>
			</div>
		</article>
	);
}

export default React.memo(ContentCard);
