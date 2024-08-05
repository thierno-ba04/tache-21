import React, { useState } from "react";
import {
  ListNested,
} from "react-bootstrap-icons";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsJustify,
  BsPersonCircle,
  BsSearch,
} from "react-icons/bs";
import { FaChartLine, FaFileInvoiceDollar } from "react-icons/fa";
import {
  MdOutlineSupervisorAccount,
  MdDashboard,
  MdOutlineTouchApp,
} from "react-icons/md";
import { Link } from "react-router-dom";
// import { Modal, Button, Form } from "react-bootstrap";
import { Select, MenuItem } from "@mui/material";
import "./SidebarAdmin.css";
import { IoCalendarNumberOutline } from "react-icons/io5";

const SidebarAdmin = () => {
  const [isSidebarActive, setSidebarActive] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState(10); // Initial value
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const toggleSidebar = () => {
    setSidebarActive(!isSidebarActive);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (event) => {
    setUsers(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle file and description submission here
    handleCloseModal();
  };

  return (
    <div className="mysiderbar">
      <header className="fixed-top">
        <div className="toggle ms-md-3 d-flex gap-3" onClick={toggleSidebar}>
          <span>
            <ListNested size={20} />
          </span>
        </div>

        <div className="fw-bold me-md-4 d-flex align-items-center gap-4">
          <div className="fa-regular">
            <i className="fa-regular fa-bell"></i>
          </div>
          <span>
            <div className="me-md-4 me-3 nomUser">
              <div className="menu-iconProfile">
                <BsJustify className="iconProfile" />
              </div>
              {/* <div className="header-left">
                <BsSearch className="iconProfile" />
              </div> */}
              <div className="header-right">
                <Link to="/">
                  <BsFillBellFill className="iconProfile" />
                </Link>
                <Link to="/message">
                  <BsFillEnvelopeFill className="iconProfile" />
                </Link>
                <Link to="/profile">
                  <BsPersonCircle className="iconProfile" />
                </Link>
              </div>
            </div>
    
          </span>
        </div>
      </header>

      <nav className={`sidebar ${isSidebarActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link className="toggle" onClick={toggleSidebar}>
              <span className="icon">
                <ListNested size={20} />
              </span>
              <span className="title">Menu</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboardadmin">
              <span className="icon">
                <MdDashboard size={20} />
              </span>
              <span className="title">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/eleves">
              <span className="icon">
                <MdOutlineSupervisorAccount size={25} />
              </span>
              <span className="title">Users</span>
              <span sx={{ minWidth: 120 }} className="dropdown-select">
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={users}
                  label="Users"
                  onChange={handleChange}
                >
                  <Link to="/eleves">
                    <MenuItem>Eleves</MenuItem>
                  </Link>
                  <Link to="/personnels">
                    <MenuItem value={20}>Personnels</MenuItem>
                  </Link>
                  <Link to="/professeurs">
                    <MenuItem value={20}>Professeurs</MenuItem>
                  </Link>
                </Select>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/comptabliter">
              <span className="icon">
                <FaFileInvoiceDollar size={20} />
              </span>
              <span className="title">Comptabiliter</span>
            </Link>
          </li>
          <li>
            <Link to="/calendar">
              <span className="icon">
                <IoCalendarNumberOutline size={20} />
              </span>
              <span className="title">Calendrier</span>
            </Link>
          </li>
          <li>
            <Link to="/statistique" className="out">
              <span className="icon">
                <FaChartLine size={20} />
              </span>
              <span className="title">Statistique</span>
            </Link>
          </li>
          <li>
            <Link to="/pointage">
              <span className="icon">
                <MdOutlineTouchApp size={20} />
              </span>
              <span className="title">Pointage</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SidebarAdmin;
