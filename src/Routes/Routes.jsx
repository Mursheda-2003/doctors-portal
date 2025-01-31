
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import Appoinment from "../Pages/Appoinment/Appoinment";
import Reviews from "../Pages/Reviews/Reviews";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

    
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "about",
                element: <About></About>
            },
            {
                path: "appoinment",
                element: <Appoinment></Appoinment>
            },
            {
                path: "reviews",
                element: <Reviews></Reviews>
            },
            {
                path: "contactUs",
                element: <ContactUs></ContactUs>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "signUp",
                element: <SignUp></SignUp>
            },
        ],
        
    },
]);
export default router;