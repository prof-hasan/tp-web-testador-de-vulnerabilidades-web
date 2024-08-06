import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CrossSiteRflected from '../Pages/CrossSiteReflected/CrossSiteRflected'
import BrokenAControl from '../Pages/BrokenAControl/BrokenAControl';
import SqlInjection from '../Pages/SqlInjection/SqlInjection';
import CreateUserForm from '../Pages/CreateUser/CreateUserForm';
import Home from '../Pages/Home/Home';
import AdminPage from '../Pages/AdminPages/AdminPage';


function Router() {

    return(

        <BrowserRouter>
            <Routes>

            <Route element={<CrossSiteRflected />} path="/CrossSiteReflected" exact />
            <Route element={<BrokenAControl />} path="/BrokenAControl" exact />
            <Route element={<SqlInjection />} path="/SqlInjection" exact />
            <Route element={<CreateUserForm />} path="/createUser" exact />
            <Route element={<Home />} path="/" exact />
            <Route element={<AdminPage />} path="/Admin" exact />
            
            </Routes>
        </BrowserRouter>
    )

}

export default Router;
