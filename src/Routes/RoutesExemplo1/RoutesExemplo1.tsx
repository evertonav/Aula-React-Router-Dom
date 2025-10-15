import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CadastroComId } from "./CadastroComId";
import { CadastroListaSearch } from "./CadastroListaSearch";
import { PesquisarPai } from "./PesquisarPai";
import { Home } from "./Home";
import { Cadastro } from "./Cadastro";

export function RoutesExemplo1() {
    return (
        <BrowserRouter>
            <Routes>
                <Route 
                index
                //path='/' 
                element={(<Home />)}/>

                <Route path='/Cadastro' element={(<Cadastro/>)}/>
                <Route path="/Cadastro/:id" element={(<CadastroComId />)}/>
                <Route path="/Cadastro/Lista" element={<CadastroListaSearch />}/> 
                

                <Route path="/Pesquisar" element={<PesquisarPai/>}>
                    <Route path="/Pesquisar/Filho" element={<div>
                        Filho
                        <button>Outro botão</button>
                        </div>}/>
                    <Route path="/Pesquisar/Filho/:id" element={<div>
                        Filho com id
                        <button>Botao de exemnplo filho com id</button>
                        </div>}/>
                </Route>

                <Route path="/*" element={<div>Not Found</div>}/>
            </Routes>            
        </BrowserRouter>

    )
}