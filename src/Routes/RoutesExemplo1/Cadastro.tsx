import { Link, useNavigate } from "react-router-dom";

export function Cadastro() {
    const navigate = useNavigate()

    return (
        <div style={{display: "flex", gap: 10, flexDirection: "column"}}>
            Cadastro
            <Link to={"/"}>
                Home
            </Link>

            <div style={{display: "flex", gap: 10, flexDirection: "column", width: 100}}>
                <input title="Nome"/>

                <input title="Descricao"/>

                <button onClick={() => {
                    //Aqui faria alguma coisa com o input
                    //Depois redirecionaria para o home por exemplo
                    navigate("/")
                }}>Cadastrar</button>
            </div>
        </div>
    )
}