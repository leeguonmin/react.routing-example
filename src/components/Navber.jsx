// {
/* <nav>
  <ul>
    <li>
      <a href="#home">Home</a>
    </li>
    <li>
      <a href="#about">About</a>
    </li>
    <li>
      <a href="#contact">Contact</a>
    </li>
    <li>
      <a href="#dashboard">Dashboard</a>
    </li>
  </ul>
</nav>; */
// }

import { NavLink } from "react-router-dom";

function Navber() {
  return (
    <navber>
      <ul>
        <li>
          {/* <a href="/">Home</a> */}
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          {/* <a href="/about">About</a> */}
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          {/* <a href="/contact">Contact</a> */}
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          {/* <a href="/dashboard">Dashboard</a> */}
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      </ul>
    </navber>
  );
}

export default Navber;
