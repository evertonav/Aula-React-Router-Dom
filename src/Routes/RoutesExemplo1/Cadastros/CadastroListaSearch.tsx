import { useSearchParams } from "react-router-dom"

export function CadastroListaSearch() {
    const [URLSearchParams] = useSearchParams()

    console.log('useSearchParams: ',useSearchParams().values)

    const id = URLSearchParams.get('id')
    const Nome = URLSearchParams.get('nome')

    console.log(URLSearchParams)

    return (
        <div style={{display: "flex", flexDirection: "column", width: "100%", backgroundColor: "blue"}}>
            Cadastro Lista Search. Id: {id}, 
            Nome: {Nome}
        </div>
    )
}