import type { ButtonHTMLAttributes } from "react";

interface BotaoComumProps extends ButtonHTMLAttributes<HTMLButtonElement>  {
}

export function BotaoComum({children, ...resto}: BotaoComumProps) {
    return (
        <button style={{backgroundColor: 'green'}} {...resto}>{children}</button>
    )
}