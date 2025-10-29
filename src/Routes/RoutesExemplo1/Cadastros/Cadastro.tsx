import { Link } from "react-router-dom";
import { useContext } from "react";
import { ExemploContextCreated } from "Contexts/ExemploContext";

export function Cadastro() {    
    const contextoPratica = useContext(ExemploContextCreated)

    return (
        <div style={{display: "flex", gap: 10, flexDirection: "column"}}>
            Cadastro
            <Link to={"/"}>
                Home
            </Link>            

            <div style={{display: "flex", gap: 10, flexDirection: "column", width: 100}}>

                <div style={{display: "flex", flexDirection: 'row', width: '200px'}}>
                    Nome: {contextoPratica?.exemplo.Nome}
                </div>           

                <div style={{display: "flex", flexDirection: 'row', width: '200px'}}>
                    Idade: {contextoPratica?.exemplo.Idade}
                </div>                            
            </div>
        </div>
    )
}