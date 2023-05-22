import React, { createContext, useState } from 'react';

export const ResultContext = createContext();

export const Result = ({ children }) => {
    const [result, setResult ] = useState('')

    return(
        <ResultContext.Provider value={{ result, setResult }}>
            { children }
        </ResultContext.Provider>
    )
}

// criando componente para passar o valor do resultado sem a necessidade de passar o props para os componentes filhos