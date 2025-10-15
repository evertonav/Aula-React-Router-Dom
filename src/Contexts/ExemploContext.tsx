import { createContext, useState, type ReactNode } from "react"

interface Exemplo {
  Nome: string, 
  Idade: number
}

export interface ExemploContext {
  exemplo: Exemplo
  setExemplo: (Nome?: string, Idade?: number) => void
  
}

export interface ExemploContextProviderProps {
    children: ReactNode
}

export const ExemploContextCreated = createContext<ExemploContext | null>(null)

export function ExemploContextProvider({ children } : ExemploContextProviderProps) {
  const [exemplo, setExemplo] = useState<Exemplo>({Idade: 18, Nome: 'Everton'})

  function setExemploCustom(Nome?: string, Idade?: number) {

    let nome = exemplo.Nome
    let idade = exemplo.Idade

    if (Nome) {
      nome = Nome
    }

    if (Idade) {
      idade = Idade
    }

    setExemplo({Idade: idade, Nome: nome})
  }

  return (
    <ExemploContextCreated.Provider value={{ exemplo, setExemplo: setExemploCustom}}>
      {children}
    </ExemploContextCreated.Provider>
  )
}