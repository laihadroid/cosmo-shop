"use client";
import React from "react";
import styles from "./index.module.scss";
const Test = () => {
	const handleClick = () => {
		alert("Hello");
	};

	return (
		<div className={styles.testComp}>
			<button onClick={handleClick}>Click Me</button>
		</div>
	);
};

export default Test;
