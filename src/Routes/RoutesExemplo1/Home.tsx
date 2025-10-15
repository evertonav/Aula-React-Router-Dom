import { Link } from "react-router-dom";
import { useContext } from "react";
import { ExemploContextCreated } from "Contexts/ExemploContext";

export function Home() {
    const exemploContext = useContext(ExemploContextCreated)
    debugger
    return (
        <div style={{display: "flex", gap: 10, flexDirection: 'column'}}>
            Home            

            <Link to={"/Cadastro"} >
                Cadastro
            </Link>            

            <div style={{borderTop: "1px solid red"}}>
                <input onChange={(event) => {
                    debugger
                    exemploContext?.setExemplo(event.target.value)
                }}/>
                Nome: {exemploContext?.exemplo.Nome}
            </div>

            <div>
                <input onChange={(event) => exemploContext?.setExemplo(undefined, Number(event.target.value))}/>
                Idade: {exemploContext?.exemplo.Idade}
            </div>
            
        </div>
    )
}