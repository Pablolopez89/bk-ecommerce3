import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import CardWidget from './components/cartWidget/cardWidget';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import DataProvider from './components/cartContext/cartContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ItemListContainer />,
  },
  {
    path: "/cardWidget",
    element: <CardWidget />,
  },
  {
    path: "/category/:id",
    element: <ItemListContainer />,
  },  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataProvider>
      <React.StrictMode>
         <RouterProvider router={router} />
      </React.StrictMode>
  </DataProvider>
);


