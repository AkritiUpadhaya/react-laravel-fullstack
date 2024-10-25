import {createBrowserRouter} from "react-router-dom";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import Users from "./views/Users";
import NotFound from "./views/NotFound";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";
import Dashboard from "./views/Dashboard";
import UserForm from "./views/UserForm";
const router= createBrowserRouter([

{
    path: '/',
    element: <DefaultLayout/>,
    children:[
       
        {
            path: '/dashboard',
            element: <Dashboard/>
        },
        {
            path: '/users',
            element: <Users/>
        },
        {
            path: '/users/new',
            element: <UserForm key="userCreate"/>
        },
        {
            path: '/users/:id',
            element: <UserForm key="userUpdate"/>
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