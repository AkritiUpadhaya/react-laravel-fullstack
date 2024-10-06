import {createBrowserRouter} from "react-router-dom";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import Users from "./views/Users";
import NotFound from "./views/NotFound";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";
import Dashboard from "./views/Dashboard";
const router= createBrowserRouter([

{
    path: '/',
    element: <DefaultLayout/>,
    children:[
        {
            path: '/Users',
            element: <Users/>
        },
        {
            path: '/dashboard',
            element: <Dashboard/>
        },
    ]
},
{
    path: '/',
    element: <GuestLayout/>,
    children:[
        {
            path: '/Login',
            element: <Login/>
        },
        {
            path: '/SignUp',
            element: <SignUp/>
        },
    ]
},
{
    path: '*',
    element: <NotFound/>
}
]
)
export default router;