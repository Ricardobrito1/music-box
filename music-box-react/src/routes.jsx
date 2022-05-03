import {BrowserRouter, Routes, Route} from "react-router-dom";
import Musicas from "./pages/Musicas";
import Add from "./pages/Add";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
function Rotas() {
    return(
               <BrowserRouter>
               <Routes>
                   <Route path="/musicas" element = {<Musicas/>} />
                   <Route path="/add" element = {<Add/>} />
                   <Route path="/home" element = {<Home/>} />
                   <Route path="*" element = {<NotFound/>} />
               </Routes>
               </BrowserRouter>
    );
}
export default Rotas;