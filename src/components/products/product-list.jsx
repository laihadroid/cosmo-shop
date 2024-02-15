import React from "react";
import { Col, Row } from "react-bootstrap";
import ProductItem from "./product-item";

const ProductList = ({ products }) => {
	return (
		<Row xs={1} sm={2} md={3} lg={4} className="g-3">
			{products.map((item) => (
				<Col key={item.id}>
                    <ProductItem {...item}/>    
                </Col>
			))}
		</Row>
	);
};

export default ProductList;
