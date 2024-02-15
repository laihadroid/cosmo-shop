"use client";
import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = (props) => {
	return <Spinner variant="danger" animation="border" size="sm" {...props} />;
};

export default Loader;
