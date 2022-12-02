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
		let dayGap = Math.floor((Date.now() - date) / (1000 * 3600 * 24));
		let string = `${dayGap} ngày trước`;
		if (dayGap === 0) string = "Hôm nay";
		if (dayGap >= 30) string = `${Math.floor(dayGap / 30)} tháng trước`;
		if (dayGap > 365) string = `${Math.floor(dayGap / 365)} năm trước`;

		return string;
	}, [date]);

	return (
		<article className="content-card">
			<a href={data.link} className="group">
				<div className="w-full mb-6 h-[220px] rounded-sm overflow-hidden">
					<img
						className="w-full transition-all duration-300 md:h-card-img object-top object-cover group-hover:scale-110 group-hover:grayscale-[40%]"
						alt={data.name}
						loading="lazy"
						src={data.path}
					/>
				</div>
				<h4
					title={data.name}
					className="group-hover:text-primary duration-200 group-hover:animate-pulse text-15 sub-heading-2 md:text-20 two-line"
				>
					{data.name}
				</h4>
				<p
					title={data.description}
					className="paragraph-4 text-[11px] md:text-13 mb-3 mt-2 text-dark-grey four-line"
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
