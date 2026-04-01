import { getCurrentUser } from "@/features/auth/authAsync";
import { logout } from "@/features/auth/authSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function UserProvider() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(getCurrentUser());
      navigate("/");
    }
  }, [dispatch]);

  useEffect(() => {
    const handleStorage = (event) => {
      if (event.key === "token") {
        if (event.newValue) {
          dispatch(getCurrentUser());
        } else {
          dispatch(logout());
        }
      }
    };

    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, [dispatch]);

  return null;
}

export default UserProvider;
