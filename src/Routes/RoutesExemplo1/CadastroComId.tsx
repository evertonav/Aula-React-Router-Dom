import { useParams } from "react-router-dom"

export function CadastroComId() {
    const { id } = useParams()
    return (
        <div>Cadastro Id: {id}</div>
    )
}