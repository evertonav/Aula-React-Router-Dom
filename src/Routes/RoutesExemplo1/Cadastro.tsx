import { Link, useNavigate } from "react-router-dom";
import { CadastroComId } from "./CadastroComId";
import { useContext } from "react";
import { ExemploContextCreated } from "Contexts/ExemploContext";

export function Cadastro() {
    const navigate = useNavigate()
    const contextoPratica = useContext(ExemploContextCreated)

    return (
        <div style={{display: "flex", gap: 10, flexDirection: "column"}}>
            Cadastro
            <Link to={"/"}>
                Home
            </Link>            

            <div style={{display: "flex", gap: 10, flexDirection: "column", width: 100}}>
                <input title="Nome"/>

                <input title="Descricao"/>

                <div>
                    Nome: {contextoPratica?.exemplo.Nome}
                </div>                

                <CadastroComId />

                <button onClick={() => {
                    //Aqui faria alguma coisa com o input
                    //Depois redirecionaria para o home por exemplo
                    contextoPratica?.setExemplo('Jose')
                    //navigate("/Cadastro/12")
                }}>Cadastrar</button>
            </div>
        </div>
    )
}