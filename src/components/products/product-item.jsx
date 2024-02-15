"use client";
import Image from "next/image";
import React from "react";
import { Badge, Card } from "react-bootstrap";
import "./product-item.scss";
import { useRouter } from "next/navigation";

const ProductItem = ({ id, title, price, image }) => {
	const router = useRouter();

	const handleClick = () => {
		router.push(`/products/${id}`);
	};

	return (
		<Card className="product-card" onClick={handleClick}>
			<div className="image">
				<Image src={image} alt={title} fill className="card-img-top" />
			</div>
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Subtitle>
					<Badge variant="warning">{price}</Badge>
				</Card.Subtitle>
			</Card.Body>
		</Card>
	);
};

export default ProductItem;
