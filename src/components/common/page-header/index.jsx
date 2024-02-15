import React from "react";
import styles from "./index.module.scss";

const PageHeader = ({ title }) => {
	return (
		<h1 className={styles.pageHeader}>
			<span>{title}</span>
		</h1>
	);
};

export default PageHeader;
