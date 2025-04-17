import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <Container fluid className="p-0">
      <Row noGutters="true">
        <Col md={2} className="p-0">
          <Sidebar />
        </Col>
        <Col md={10} className="p-4">
          <Dashboard />
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;
