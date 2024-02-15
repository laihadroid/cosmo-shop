"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import "./header.scss";
import menuItems from "./menu.json";
import { signIn, signOut } from "next-auth/react";

const DashboardHeader = () => {
	const pathname = usePathname();

	const handleLogout = () => { 
		const resp =confirm ("Are you sure to logout")
		if(!resp) return
		signOut({callbackUrl:"/"}) 
	 }

	return (
		<Navbar className={`bg-danger mb-3`} expand={false} collapseOnSelect>
			<Container>
				<Navbar.Brand href="#">Product Manager</Navbar.Brand>
				<Navbar.Toggle aria-controls={`dashboardOffcanvas`} />
				<Navbar.Offcanvas
					id={`dashboardOffcanvas`}
					aria-labelledby={`dashboardOffcanvasLabel`}
					placement="start"
				>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title id={`dashboardOffcanvasLabel`}>
							Product Manager
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Nav className="justify-content-end flex-grow-1 pe-3">
							{menuItems.map((item) => (
								<Nav.Link
									key={item.id}
									href={item.url}
									as={Link}
									active={pathname === item.url}
								>
									{item.title}
								</Nav.Link>
							))}

							<Nav.Link onClick={handleLogout}>Signout</Nav.Link>
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
};

export default DashboardHeader;
