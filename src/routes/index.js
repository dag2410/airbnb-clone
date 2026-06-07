import config from "@/config";
import NoFooterLayout from "@/layouts/NoFooterLayout";
import NoLayout from "@/layouts/NoLayout";
import SecondaryLayout from "@/layouts/SecondaryLayout";
import { lazy } from "react";

const Home = lazy(() => import("@/pages/Home"));
const Users = lazy(() => import("@/pages/UserProfile"));
const Profile = lazy(() => import("@/pages/AboutMe"));
const NotFound = lazy(() => import("@/pages/NotFoundPage"));

const ChatListPage = lazy(() => import("@/pages/ChatList"));
const CheckoutPage = lazy(() => import("@/pages/Checkout"));
const EditProfile = lazy(() => import("@/pages/EditProfile"));
const Experiences = lazy(() => import("@/pages/Experiences"));
const RoomDetail = lazy(() => import("@/pages/RoomDetail"));
const Services = lazy(() => import("@/pages/Services"));
const StaySearch = lazy(() => import("@/pages/StaySearch"));
const Wishlists = lazy(() => import("@/pages/Wishlists"));
const HostOnboarding = lazy(() => import("@/pages/HostOnboarding"));
const SuccessCreate = lazy(() => import("@/pages/SuccessCreate"));
const SuccessBooking = lazy(() => import("@/pages/SuccessBooking"));
const Settings = lazy(() => import("@/pages/Settings"));
const VerifyEmail = lazy(() => import("@/pages/VerifyEmail"));
const ResetPassword = lazy(() => import("@/pages/ResetPassword"));
const OauthSuccess = lazy(() => import("@/pages/OauthSuccess"));
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
    layout: NoFooterLayout,
    protected: true,
  },
  {
    path: config.routes.pastTrips,
    component: Profile,
    layout: NoFooterLayout,

    protected: true,
  },
  {
    path: config.routes.editProfile,
    component: EditProfile,
    layout: NoFooterLayout,

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
