{
  /* <div>
  <h3 id="profile">Profile</h3>
  <p>This is the Profile page for user 1004</p>
</div>; */
}

import { useParams } from "react-router-dom";
// 예) /profile/dashboard/123           ->  실제 URL
//      /profile/dashboard/:userid      -> URL 패턴
//      :userid => Path Variable
function Profile() {
  // Path Variable 받아오기
  const { userid } = useParams();
  return (
    <div>
      <h3 id="profile">Profile</h3>
      {/* <p>This is the Profile page for user 1004</p> */}
      <p>This is the Profile page for user {userid}</p>
    </div>
  );
}

export default Profile;
