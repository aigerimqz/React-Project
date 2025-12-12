import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Profile.css";
import ProfilePictureUpdater from "../../components/ProfilePictureUpdater";
export default function Profile() {
  const { user, logout } = useAuth();

  if (!user) return <Navigate to="/login" />;

  return (
    <div className="profile__block">
      <h1 className="profile__title">Profile</h1>
      
      
      <ProfilePictureUpdater user={user} />

      <p className="profile__email">{user.email}</p>
      <p className="profile__id">{user.uid}</p>

      {/* <button className="login__btn" onClick={logout}>Logout</button> */}
    </div>
  );
}
