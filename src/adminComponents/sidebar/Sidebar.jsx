import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import {ArticleTwoTone, AddAPhoto} from '@mui/icons-material'
import { Link } from "react-router-dom";
// import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  // const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Bienvenue</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <Link to="/admin/pages">PAGES</Link>
            <Link to="/admin/pages/home" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Home</span>
            </li>
          </Link>
          <Link to="/admin/pages/RGA" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>RGA</span>
            </li>
          </Link>
          <li>
            <AddCircleIcon className="icon" />
            <span>Inscriptions</span>
          </li>
          <li>
            <SportsSoccerIcon className="icon" />
            <span>Séances</span>
          </li>
          <li>
            <ScheduleIcon className="icon" />
            <span>Planning</span>
          </li>
          <li>
            <ShoppingBagIcon className="icon" />
            <span>Boutique</span>
          </li>
          <li>
            <AlternateEmailIcon className="icon" />
            <span>Contact</span>
          </li>
          <p className="title">LIENS</p>
          <li>
            <InsertDriveFileIcon className="icon" />
            <span>Dossier d'inscription</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Réseaux Sociaux</span>
          </li>
          <p className="title">MULTIMEDIA</p>
          <li>
            <AddAPhoto className="icon" />
            <span>Photos</span>
          </li>
          <li>
            <ArticleTwoTone className="icon" />
            <span>Articles</span>
          </li>
          <p className="title">UTILISATEUR</p>

          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        {/* <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div> */}
      </div>
    </div>
  );
};

export default Sidebar;
