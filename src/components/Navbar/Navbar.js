import React from 'react';
import {Navbar,Nav,FormControl,Button,Form} from 'react-bootstrap';

 

export default function Navbars() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Step Up</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#features">My Assignments</Nav.Link>
                <Nav.Link href="#pricing">Appraisal Review</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
        </div>
    )
}
