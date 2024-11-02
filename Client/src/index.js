import { lazy } from "react";
const Dashboard =lazy(() => import('./Pages/Admin/Dashboard'));
const Products =lazy(() => import('./Pages/Admin/Products'));
const AddProduct =lazy(() => import('./Pages/Admin/AddProduct'));
const AdminDesktopHeader = lazy(() => import("./components/Admin/DesktopHeader"));
const AdminMobileHeader = lazy(() => import("./components/Admin/MobileHeader"));
const Sidebar = lazy(() => import("./components/Admin/Sidebar"));
const TopProducts = lazy(() => import("./components/Admin/TopProducts"));

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
    AdminDesktopHeader,
    AdminMobileHeader,
    Products,
    AddProduct,
    Dashboard,
    Sidebar,
    TopProducts
}