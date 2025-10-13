import { useSearchParams } from "react-router-dom"

export function CadastroListaSearch() {
    const [URLSearchParams] = useSearchParams()

    const id = URLSearchParams.get('id')
    const Nome = URLSearchParams.get('Nome')

    console.log(URLSearchParams)


    return (
        <div>Cadastro Lista Search. Id: {id}, Nome: {Nome}</div>
    )
}