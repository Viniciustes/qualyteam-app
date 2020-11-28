import React from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/images/qualyteam-logo-negativo.png';

import './styles.css';

export default function NavBar() {
    const history = useHistory();

    return (
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="#" onClick={() => history.push('/')} >
                <img src={Logo} alt="Logo Qualyteam" />
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#" onClick={() => history.push('/indicadorMensal')}>Indicador Mensal</Nav.Link>
                    <Nav.Link href="#" onClick={() => history.push('/coleta')}>Coleta</Nav.Link>
                </Nav>
                <Form inline>
                    <Nav.Link href="#" onClick={() => history.push('/login')}>Sair</Nav.Link>
                </Form>
            </Navbar.Collapse>
        </Navbar >
    );
};
