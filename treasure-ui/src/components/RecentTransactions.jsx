import React from "react";
import { Container, Row, Col, Table, InputGroup, FormControl, Button, Dropdown } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import Sidebar from "../components/Sidebar";

const transactions = [
  { id: "962296152", name: "Sherman Blankenship", date: "16 Apr, 2025", status: "Pending", amount: 217.90 },
  { id: "829892537", name: "Claudio Barrera", date: "15 Apr, 2025", status: "Completed", amount: 329.90 },
  { id: "741560657", name: "Clifton Daniel", date: "15 Apr, 2025", status: "Completed", amount: -549.90 },
  { id: "529040347", name: "Curt Boyer", date: "13 Apr, 2025", status: "Completed", amount: -238.90 },
  { id: "398078341", name: "Jeff Proctor", date: "12 Apr, 2025", status: "Completed", amount: -283.90 },
  { id: "197401837", name: "Rodger Fritz", date: "10 Apr, 2025", status: "Completed", amount: 237.90 },
  { id: "197401837", name: "James Kim", date: "09 Apr, 2025", status: "Completed", amount: 102.30 },
  { id: "197401837", name: "Barron Neuman", date: "09 Apr, 2025", status: "Completed", amount: 378.65 },
];

function RecentTransactions() {
  return (
    <Container fluid className="p-0">
      <Row>
        {/* Sidebar */}
        <Col md={2} className="p-0">
          <Sidebar />
        </Col>

        {/* Main Content */}
        <Col md={10} className="p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="fw-bold mb-1">Recent Transactions</h3>

            {/* Search Input */}
            <InputGroup style={{ maxWidth: "250px" }}>
              <FormControl placeholder="Search" />
              <Button variant="primary">
                <FaSearch />
              </Button>
            </InputGroup>
          </div>

          {/* Transactions Table */}
          <Table responsive bordered hover>
            <thead className="table-light">
              <tr>
                <th>Transactions ID</th>
                <th>Name</th>
                <th>Date</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, index) => (
                <tr key={index}>
                  <td>{tx.id}</td>
                  <td>{tx.name}</td>
                  <td>{tx.date}</td>
                  <td>{tx.status}</td>
                  <td style={{ color: tx.amount < 0 ? "red" : "green" }}>
                    {tx.amount < 0 ? `- $${Math.abs(tx.amount).toFixed(2)}` : `$${tx.amount.toFixed(2)}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Pagination */}
          <div className="d-flex justify-content-between align-items-center bg-light p-3 rounded mt-4">
            <div className="d-flex align-items-center gap-2">
              <span className="text-muted">Items per page:</span>
              <Dropdown>
                <Dropdown.Toggle size="sm" variant="outline-secondary">8</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>5</Dropdown.Item>
                  <Dropdown.Item active>8</Dropdown.Item>
                  <Dropdown.Item>10</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="text-muted">
              1 - 8 of 23 <span className="ms-3">« ‹ › »</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default RecentTransactions;
