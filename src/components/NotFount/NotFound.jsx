import React from 'react';
import { Container } from 'react-bootstrap';
import notFound from '../../images/404 Error.svg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not_found">
            <Container>
            <div className="d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
                <img className="notfound-img"  src={notFound} alt="" />
            </div>
        </Container>
        </div>
    );
};

export default NotFound;