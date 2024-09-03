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
import { AuthProvider } from '../Hooks/UseAuth';
import PublicRoutes from '../Components/ProtectedRoutes/PublicRoutes'
import SecuredRoutes from '../Components/ProtectedRoutes/SecuredRoutes'
import ProtectedAdminPage from '../Pages/AdminPages/ProtectedAdminPage';
import { useAuth } from '../Hooks/UseAuth';


function Router() {
    const { user } = useAuth();

    return(

        <BrowserRouter>
        <AuthProvider>

            <Routes>
            <Route element={<PublicRoutes />}>
                <Route element={<Home />} path="/" exact />
            </Route>

            <Route element={<SecuredRoutes />}>

                <Route element={<CrossSiteRflected />} path="/CrossSiteReflected" exact />
                <Route element={<CrossSiteStored />} path="/CrossSiteStored" exact />
                <Route element={<BrokenAControl />} path="/BrokenAControl" exact />
                <Route element={<SqlInjection />} path="/SqlInjection" exact />
                <Route element={<VulnerableAdminPage />} path="/Admin/easy" exact />
                <Route element={<ProtectedAdminPage />} path="/Admin/hard" exact />
                <Route element={<ViewBankAccount />} path="/ViewBankAccount" exact />
            </Route>

            <Route path="*" element={<Home />} />



            </Routes>
            </AuthProvider>

        </BrowserRouter>
    )

}

export default Router;
