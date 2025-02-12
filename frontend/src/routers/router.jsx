
import { createBrowserRouter } from 'react-router-dom';
import App from '../App'; // Adjust the path as necessary

const router=createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children:[
            {
                path:'/',
                element:<div>Home Page</div>
            },
            {
                path:'/about',
                element:<div>About Page</div>
            }
        ]
    }
])

export default router;  