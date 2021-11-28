import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import SaveProduct from './pages/product/SaveProduct';
import SaveCategory from './pages/category/SaveCategory';
import EditCategory from './pages/category/EditCategory';
import Detail from './pages/product/Detail';
import EditProduct from './pages/product/EditProduct';
import ViewCategories from './pages/category/ViewCategories';
import ViewProduct from './pages/product/ViewProduct';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/ViewProduct" exact={true} element={<ViewProduct />} />
        <Route path="/product/:id" exact={true} element={<Detail />} />
        <Route path="/SaveProduct" exact={true} element={<SaveProduct />} />
        <Route path="/EditProduct/:id" exact={true} element={<EditProduct />} />
        <Route path="/ViewCategories" exact={true} element={<ViewCategories />} />
        <Route path="/SaveCategory" exact={true} element={<SaveCategory />} />
        <Route path="/EditCategory/:id" exact={true} element={<EditCategory />} />
      </Routes>
    </div >
  );
}

export default App;
