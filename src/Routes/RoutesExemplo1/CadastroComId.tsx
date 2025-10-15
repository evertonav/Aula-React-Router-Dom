import { useParams } from "react-router-dom"
import { CadastroListaSearch } from "./CadastroListaSearch"
import { useContext } from "react"
import { ExemploContextCreated } from "Contexts/ExemploContext"

export function CadastroComId() {
    const { id } = useParams()
    console.log('Parametros: ', useParams())
    const contextoPratica = useContext(ExemploContextCreated)

    return (
        <div style={{display: "flex", width: "100%", flexDirection: "column", gap: 14, backgroundColor: "red"}}>
            Cadastro Id: {id}
            Nome: {contextoPratica?.exemplo.Nome}

            <CadastroListaSearch />        
        </div>
    )
}