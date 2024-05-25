import React, { useContext, createContext, useState } from 'react';
import { useNavigate} from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import NotStartedIcon from '@mui/icons-material/NotStarted';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import namelogo from '../assets/img/namelogo.png';
import LandingPage from './LandingPage';
import '../assets/css/sidebar.css';
import '../App.css';

const SidebarContext = createContext();

function SidebarProvider({ children }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <SidebarContext.Provider value={{ expanded, setExpanded }}>
      <div className="body">
        {children}
      </div>
    </SidebarContext.Provider>
  );
}

function Sidebar() {
  const { expanded} = useContext(SidebarContext);
  const navigate = useNavigate();

  return (
    <nav className={`sidebar ${expanded ? '' : 'close'}`}>
      <header>
        <div className="image-text">
          <span className="image" style={{ marginTop: '0.7rem' }}>
            <img src={namelogo} alt="logo" />
          </span>
          <div className="text logo-text">
            <span className="name">SKI-STINT</span>
            <span className="profession">Task Management</span>
          </div>
        </div>
      </header>
      <div className="menu-bar">
        <div className="menu">
          <ul className="menu-links">
            <li className="nav-link" onClick={() => navigate('/')}>
              <HomeIcon className="icon" />
              <span className="text nav-text">Home</span>
            </li>
            <li className="nav-link" onClick={() => navigate("/alltasks")}>
              <AssignmentIcon className="icon" />
              <span className="text nav-text">Assigned Task</span>
            </li>
            <li className="nav-link" onClick={() => navigate("/completedtasks")}>
              <AssignmentTurnedInIcon className="icon" />
              <span className="text nav-text">Task Completed</span>
            </li>
            <li className="nav-link" onClick={() => navigate("/yettasks")}>
              <AssignmentLateIcon className="icon" />
              <span className="text nav-text">Task Pending</span>
            </li>
            <li className="nav-link" onClick={() => navigate("/progresstasks")}>
              <NotStartedIcon className="icon" />
              <span className="text nav-text">Task yet to start</span>
            </li>
            <li className="nav-link" onClick={() => navigate('/users')}>
              <AssignmentIndIcon className="icon" />
              <span className="text nav-text">View users</span>
            </li>
          </ul>
        </div>
        <div className="bottom-content">
          <li className="nav-link" onClick={() => console.log('Logout')}>
            <LogoutIcon className="icon" />
            <span className="text nav-text">Logout</span>
          </li>
        </div>
      </div>
    </nav>
  );
}

function Dashboard() {
  return (
    <section className="home">
      <LandingPage />
    </section>
  );
}

export default function App() {
  return (
    <SidebarProvider>
      <Sidebar />
      <Dashboard />
    </SidebarProvider>
  );
}
