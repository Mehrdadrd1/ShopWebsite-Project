import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user.value);

  return (
    <div>
      <span>{user.name}</span>
    </div>
  );
};

export default Profile;
