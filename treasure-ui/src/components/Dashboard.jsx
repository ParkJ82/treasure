import React from "react";
import { Container, Row, Col, Card, Button, Badge, ProgressBar } from "react-bootstrap";
import { FaWallet, FaCreditCard, FaChartPie, FaComments } from "react-icons/fa";

function Dashboard() {
  return (
    <Container fluid className="p-0" style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <Row noGutters>
        {/* Sidebar */}
        <Col md={2} className="d-flex flex-column bg-dark text-white p-3" style={{ minHeight: "100vh" }}>
          <div className="mb-5">
            <h4 className="text-primary fw-bold"><span className="fs-2">T</span> Treasure</h4>
          </div>

          <NavItem icon={<FaWallet />} label="My Wallet" active />
          <NavItem icon={<FaCreditCard />} label="My Card" />
          <NavItem icon={<FaChartPie />} label="Finance Chart" />
          <NavItem icon={<FaComments />} label="Recent Transactions" badge="12" />

          <div className="mt-auto pt-4 border-top text-muted small">
            <div className="d-flex align-items-center gap-2">
              <div className="rounded-circle bg-secondary" style={{ width: 16, height: 16 }} />
              <span>Name</span>
            </div>
          </div>
        </Col>

        {/* Main Content */}
        <Col md={10} className="p-4">
          <h3 className="fw-bold mb-1">My Wallet</h3>
          <p className="text-muted mb-4">Track your finances</p>

          {/* Greeting Card */}
          <Card className="mb-4">
            <Card.Body>
              <h5>👋 Hi (Name)!</h5>
              <h2>$124,543</h2>
            </Card.Body>
          </Card>

          {/* Bank Cards */}
          <Row className="mb-4">
            <Col md={4}>
              <Card className="mb-3">
                <Card.Body>
                  <h6>🏦 Chase Bank</h6>
                  <p className="text-muted small mb-1">Last transaction on Apr 12, 2025</p>
                  <strong className="text-primary">$4,300</strong>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-3">
                <Card.Body>
                  <h6>🏦 TD Bank</h6>
                  <p className="text-muted small mb-1">Last transaction on Apr 15, 2025</p>
                  <strong className="text-success">$8,600.50</strong>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-3">
                <Card.Body>
                  <h6>🏦 Bank of America</h6>
                  <p className="text-muted small mb-1">Last transaction on Apr 10, 2025</p>
                  <strong className="text-danger">$1,250</strong>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Credit Cards */}
          <Row>
            <Col md={6}>
              <Card className="mb-3">
                <Card.Body>
                  <h6>💳 Chase Sapphire Preferred</h6>
                  <p className="text-muted small mb-1">Last Paid on Apr 03, 2025</p>
                  <p className="text-primary mb-2">$305.75 / $4,500</p>
                  <ProgressBar now={7} label="7%" />
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-3">
                <Card.Body>
                  <h6>💳 Discover it</h6>
                  <p className="text-muted small mb-1">Last Paid on Apr 06, 2025</p>
                  <p className="text-primary mb-2">$400 / $1000</p>
                  <ProgressBar now={40} label="40%" />
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Add Wallet Card */}
          <Card className="text-center text-primary" style={{ backgroundColor: "#f1f5ff" }}>
            <Card.Body>
              <Button variant="link" className="text-decoration-none fw-bold fs-5">＋ Create New Wallet</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

// Sidebar Nav Item Subcomponent
function NavItem({ icon, label, active, badge }) {
  return (
    <div className={`d-flex align-items-center gap-3 px-2 py-2 rounded mb-2 ${active ? 'bg-primary text-white' : 'text-light'}`} style={{ cursor: "pointer" }}>
      {icon}
      <span className="flex-grow-1">{label}</span>
      {badge && <Badge bg="danger" pill>{badge}</Badge>}
    </div>
  );
}

export default Dashboard;
