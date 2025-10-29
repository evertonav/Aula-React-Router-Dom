import { useEffect, useState } from "react"

export function useSearch<T>(lista: Array<T>, onFilter: (item: T, pesquisa: string) => boolean) {
    const [listaPesquisa, setListaPesquisa] = useState<Array<T>>([])
    const [pesquisa, setPesquisa] = useState('');

    useEffect(() => {   
        debugger
        const resposta = lista.filter((item) => onFilter(item, pesquisa))
        
        setListaPesquisa(resposta)
    }, [pesquisa, lista])

    return {
        listaPesquisa,
        pesquisa,
        setPesquisa
    }
}