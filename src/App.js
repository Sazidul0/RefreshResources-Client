
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItems from './components/Pages/Add Items/AddItems';
import Blogs from './components/Pages/Blogs/Blogs';
import Home from './components/Pages/Home/Home/Home';
import InventoryItem from './components/Pages/InventoryItem/InventoryItem';
import Login from './components/Pages/Login/Login';
import ManageInventory from './components/Pages/ManageInventory/ManageInventory';
import MyItems from './components/Pages/My Items/MyItems';
import Register from './components/Pages/Register/Register';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import RequireAuth from './components/Shared/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify'
import PageNotFound from './components/Pages/PageNotFound/PageNotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/manageinventory' element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }></Route>
        <Route path='/additem' element={<AddItems></AddItems>}></Route>
        <Route path='/myitems' element={<MyItems></MyItems>}></Route>
        <Route path='/collection/:collectionId' element={
          <RequireAuth>
            <InventoryItem></InventoryItem>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
