import { Link } from "react-router-dom";

export function Home() {
    return (
        <div style={{display: "flex", gap: 10, flexDirection: 'column'}}>
            Home

            <Link to={"/Cadastro"} >
                Cadastro
            </Link>
        </div>
    )
}