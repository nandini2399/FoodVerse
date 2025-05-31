import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router";
import About from "./components/About"
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResMenu from "./components/ResMenu";

const Groceries = lazy(()=> import("./components/Groceries"))

const AppLayout = () => {
    return (    
        <div className="app">
            <Header />
            <Outlet />
            <Footer />
        </div>
        
    )
}

const appRouter = createBrowserRouter([
    {
    path:"/",
    element:<AppLayout/>,
    children:[
        {path:"/",element:<Body />},
        {path:"/about",element:<About />},
        {path:"/contact",element:<Contact />},
        {path:"/restaurants/:resId",element:<ResMenu />},
        {path:"/groceries",element:<Suspense fallback={<h1>Loading...</h1>}><Groceries /></Suspense>}
    ],
    errorElement:<Error />}  
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); //This is the syntax that babel understands
