import { useEffect, useRef, useState } from "react"
import style from "./CadastroUsuario.module.css"
import { useSearch } from "Hooks/SearchHook"
import { useNavigate } from "react-router-dom"

interface Usuario {
    nome?: string
    idade?: string
}

export function CadastroUsuario() {
    const [lista, setLista] = useState<Array<Usuario>>([])    
    const inputNomeRef = useRef<HTMLInputElement>(null);
    const inputIdadeRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate()

    
    const { listaPesquisa, pesquisa, setPesquisa } = useSearch<Usuario>(
        lista, 
        (item: Usuario, pesquisa) => item.nome?.toLowerCase().includes(pesquisa.toLowerCase() ?? '') ?? true)
    

    /*const [listaPesquisa, setListaPesquisa] = useState<Array<Usuario>>([])
    const [pesquisa, setPesquisa] = useState('');

    useEffect(() => {   
        debugger     
        const resposta = lista.filter((item) => item.nome?.toLowerCase().includes(pesquisa.toLowerCase() ?? ''))
    
        setListaPesquisa(resposta)
    }, [pesquisa, lista])*/

    return (
        <div className={style.container}>
            <div className={style.title}><button onClick={() => navigate(-1)}>Voltar</button>Cadastro Usuário</div>

            <div>
                <input ref={inputNomeRef} placeholder="Nome" className={style.input}/>
            </div>

            <div>
                <input ref={inputIdadeRef} placeholder="Idade" className={style.input}/>
            </div>

            <div className={`${style.width100} ${style.margin10}`}>
                <button className={style.width100} onClick={() => 
                setLista([...lista, 
                          {nome: inputNomeRef.current?.value, idade: inputIdadeRef.current?.value}])}>Adicionar</button>
            </div>
            

            <div className={style.divider}></div>            

            <div className={style.containerLista}>
                <div>
                    <input value={pesquisa} onChange={(event) => setPesquisa(event.target.value)}  placeholder="Pesquisar" className={style.input}/>
                </div>

                 {listaPesquisa.map((item, index) => {
                    return (
                    <div key={index} className={style.card}>
                        <p key={index} className={style.nome}>Nome: {item.nome}</p>
                        <p key={index} className={style.idade}>Idade: {item.idade}</p>
                    </div>)
                 })}
                 
            </div>
        </div>
    )
}