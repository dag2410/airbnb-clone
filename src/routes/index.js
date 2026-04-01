import config from "@/config";

import Profile from "@/pages/AboutMe";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFoundPage";
import Products from "@/pages/Products";
import Users from "@/pages/UserProfile";

// import LoginPage from "@/auth/LoginPage";
// import RegisterPage from "@/auth/RegisterPage";

import NoFooterLayout from "@/layouts/NoFooterLayout";
import SecondaryLayout from "@/layouts/SecondaryLayout";
import ChatListPage from "@/pages/ChatList";
import CheckoutPage from "@/pages/Checkout";
import EditProfile from "@/pages/EditProfile";
import Experiences from "@/pages/Experiences";
import RoomDetail from "@/pages/RoomDetail";
import Services from "@/pages/Services";
import StaySearch from "@/pages/StaySearch";
import Wishlists from "@/pages/Wishlists";
import HostOnboarding from "@/pages/HostOnboarding";
import NoLayout from "@/layouts/NoLayout";
import SuccessCreate from "@/pages/SuccessCreate";
import SuccessBooking from "@/pages/SuccessBooking";
import Settings from "@/pages/Settings";
import VerifyEmail from "@/pages/VerifyEmail";
import ResetPassword from "@/pages/ResetPassword";
import OauthSuccess from "@/pages/OauthSuccess";
// import EditProfile from "@/pages/EditProfile";

const routes = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.experiences,
    component: Experiences,
  },
  {
    path: config.routes.services,
    component: Services,
  },

  {
    path: config.routes.products,
    component: Products,
    layout: NoFooterLayout,
  },
  {
    path: config.routes.roomDetail,
    component: RoomDetail,
    layout: SecondaryLayout,
  },
  {
    path: config.routes.search,
    component: StaySearch,
    layout: SecondaryLayout,
  },
  {
    path: config.routes.wishlists,
    component: Wishlists,
    layout: SecondaryLayout,
    protected: true,
  },
  {
    path: config.routes.notFound,
    component: NotFound,
    layout: null,
  },
  // {
  //   path: config.routes.register,
  //   // component: RegisterPage,
  //   layout: null,
  // },
  // {
  //   path: config.routes.login,
  //   component: LoginPage,
  //   layout: null,
  // },
  {
    path: config.routes.users,
    component: Users,
    protected: true,
    layout: SecondaryLayout,
  },

  // Profile
  {
    path: config.routes.profile,
    component: Profile,
    layout: SecondaryLayout,
    protected: true,
  },
  {
    path: config.routes.pastTrips,
    component: Profile,
    layout: SecondaryLayout,

    protected: true,
  },
  {
    path: config.routes.editProfile,
    component: EditProfile,
    layout: SecondaryLayout,

    protected: true,
  },
  {
    path: config.routes.checkout,
    component: CheckoutPage,
    layout: NoFooterLayout,

    protected: true,
  },
  {
    path: config.routes.success,
    component: EditProfile,
    layout: SecondaryLayout,

    protected: true,
  },
  {
    path: config.routes.messages,
    component: ChatListPage,
    layout: NoFooterLayout,

    protected: true,
  },
  {
    path: config.routes.createRoom,
    component: HostOnboarding,
    layout: NoFooterLayout,

    protected: true,
  },

  {
    path: config.routes.successCreate,
    component: SuccessCreate,
    layout: NoLayout,
    protected: true,
  },
  {
    path: config.routes.successBooking,
    component: SuccessBooking,
    layout: NoLayout,

    protected: true,
  },
  {
    path: config.routes.settingsPersonal,
    component: Settings,
    layout: NoFooterLayout,

    protected: true,
  },
  {
    path: config.routes.settingsLogin,
    component: Settings,
    layout: NoFooterLayout,

    protected: true,
  },
  {
    path: config.routes.settingsPrivacy,
    component: Settings,
    layout: NoFooterLayout,

    protected: true,
  },
  {
    path: config.routes.settingsPayment,
    component: Settings,
    layout: NoFooterLayout,

    protected: true,
  },
  {
    path: config.routes.settingsPreferences,
    component: Settings,
    layout: NoFooterLayout,

    protected: true,
  },
  {
    path: config.routes.verifyEmail,
    component: VerifyEmail,
    layout: NoLayout,
  },
  {
    path: config.routes.resetPassword,
    component: ResetPassword,
    layout: NoLayout,
  },

  {
    path: config.routes.oauthSuccess,
    component: OauthSuccess,
    layout: NoLayout,
  },
];
export default routes;
