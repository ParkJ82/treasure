import React from "react";
import { Badge } from "react-bootstrap";
import {
  FaWallet,
  FaCreditCard,
  FaChartPie,
  FaComments,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div
      className="d-flex flex-column bg-dark text-white p-3"
      style={{ minHeight: "100vh", width: "100%" }}
    >
      {/* Logo */}
      <div className="mb-5">
        <h4 className="text-primary fw-bold">
          <span className="fs-2">T</span> Treasure
        </h4>
      </div>

      {/* Nav Items */}
      <NavItem icon={<FaWallet />} label="My Wallet" active />
      <NavItem icon={<FaCreditCard />} label="My Card" />
      <NavItem icon={<FaChartPie />} label="Finance Chart" />
      <NavItem icon={<FaComments />} label="Recent Transactions" badge="12" />

      {/* Footer */}
      <div className="mt-auto pt-4 border-top text-muted small">
        <div className="d-flex align-items-center gap-2">
          <div
            className="rounded-circle bg-secondary"
            style={{ width: 16, height: 16 }}
          />
          <span>Name</span>
        </div>
      </div>
    </div>
  );
}

// Subcomponent for each nav item
function NavItem({ icon, label, active, badge }) {
  return (
    <div
      className={`d-flex align-items-center gap-3 px-3 py-2 rounded mb-2 ${
        active ? "bg-primary text-white" : "text-light"
      }`}
      style={{ cursor: "pointer" }}
    >
      <div className="fs-5">{icon}</div>
      <span className="flex-grow-1">{label}</span>
      {badge && (
        <Badge bg="danger" pill>
          {badge}
        </Badge>
      )}
    </div>
  );
}

export default Sidebar;
