import React, { useState } from "react";
import {
  ListNested, BoxArrowLeft
} from "react-bootstrap-icons";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsJustify,
  BsPersonCircle,
} from "react-icons/bs";
import { FaChartLine, FaFileInvoiceDollar } from "react-icons/fa";
import {
  MdOutlineSupervisorAccount,
  MdDashboard,
} from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { Select, MenuItem } from "@mui/material";
import "./SidebarAdmin.css";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { Popover, OverlayTrigger } from 'react-bootstrap';

// import Message from "../pages/pageadmine/message/Message";

const SidebarAdmin = () => {
  const [isSidebarActive, setSidebarActive] = useState(false);
  const [users, setUsers] = useState(10); 
  const navigate = useNavigate(); 

  const logOut = async () => {}

  const toggleSidebar = () => {
    setSidebarActive(!isSidebarActive);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setUsers(value);
    switch (value) {
      case 10:
        navigate("/eleves");
        break;
      case 20:
        navigate("/personnels");
        break;
      case 30:
        navigate("/professeurs");
        break;
      default:
        navigate("/eleves");
    }
  };

  const notificationPopover = (
    <Popover id="notification-popover">
      <Popover.Header className="h3">Notifications</Popover.Header>
      <Popover.Body>
        <ul>
          <li>Bonjour notification 1</li>
          <li>Bonjour notification 2</li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  const messagePopover = (
    <Popover id="message-popover">
      <Popover.Header className="h3">Messages</Popover.Header>
      <Popover.Body>
        <ul>
          <li>Bonjour message 1</li>
          <li>Bonjour message 2</li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  return (
    <div className="mysiderbar">
     <header className="fixed-top">
        <div className="toggle ms-md-3 d-flex gap-3" onClick={toggleSidebar}>
          <ListNested size={20} />
        </div>

        <div className="fw-bold me-md-4 d-flex align-items-center gap-4">
          <OverlayTrigger trigger="click" placement="bottom" overlay={notificationPopover}>
            <div className="icon-wrapper">
              <BsFillBellFill className="iconProfile" />
              <span className="nbrmssg">4</span>
            </div>
          </OverlayTrigger>

          <OverlayTrigger trigger="click" placement="bottom" overlay={messagePopover}>
            <div className="icon-wrapper">
              <BsFillEnvelopeFill className="iconProfile" />
              <span className="nbrmssg">2</span>
            </div>
          </OverlayTrigger>

          <Link to="/profile">
            <BsPersonCircle className="iconProfile" />
          </Link>
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
            <a>
              <span className="icon">
                <MdOutlineSupervisorAccount size={25} />
              </span>
              <span className="title">Users</span>
              <span className="dropdown-select">
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={users}
                  label="Users"
                  onChange={handleChange}
                >
                    <MenuItem value={10}>Eleves</MenuItem>
                    <MenuItem value={20}>Personnels</MenuItem>
                    <MenuItem value={30}>Professeurs</MenuItem>
                </Select>
              </span>
            </a>
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
            <Link to="/" className='out' onClick={logOut}>
              <span className='icon'><BoxArrowLeft size={30}/></span>
              <span className='title'>Deconnecter</span>
            </Link>
          </li>
          {/* <li>
            <Link to="/pointage">
              <span className="icon">
                <MdOutlineTouchApp size={20} />
              </span>
              <span className="title">Pointage</span>
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default SidebarAdmin;
