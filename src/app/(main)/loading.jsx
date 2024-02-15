import Loader from "@/components/common/loader";
import React from "react";

const LoadingPage = () => {
	return (
		<div className="h-100 d-flex justify-content-center  align-items-center ">
			<Loader size="lg"/>
		</div>
	);
};

export default LoadingPage;
