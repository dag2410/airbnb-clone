import config from "@/config";

import Home from "@/pages/Home";
import Users from "@/pages/Users";
import Profile from "@/pages/Profile";
import Products from "@/pages/Products";
import NotFound from "@/pages/NotFoundPage";

import LoginPage from "@/auth/LoginPage";
import RegisterPage from "@/auth/RegisterPage";

import NoFooterLayout from "@/layouts/NoFooterLayout";
import Experiences from "@/pages/Experiences";
import Services from "@/pages/Services";
import RoomDetail from "@/pages/RoomDetail";
import StaySearch from "@/pages/StaySearch";
import Wishlists from "@/pages/Wishlists";
import SecondaryLayout from "@/layouts/SecondaryLayout";
import EditProfile from "@/pages/EditProfile";

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
  },
  {
    path: config.routes.notFound,
    component: NotFound,
    layout: null,
  },
  {
    path: config.routes.register,
    component: RegisterPage,
    layout: null,
  },
  {
    path: config.routes.login,
    component: LoginPage,
    layout: null,
  },
  {
    path: config.routes.users,
    component: Users,
    protected: true,
    layout: null,
  },
  {
    path: config.routes.profile,
    component: Profile,
    layout: SecondaryLayout,

    // protected: true,
  },
  {
    path: config.routes.pastTrips,
    component: Profile,
    layout: SecondaryLayout,

    // protected: true,
  },
  {
    path: config.routes.editProfile,
    component: EditProfile,
    layout: SecondaryLayout,

    // protected: true,
  },
];
export default routes;
