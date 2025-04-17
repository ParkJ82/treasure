import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Hero() {
  return (
    <section
      style={{
        backgroundColor: "#0D1117",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "4rem",
        paddingBottom: "4rem",
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Left Text Content */}
          <Col md={6} className="mb-5 mb-md-0">
            <h1 className="display-4 fw-bold mb-4">
              Your Finances,<br />Your Treasure
            </h1>
            <p className="text-light mb-4" style={{ color: "#d1d5db" }}>
              Connect your bank accounts, track your spending,<br />
              and see your net worth grow — all in one place.
            </p>
            <Button variant="primary" size="lg">
              Start Tracking Now →
            </Button>
          </Col>

          {/* Right Image */}
          <Col md={6}>
            <img
              src="/hero-graphic.png" // ← place your image in public/hero-graphic.png
              alt="Hero Graphic"
              className="img-fluid rounded shadow"
              style={{
                maxHeight: "400px",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
