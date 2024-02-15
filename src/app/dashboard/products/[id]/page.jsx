import EditProductForm from "@/components/dashboard/products/edit-product-form";
import { config } from "@/utils/config";
import React from "react";

const DashboardProductDetailsPage = async ({ params }) => {
	const resp = await fetch(`${config.apiURL}/products/${params.id}`);
	const product = await resp.json();

	return (
		<div>
			<EditProductForm product={product} />
		</div>
	);
};

export default DashboardProductDetailsPage;
