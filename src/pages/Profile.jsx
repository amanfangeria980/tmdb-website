import { useCredentials } from "../context/UserContext";
import SignOut from "./SignOut";

const Profile = () => {
  const { user, emailId } = useCredentials();
  return (
    <div className="flex flex-col justify-center items-center mt-5 gap-10">
      <span className="text-center font-semibold text-3xl">Profile</span>
      <div className="flex flex-col gap-5 ">
        <span className="font-medium text-xl">username: {user}</span>
        <span className="font-medium text-xl">email: {emailId}</span>
      </div>
      <SignOut />
    </div>
  );
};

export default Profile;
