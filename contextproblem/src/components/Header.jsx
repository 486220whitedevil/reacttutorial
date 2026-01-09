import { useAuth } from "../context/AuthContext";

function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between">
      <h1>MyApp</h1>

      {user ? (
        <button onClick={logout} className="text-red-400">
          Logout
        </button>
      ) : (
        <span className="text-gray-400">Not logged in</span>
      )}
    </header>
  );
}

export default Header;
