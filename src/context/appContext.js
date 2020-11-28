import React, { createContext } from 'react';
import ColetaHook from './hooks/coletaHook';
import IndicadorMensalHook from './hooks/indicadorMensalHook';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const { HandleGetColetas, coletasStateList, HandleDeleteColeta, coletaState, setColetaState, HandleGetByIdColeta, HandleCreateColeta,
        HandleUpdateColeta, InitialColetaState, HandleSearchColeta } = ColetaHook();
    const { HandleGetIndicadores, indicadoresStateList, HandleDeleteIndicador, HandleCreateIndicadorMensal, HandleUpdateIndicadorMensal,
        indicadorMensalState, setIndicadorMensalState, HandleGetByIdIndicador, InitialIndicadorMensalState } = IndicadorMensalHook();

    return (
        <AppContext.Provider value={{
            HandleGetColetas, coletasStateList, HandleDeleteColeta, coletaState, setColetaState, HandleGetByIdColeta, HandleCreateColeta, HandleUpdateColeta, InitialColetaState, HandleSearchColeta,
            HandleGetIndicadores, indicadoresStateList, HandleDeleteIndicador, HandleCreateIndicadorMensal, HandleUpdateIndicadorMensal, indicadorMensalState, setIndicadorMensalState, HandleGetByIdIndicador, InitialIndicadorMensalState
        }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;