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

import { Link } from "react-router-dom";

function Navber() {
  return (
    <navber>
      <ul>
        <li>
          {/* <a href="/">Home</a> */}
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* <a href="/about">About</a> */}
          <Link to="/about">About</Link>
        </li>
        <li>
          {/* <a href="/contact">Contact</a> */}
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          {/* <a href="/dashboard">Dashboard</a> */}
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </navber>
  );
}

export default Navber;
