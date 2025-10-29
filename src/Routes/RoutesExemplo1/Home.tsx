import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ExemploContextCreated } from "Contexts/ExemploContext";
import { BotaoComum } from "Components/BotaoComum";

export function Home() {
    const exemploContext = useContext(ExemploContextCreated)
    const navigate = useNavigate()
    
    return (
        <div style={{display: "flex", gap: 10, flexDirection: 'column'}}>
            Home            

            <Link to={"/Cadastro"} >
                Cadastro
            </Link>       

            <Link to={"/Cadastro/Usuario"}>
                Cadastro Usuário
            </Link>   

            <Link to={"/Cadastro/Despesa"}>
                Cadastro Despesa
            </Link>    


            
            <div style={{borderTop: "1px solid red"}}>

            </div>

            <div >
                <input onChange={(event) => {
                    debugger
                    exemploContext?.setExemplo(event.target.value)
                }}/>
                Nome: {exemploContext?.exemplo.Nome}
            </div>

            <div style={{display: "flex", flexDirection: 'column', gap: 8}}>
                <div>
                    <input onChange={(event) => exemploContext?.setExemplo(undefined, Number(event.target.value))}/>
                    Idade: {exemploContext?.exemplo.Idade}
                </div>
                
                <div>
                    <BotaoComum onClick={() => navigate('/Cadastro')} >
                        Adicionar
                    </BotaoComum>
                </div>
                
            </div>

            
            
        </div>
    )
}