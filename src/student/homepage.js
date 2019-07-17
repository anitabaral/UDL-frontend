import React, { Component } from 'react';

import { Nav } from 'react-bootstrap';

import { Navbar } from 'react-bootstrap';
import './student.css';
class Homepage extends Component {
    render() {
        return (
            <div>

                <div className="row">
                    <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                        <div className="header">
                            Welcome To UDL
                            </div>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                        <div className="subheading">
                            welcome .users
                    </div>
                    </div>
                </div>
                <Navbar bg="dark" variant="dark" >
                    <Nav className="mr-auto">
                        <Nav.Link href="#">Dashboard </Nav.Link>
                        <Nav.Link href="#">Result</Nav.Link>
                        <Nav.Link href="/">Logout</Nav.Link>
                    </Nav>
                </Navbar>
                <h1> hlw </h1>
            </div>
        );
    }
}

export default Homepage;