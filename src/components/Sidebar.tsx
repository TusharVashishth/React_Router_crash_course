import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-1/5 border-r p-2">
      <h1 className="text-3xl font-bold mb-2">React Router</h1>
      <ul className="cursor-pointer">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "font-bold" : "")}
        >
          <li className="p-2 border rounded-md mb-2">Home</li>
        </NavLink>
        <NavLink
          to={`/profile/tushar`}
          className={({ isActive }) => (isActive ? "font-bold" : "")}
        >
          <li className="p-2 border rounded-md mb-2">Profile</li>
        </NavLink>
        <Link to="/settings">
          <li className="p-2 border rounded-md mb-2">Settings</li>
        </Link>

        <Link to="/logout">
          <li className="p-2 border rounded-md mb-2">Logout</li>
        </Link>
      </ul>
    </div>
  );
}
