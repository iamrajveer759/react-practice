import { Outlet, NavLink } from "react-router-dom";

function Layout() {
  return (
    <div>
      <h1>My Website</h1>
      <nav>
        <NavLink to="/" className="nav-link">Home</NavLink> |  
        <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
      </nav>

      <hr />

      <Outlet /> {/* Loads child routes here */}
    </div>
  );
}

export default Layout;
