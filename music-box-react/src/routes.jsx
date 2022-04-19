import {BrowserRouter, Routes, Route} from "react-router-dom";
import Musicas from "./pages/Musicas";
import Add from "./pages/Add";
function Rotas() {
    return(
               <BrowserRouter>
               <Routes>
                   <Route path="/" exact element = {<Musicas/>} />
                   <Route path="/add" element = {<Add/>} />
               </Routes>
               </BrowserRouter>
    );
}
export default Rotas;