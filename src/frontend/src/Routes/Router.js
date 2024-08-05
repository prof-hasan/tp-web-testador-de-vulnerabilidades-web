import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import BrokenAControl from '../Pages/BrokenAControl/BrokenAControl';
import SqlInjection from '../Pages/SqlInjection/SqlInjection';


function Router() {

    return(

        <BrowserRouter>
            <Routes>

            <Route element={<Home />} path="/" exact />
            <Route element={<BrokenAControl />} path="/BrokenAControl" exact />
            <Route element={<SqlInjection />} path="/SqlInjection" exact />
            
            </Routes>
        </BrowserRouter>
    )

}

export default Router;
