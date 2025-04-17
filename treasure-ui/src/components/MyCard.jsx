import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import { BsCreditCard2Front, BsEyeSlash, BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowRight, FaKey, FaReceipt, FaUserFriends } from "react-icons/fa";
import { MdOutlineChangeCircle } from "react-icons/md";

function MyCard() {
  return (
    <Container fluid className="p-0">
      <Row>
        {/* Sidebar */}
        <Col md={2} className="p-0">
          <Sidebar />
        </Col>

        {/* Main Content */}
        <Col md={10} className="p-4">
          {/* Page Title */}
          <h3 className="fw-bold mb-1">My Card</h3>
          <p className="text-muted mb-4">Track your finances</p>

          <Row>
            {/* Left: Card Details */}
            <Col md={6}>
              {/* Primary Card Label */}
              <Card className="mb-3">
                <Card.Header className="bg-white border-bottom d-flex justify-content-between align-items-center">
                  <span className="fw-semibold">Primary Card</span>
                  <BsThreeDotsVertical />
                </Card.Header>
                <Card.Body>
                  {/* Credit Card UI */}
                  <div
                    className="p-4 rounded mb-3"
                    style={{
                      background: "linear-gradient(to right, #0052D4, #4364F7, #6FB1FC)",
                      color: "white",
                      borderRadius: "12px",
                    }}
                  >
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="fw-bold">Name</div>
                      <img
                        src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                        width={40}
                        alt="mastercard"
                      />
                    </div>
                    <div className="fs-5 mt-4">1234 5678 9012 3456</div>
                  </div>

                  {/* Card Info */}
                  <div className="mb-2">
                    <strong>Card Information</strong>
                  </div>
                  <div className="text-muted small mb-1">Card No.</div>
                  <div className="mb-2">
                    <BsCreditCard2Front className="me-2" />
                    1234 5678 9012 3456
                  </div>

                  <div className="text-muted small mb-1">Expiry date</div>
                  <div className="mb-2">12/28</div>

                  <div className="text-muted small mb-1">CVV (3-digit security code)</div>
                  <div>
                    <BsEyeSlash className="me-2" />
                    ***
                  </div>
                </Card.Body>
              </Card>

              {/* Personalization Box */}
              <Card className="bg-light border-0 d-flex flex-row align-items-center justify-content-between p-3">
                <div>
                  <div className="text-muted small mb-1">
                    See how we can personalize your account:
                  </div>
                </div>
                <Button variant="primary" className="rounded-circle">
                  <FaArrowRight />
                </Button>
              </Card>
            </Col>

            {/* Right: Help Section */}
            <Col md={6}>
              <Card>
                <Card.Header className="bg-white d-flex justify-content-between align-items-center">
                  <strong>See Our Help</strong>
                  <BsThreeDotsVertical />
                </Card.Header>
                <Card.Body className="p-0">
                  <HelpItem iconColor="red" text="Check Your Cash Flow" />
                  <HelpItem iconColor="crimson" text="Change Primary Card" Icon={MdOutlineChangeCircle} />
                  <HelpItem iconColor="blueviolet" text="Pay Tax" />
                  <HelpItem iconColor="dodgerblue" text="Make Invoice" Icon={FaReceipt} />
                  <HelpItem iconColor="teal" text="Refer a Friend" Icon={FaUserFriends} />
                  <div className="text-center p-3">
                    <Button variant="outline-secondary" size="sm">Look More</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

function HelpItem({ text, iconColor, Icon = FaKey }) {
  return (
    <div className="d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
      <div className="d-flex align-items-center gap-2">
        <div
          style={{
            width: 4,
            height: 24,
            backgroundColor: iconColor,
            borderRadius: 2,
          }}
        />
        <span>{text}</span>
      </div>
      <FaArrowRight className="text-muted" />
    </div>
  );
}

export default MyCard;
