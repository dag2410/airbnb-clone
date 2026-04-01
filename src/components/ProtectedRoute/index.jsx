import DialogForm from "@/components/DialogForm";
import config from "@/config/authDialog";
import useUser from "@/hooks/useUser";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading";

function ProtectedRoute({ children }) {
  const user = useUser();
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [step, setStep] = useState("login");
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    if (!user) {
      setIsDialogOpen(true);
    }
  }, [user]);

  if (redirecting) {
    return (
      <>
        <Loading />
        {navigate(-1)}
      </>
    );
  }

  if (!localStorage.getItem("token") || !user)
    return (
      <DialogForm
        open={isDialogOpen}
        onOpenChange={(open) => {
          if (!open) {
            setRedirecting(true);
          }
          setIsDialogOpen(open);
        }}
        {...config[step]}
        step={step}
        setStep={setStep}
        onSuccess={() => {
          setIsDialogOpen(false);
        }}
        isProtected
      />
    );

  return children;
}
export default ProtectedRoute;
