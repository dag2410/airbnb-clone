import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "@/features/auth/authAsync";
import { useNavigate } from "react-router-dom";
import Loading from "@/components/Loading";

export default function OAuthSuccess() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handle = async () => {
      await dispatch(getCurrentUser());
      navigate("/", {
        state: { from: "oauth-success" },
      });
    };
    handle();
  }, []);

  return (
    <div>
      <Loading />
    </div>
  );
}
