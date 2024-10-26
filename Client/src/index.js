// import Select from "./Select";
import { lazy } from "react";
// import Footer from "./Footer/Footer";
// import Container from "./container/Container";
// import LogoutBtn from "./Header/LogoutBtn";
// import RTE from "./RTE";
// import Button from "./Button";
// import PostForm from "./post-form/PostForm";
// import PostCard from "./PostCard";
// import AuthLayout from "./AuthLayout";
// import Input from "./Input";
const Dashboard =lazy(() => import('./components/Admin/Dashboard'));
const AdminHeader = lazy(() => import("./components/Admin/Header"));
const Sidebar = lazy(() => import("./components/Admin/Sidebar"));

const Home = lazy(()=>import("./Pages/Home"));
const MainHeader = lazy(() => import("./components/Header")); // Adjust the path if necessary
const Login = lazy(() => import("./components/Login")); // Adjust the path if necessary
const Signup = lazy(() => import("./components/Signup")); // Adjust the path if necessary
export {
    Home,
    MainHeader,
    Signup,
    Login,
    //admin components
    AdminHeader,
    Dashboard,
    Sidebar
}