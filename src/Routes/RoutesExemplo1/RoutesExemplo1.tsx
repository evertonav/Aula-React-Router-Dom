import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CadastroComId } from "./Cadastros/CadastroComId";
import { CadastroListaSearch } from "./Cadastros/CadastroListaSearch";
import { PesquisarPai } from "./PesquisarPai";
import { Home } from "./Home";
import { Cadastro } from "./Cadastros/Cadastro";
import { CadastroUsuario } from "./Cadastros/CadastroUsuario";
import { CadastroDespesas } from "./Cadastros/CadastroDespesa";

export function RoutesExemplo1() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index
                //path='/' 
                element={(<Home />)}/>

                <Route path='/Cadastro' element={(<Cadastro/>)}/>
                <Route path="/Cadastro/:id" element={(<CadastroComId />)}/>
                <Route path="/Cadastro/Lista" element={<CadastroListaSearch />}/> 

                <Route path="/Cadastro/Usuario" element={<CadastroUsuario />}/>
                <Route path="/Cadastro/Despesa" element={<CadastroDespesas />}/>
                

                <Route path="/Pesquisar" element={<PesquisarPai/>}>
                    <Route path="/Pesquisar/Filho" element={
                        <div>
                            Filho
                            <button>Outro botão</button>
                        </div>}/>

                    <Route path="/Pesquisar/Filho/:id" element={
                        <div>
                            Filho com id
                            <button>Botao de exemnplo filho com id</button>
                        </div>}/>
                </Route>

                <Route path="/*" element={<div>Not Found</div>}/>
            </Routes>            
        </BrowserRouter>

    )
}