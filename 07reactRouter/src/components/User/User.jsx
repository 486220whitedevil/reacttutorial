import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams(); // param extract

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-xl text-center">
        <h1 className="text-3xl font-bold mb-4">User Page</h1>
        <p className="text-xl text-blue-400">
          User ID: {userid}
        </p>
      </div>
    </div>
  );
}

export default User;
