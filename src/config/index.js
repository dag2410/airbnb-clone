const config = {
  routes: {
    home: "/",
    experiences: "/experiences",
    services: "/services",
    products: "/products",
    roomDetail: "/rooms/:slug",
    search: "/search",
    wishlists: "/wishlists",
    register: "/register",
    login: "/login",
    users: "/users/profile/:id",
    profile: "/profile/about",
    pastTrips: "/profile/past-trips",
    editProfile: "/profile/about/edit",
    notFound: "*",
  },
};
export default config;
