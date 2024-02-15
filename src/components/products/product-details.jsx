import Image from "next/image";
import React from "react";
import { Badge, Col, Row } from "react-bootstrap";

const ProductDetails = ({ product }) => {
	const { title, image, description, category, price } = product;
	return (
		<Row className="g-3">
			<Col md={6}>
				<Image
					src={image}
					alt={title}
					width={500}
					height={500}
					className="img-fluid"
					style={{ width: "100%" }}
				/>
			</Col>
			<Col md={6}>
				<h2>{title}</h2>
				<p>{description}</p>
				<h4>
					<Badge>{category}</Badge>
					<Badge bg="secondary" className="ms-2">${price}</Badge>
				</h4>
			</Col>
		</Row>
	);
};

export default ProductDetails;
