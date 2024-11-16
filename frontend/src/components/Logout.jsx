import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("user");
      toast.success("Logout successfully");

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error("Error: " + error);
      setTimeout(() => {}, 500);
    }
  };
  return (
    <div>
      <button
            className="h-10 w-20 rounded-md bg-[#242426] text-white"
            onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
