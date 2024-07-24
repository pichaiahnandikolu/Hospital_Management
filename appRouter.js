import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import HomePage from "./src/pages/homePage";
import SignUpPage from "./src/pages/signUpPage";
import LoginPage from "./src/pages/loginPage";
import AddHospitalForm from "./src/pages/addHospitalPage";
import SearchHospital from "./src/pages/searchHospital";
import { useSelector } from 'react-redux';
import ViewAllHospitalPage from './src/pages/viewAllHospitalsPage';

const AppRouter = () => {

    const {isAuthorized} = useSelector((e)=>e.auth);
    
    const router = createBrowserRouter([
        {
            path: "/",
            element: isAuthorized ? <HomePage /> : <Navigate to="/login" />
        },
        {
            path: "/signUp",
            element: isAuthorized ? <Navigate to="/" /> : <SignUpPage/>
        },
        {
            path: "/login",
            element: isAuthorized ? <Navigate to="/" /> : <LoginPage/>
        },
        {
            path: "/addhospital",
            element: isAuthorized ? <AddHospitalForm /> : <Navigate to="/" />
        },
        {
            path: "/hospitals",
            element: isAuthorized ? <SearchHospital /> : <Navigate to="/" />
        },
        {
            path: "/getall",
            element: isAuthorized ? <ViewAllHospitalPage/> : <Navigate to="/" />
        }
    ]);

    return <RouterProvider router={router}/>
}

export default AppRouter;