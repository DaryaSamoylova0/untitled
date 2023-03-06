import React, {Component} from 'react';
import {Button, Container, FormControl, Navbar, Nav, Form} from "react-bootstrap";
import logo from './book.png';
/*import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";*/

class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="md" bg="info" variant="info">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="50"
                            width="50"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/contacts">Контакты</Nav.Link>
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl
                                type="text"
                                placeholder="Поиск"
                                className="mr-sm-2"
                            />
                            <Button variant="outline-dark">Поиск</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            /*<Router>
                <Switch>
                    <Route exact path="/" companent={Home} />
                    <Route exact path="/" companent={Home} />
                    <Route exact path="/" companent={Home} />
                    <Route exact path="/" companent={Home} />
                </Switch>
            </Router>*/
        );
    }
}

export default Header;