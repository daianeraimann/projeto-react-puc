import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login';
import Cadastro from "./Cadastro";
import Acessar from './Acesso';
import Home from "./Home";
import Errado from './Erro';



function Rotas() {
    return (
        
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Cadastro' element={<Cadastro />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path='/Acesso' element={<Acessar />} />
                    <Route path='/Erro' element={<Errado />} />


                </Routes>
            </Router>
        
    )
}

export default Rotas;

