import { createBrowserRouter } from "react-router";
import HomeScreen from "./pages/App";
import ErrorScreen from "./error";
import RootLayout from "./components/layout/RootLayout";
import LoginScreen from "./pages/auth/Login";
import SignupPage from "./pages/auth/SignUp";
import AuthRootLayout from "./components/layout/AuthRootLayout";
import VerifyOtpPage from "@/pages/auth/VerifyOtp";
import ConfirmPasswordPage from "./pages/auth/ConfirmPassword";

export const router = createBrowserRouter([
  {
    path: "/", //main url
    Component: RootLayout,//navi,footer sa tae layout ty par tae common folder
    ErrorBoundary: ErrorScreen,
    children: [
      { index: true, Component: HomeScreen }, // "/"
      //inex true mean child route is the same as main url route
    ],
  },
  { path: "/login",
     Component: LoginScreen }, // "/login"
  {
    path: "/register",
    Component: AuthRootLayout,
    children: [
      { index: true, Component: SignupPage }, // "/register"
      { path: "verify-otp", Component: VerifyOtpPage }, // "/register/verify-otp"
      { path: "confirm-password", Component: ConfirmPasswordPage }, // "/register/confirm-password"
    ],
  },
]);
