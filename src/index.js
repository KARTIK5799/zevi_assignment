import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import SearchPage from './Pages/SearchPage/SearchPage';
import ProductPage from './Pages/ProductPage/ProductPage';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}> 
        <Route path='' element={<SearchPage/>}/>
        <Route path='products' element={<ProductPage/>}/>
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>
);



