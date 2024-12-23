{
  /* <div>
        <h2 id="dashboard">Dashboard</h2>
        <p>This is the dashboard page</p>
        <ul>
          <li>
            <a href="#profile">Profile for user 1004</a>
          </li>
          <li>
            <a href="#settings">Settings</a>
          </li>
        </ul> */
}

import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2 id="dashboard">Dashboard</h2>
      <p>This is the dashboard page</p>
      <ul>
        <li>
          <a href="#profile">Profile for user 1004</a>
        </li>
        <li>
          <a href="#settings">Settings</a>
        </li>
      </ul>

      {/* <!-- url : /dashboard/profile/1004 --> */}
      {/* <div>
        <h3 id="profile">Profile</h3>
        <p>This is the Profile page for user 1004</p>
      </div> */}

      {/* <!-- url : /dashboard/settings --> */}
      {/* <div>
        <h3>Settings</h3>
        <p>This is the Settings page</p>
      </div>
    </div> */}

      {/* 자식 라우트 렌더링 영역 */}
      <Outlet />
    </div>
  );
}
export default Dashboard;
