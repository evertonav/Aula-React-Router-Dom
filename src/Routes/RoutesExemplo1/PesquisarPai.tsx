import { Link, Outlet } from "react-router-dom";

export function PesquisarPai(){
    return (


        <div>                       
            <div style={{display: "flex", width: "100%", backgroundColor: 'red', gap: '12px'}}>
                <Link to="/Cadastro">
                    Cadastro
                </Link>

                <Link to="/Cadastro/Lista">
                    Cadastro Lista
                </Link>
            </div>

            <Outlet />            
        </div>        
    )
}