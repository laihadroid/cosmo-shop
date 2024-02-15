import PageHeader from "@/components/common/page-header";
import Image from "next/image";
import React from "react";


export const metadata = {
	title: "About",
	description: "You can get luxury electornic devices",
};

//export const dynamic = "force-dynamic";

const AboutPage = ({ params }) => {
	//throw new Error("test")
	return (
		<div>
			<PageHeader title="About"/>
			<Image
				src="https://loremflickr.com/800/400"
				width={800}
				height={400}
        alt="loremflickr"
			/>

			<div className="bg-primary">Hello</div>


		</div>
	);
};

export default AboutPage;
