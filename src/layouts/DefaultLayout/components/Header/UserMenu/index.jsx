import DialogForm from "@/components/DialogForm";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import config from "@/config/authDialog";
import { postLogOut } from "@/features/auth/authAsync";
import useUser from "@/hooks/useUser";
import { Heart, LogOut, MessageCircle, Settings } from "lucide-react";
import { useState } from "react";
import { FaGlobe, FaRegQuestionCircle, FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import LangDialog from "./LangDialog";
import { useQueryClient } from "@tanstack/react-query";

const UserMenu = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLangDialogOpen, setIsLangDialogOpen] = useState(false);
  const [step, setStep] = useState("login");
  const currentUser = useUser();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const limit = searchParams.get("limit") || 10;

  const handleOpen = (type) => {
    setStep(type);
    setIsDialogOpen(true);
  };

  const menuItems = currentUser
    ? [
        {
          icon: <Heart />,
          title: "Danh sách yêu thích",
          handler: () => navigate(`/wishlists?page=${page}&limit=${limit}`),
        },
        {
          icon: <MessageCircle />,
          title: "Tin nhắn",
          handler: () => navigate("/messages"),
        },
        {
          icon: <FaUser />,
          title: "Hồ sơ",
          handler: () => navigate("/profile/about"),
        },
        {
          icon: <FaGlobe />,
          title: "Ngôn ngữ",
          handler: () => setIsLangDialogOpen(true),
        },
        {
          icon: <Settings />,
          title: "Cài đặt tài khoản",
          handler: () => navigate("/settings/personal-info"),
        },
        {
          icon: <LogOut />,
          title: "Đăng xuất",
          warning: true,
          handler: async () => {
            await dispatch(postLogOut()).unwrap();
            toast.success("Đăng xuất thành công");
            queryClient.invalidateQueries();
          },
        },
      ]
    : [
        {
          icon: <FaGlobe />,
          title: "Ngôn ngữ",
          handler: () => setIsLangDialogOpen(true),
        },
        {
          icon: <FaUser />,
          title: "Đăng nhập hoặc đăng ký",
          handler: () => handleOpen("login"),
        },
      ];

  return (
    <>
      {/* Dropdown menu */}
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          {currentUser ? (
            <img
              src={currentUser?.user?.avatar || currentUser?.avatar}
              alt="avatar"
              className="w-12 h-12 rounded-full cursor-pointer object-cover"
            />
          ) : (
            <button className="px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-full">
              <i className="fa-solid fa-bars"></i>
            </button>
          )}
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          sideOffset={15}
          className="divide-y rounded-xl border-none p-0"
        >
          {menuItems.map((item, index) => (
            <DropdownMenuItem
              key={index}
              className={`font-montserrat px-8 py-3 text-base font-medium hover:bg-gray-300 transition-all cursor-pointer ${item.warning ? "text-red-600" : ""}`}
              onClick={item.handler}
            >
              {item.icon}
              <span>{item.title}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Dialog đăng nhập/đăng ký */}
      <DialogForm
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        {...config[step]}
        step={step}
        setStep={setStep}
        onSuccess={() => {
          setIsDialogOpen(false);
        }}
      />

      {/* Dialog Ngôn ngữ */}
      <LangDialog open={isLangDialogOpen} setOpen={setIsLangDialogOpen} />
    </>
  );
};

export default UserMenu;
