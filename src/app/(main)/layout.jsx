import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import { usePathname } from "next/navigation";
import React from "react";
import { Container } from "react-bootstrap";

const MainLayout = ({ children }) => {

	return (
		<>
			<Header />
			<Container className="flex-grow-1">{children}</Container>
			<Footer />
		</>
	);
};

export default MainLayout;
