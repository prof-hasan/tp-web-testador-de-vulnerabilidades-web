import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CrossSiteRflected from '../Pages/CrossSiteReflected/CrossSiteRflected'
import BrokenAControl from '../Pages/BrokenAControl/BrokenAControl';
import SqlInjection from '../Pages/SqlInjection/SqlInjection';
import CreateUserForm from '../Pages/CreateUser/CreateUserForm';
import Home from '../Pages/Home/Home';
import VulnerableAdminPage from '../Pages/AdminPages/VulnerableAdminPage';
import CrossSiteStored from '../Pages/CrossSiteStored/CrossSiteStored';
import UserLogin from '../Pages/UserLogin/UserLogin';
import ViewBankAccount from '../Pages/ViewBankAccount/ViewBankAccount';
import ProtectedAdminPage from '../Pages/AdminPages/ProtectedAdminPage';


function Router() {
//Mudar para amarelo
    return(

        <BrowserRouter>
            <Routes>

            <Route element={<Home />} path="/" exact />
            <Route element={<CrossSiteRflected />} path="/CrossSiteReflected" exact />
            <Route element={<CrossSiteStored />} path="/CrossSiteStored" exact />
            <Route element={<BrokenAControl />} path="/BrokenAControl" exact />
            <Route element={<SqlInjection />} path="/SqlInjection" exact />
            <Route element={<VulnerableAdminPage />} path="/Admin/easy" exact />
            <Route element={<ProtectedAdminPage />} path="/Admin/hard" exact />
            <Route element={<ViewBankAccount />} path="/ViewBankAccount" exact />



            </Routes>
        </BrowserRouter>
    )

}

export default Router;
