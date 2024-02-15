import Link from "next/link";
import React from "react";

const ProductHeader = () => {
	return (
		<div className="d-flex justify-content-between align-items-center">
			<h2>Products</h2>
			<Link href="/dashboard/products/new">New Product</Link>
		</div>
	);
};

export default ProductHeader;
