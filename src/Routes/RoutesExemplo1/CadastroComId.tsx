import { useParams } from "react-router-dom"
import { CadastroListaSearch } from "./CadastroListaSearch"
import { useContext } from "react"
import { ExemploContextCreated } from "../../Contexts/ExemploContext"

export function CadastroComId() {
    const { id } = useParams()
    console.log('Parametros: ', useParams())
    const contextoPratica = useContext(ExemploContextCreated)

    return (
        <div>
            Cadastro Id: {id}
            Nome: {contextoPratica?.exemplo.Nome}
            <CadastroListaSearch />
        
        </div>
    )
}