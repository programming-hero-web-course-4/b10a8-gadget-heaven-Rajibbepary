import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import ProductCards from "../ProductCards";
import Product from "../pages/Product";


const routes = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout></MainLayout>,
    children:[
        {
          path:'/', 
          element:<Home></Home>, 
          loader:()=> fetch('../category.json'),
          children: [
            {
              path:'/',
              element:<ProductCards></ProductCards>,
              loader:() =>fetch('../product.json'),
            },
            {
              path:'/category/:category',
              element:<ProductCards></ProductCards>,
              loader:() =>fetch('../product.json'),
            },

          ],
        },
        {
            path:'/statistics', 
            element:<Statistics></Statistics>
          },
          {
            path:'/product', 
            element:<Product></Product>,
            loader:() =>fetch('../product.json'),
          },
          {
            path:'/dashboard', 
            element:<Dashboard></Dashboard>
          }
    ]
  }

    
])
export default routes