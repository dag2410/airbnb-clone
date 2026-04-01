const config = {
  routes: {
    home: "/",
    experiences: "/experiences",
    services: "/services",
    products: "/products",
    roomDetail: "/rooms/:slug",
    search: "/search",
    wishlists: "/wishlists",
    users: "/users/profile/:id",
    editProfile: "/profile/about/edit",
    checkout: "/checkout/:slug",
    success: "/success",
    messages: "/messages",
    createRoom: "/host/create-listing",
    successCreate: "/success-create",
    successBooking: "/checkout/:slug/success-booking",

    // auth
    register: "/register",
    login: "/login",
    forgotPassword: "/forgot-password",
    resetPassword: "/reset-password",
    verifyEmail: "/verify-email",
    oauthSuccess: "/oauth-success",

    // profile
    profile: "/profile/about",
    pastTrips: "/profile/past-trips",

    // settings
    settingsPersonal: "/settings/personal-info",
    settingsLogin: "/settings/login-and-security",
    settingsPrivacy: "/settings/privacy-and-sharing",
    settingsPayment: "/settings/payments",
    settingsPreferences: "/settings/preferences",

    notFound: "*",
  },
};
export default config;
