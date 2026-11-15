import { createContext, useState } from 'react';

export const TemaContext = createContext()

export function TemaProvider({ children }) {
    const [oscuro, setOscuro] = useState(false)

    function cambiarTema() {
        setOscuro(!oscuro)
    }

    return (
        <TemaContext.Provider value= {{ oscuro, cambiarTema }}>
            {children}
        </TemaContext.Provider>
    )
}