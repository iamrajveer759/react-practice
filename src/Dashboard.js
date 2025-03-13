import { Outlet, NavLink } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <NavLink to="profile" className="nav-link">Profile</NavLink> |  
        <NavLink to="settings" className="nav-link">Settings</NavLink>
      </nav>

      <hr />

      <Outlet /> {/* Loads nested routes inside Dashboard */}
    </div>
  );
}


export default Dashboard;
