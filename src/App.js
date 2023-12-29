import { SearchProvider } from '../src/contexts/SearchContaxt';

import ProductPage from "./Pages/ProductPage/ProductPage";

import SearchPage from './Pages/SearchPage/SearchPage'
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <SearchProvider>
      <div>
       <Outlet/>
      </div>
    </SearchProvider>
  );
};

export default App;
