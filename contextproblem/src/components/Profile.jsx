import { useAuth } from "../context/AuthContext";

function Profile() {
  const { user, login } = useAuth();

  if (!user) {
    return (
      <button
        onClick={() => login("Deepak")}
        className="bg-blue-500 text-white px-4 py-2"
      >
        Login
      </button>
    );
  }

  return (
    <div className="text-white">
      Welcome, {user.name}
    </div>
  );
}

export default Profile;
