import { useSearchParams } from "react-router-dom"
import { useContext } from "react"
import { ExemploContextCreated } from "Contexts/ExemploContext"

export function CadastroListaSearch() {
    const [URLSearchParams] = useSearchParams()
    const contextoPratica = useContext(ExemploContextCreated)

    console.log('useSearchParams: ',useSearchParams().values)

    const id = URLSearchParams.get('id')
    const Nome = URLSearchParams.get('nome')

    console.log(URLSearchParams)

    return (
        <div style={{display: "flex", flexDirection: "column", width: "100%", backgroundColor: "blue"}}>
            Cadastro Lista Search. Id: {id}, 
            Nome: {contextoPratica?.exemplo.Nome}
        </div>
    )
}