import {createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <h1>home</h1>
            },
            {
                path: "/order",
                element: <div>Orders</div>
            },
            {
                path: "/about",
                element: <div>About</div>
            }
        ]
    },
]);

export default router;