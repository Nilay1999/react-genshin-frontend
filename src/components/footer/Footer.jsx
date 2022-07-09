import React from "react";
import { Card } from "react-bootstrap";

function Footer() {
    return (
        <Card
            expand="md"
            style={{
                border: "none",
                bottom: "10px",
                left: 0,
                right: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "26px",
                marginLeft: "auto",
                marginRight: "auto",
                position: "absolute",
                backgroundColor: "#F8F8F8",
            }}
        >
            <Card.Body className="font-weight-bold text-muted">
                © Genshin-Guide 2022
            </Card.Body>
        </Card>
    );
}

export default Footer;
