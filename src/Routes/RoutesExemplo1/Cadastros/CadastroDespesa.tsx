import { useState } from "react"
import style from './CadastroDespesa.module.css'
import { useSearch } from "Hooks/SearchHook"
import {  useNavigate } from "react-router-dom"

interface Despesa {
    descricao?: string
    valor?: string
}

export function CadastroDespesas() {
    const [lista, setLista] = useState<Array<Despesa>>([])    
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('')     
    const navigate = useNavigate()

    const { listaPesquisa, pesquisa, setPesquisa } = useSearch<Despesa>(
            lista, 
            (item: Despesa, pesquisa) => item.descricao?.toLowerCase().includes(pesquisa.toLowerCase() ?? '') ?? true)

    /*const [listaPesquisa, setListaPesquisa] = useState<Array<Despesa>>([])
    const [pesquisa, setPesquisa] = useState('');

    useEffect(() => {        
        const resposta = lista.filter((item) => item.descricao?.toLowerCase().includes(pesquisa.toLowerCase() ?? ''))

        setListaPesquisa(resposta)
    }, [pesquisa, lista])*/

    return (
        <div className={style.container}>
            <div className={style.title}><button onClick={() => navigate(-1)}>Voltar</button> Cadastro Despesa</div>

            <div>
                <input value={descricao} onChange={(event) => setDescricao(event.target.value)} placeholder="Descrição" className={style.input}/>
            </div>

            <div>
                <input  value={valor} onChange={(event) => setValor(event.target.value)} placeholder="Valor" className={style.input}/>
            </div>

            <div className={`${style.width100} ${style.margin10}`}>
                <button className={style.width100} 
                onClick={() => {
                    setLista([...lista, {descricao: descricao, valor: valor}])
                }}>
                    Adicionar
                </button>
            </div>
            
            <div className={style.divider}></div>            

            <div className={style.containerLista}>
                <div>
                    <input value={pesquisa} onChange={(event) => setPesquisa(event.target.value)} placeholder="Pesquisar" className={style.input}/>
                </div>

                 {listaPesquisa.map((item, index) => {
                    return (
                    <div key={index} className={style.card}>
                        <p key={index} className={style.nome}>Descrição: {item.descricao}</p>
                        <p key={index} className={style.idade}>Valor: {item.valor}</p>
                    </div>)
                 })}
                 
            </div>
        </div>
    )
}