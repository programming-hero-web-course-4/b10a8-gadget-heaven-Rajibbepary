import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import ProductCards from "../ProductCards";
import Product from "../pages/Product";
import ProductDetails from "../pages/ProductDetails";
import { useState } from "react";


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
            element:<Statistics></Statistics>,
            loader:() =>fetch('../product.json'),
          },
          {
            path:'/product', 
            element:<Product></Product>,
            loader:() =>fetch('../product.json'),
          },
          // {
          //   path:'/dashboard/:id', 
          //   element:<Dashboard></Dashboard>,
          //   loader:() =>fetch('../product.json'),
          // },

           {
            path:'/dashboard', 
            element:<Dashboard></Dashboard>,
          },
          {
            path:'/product/:id',
            element:<ProductDetails></ProductDetails>,
            loader:() =>fetch('../product.json'),
          }
    ]
  }

    
])
export default routes