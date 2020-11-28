import React, { useContext, useEffect, useState } from 'react';
import NavBar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../context/appContext';
import Moment from 'moment';

export default function CreateColeta() {
    const history = useHistory();
    const [titulo, setTitulo] = useState()
    const { HandleGetByIdColeta, coletaState, setColetaState, HandleGetIndicadores, indicadoresStateList, HandleCreateColeta, HandleUpdateColeta, InitialColetaState } = useContext(AppContext);

    useEffect(() => {
        HandleGetIndicadores();
        CheckUpdateOrCreate();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps 

    async function CheckUpdateOrCreate() {
        if (coletaState.id !== 0) {
            setTitulo(<h1>Alterar Coleta</h1>)

            const data = await HandleGetByIdColeta();

            setColetaState(data);
        } else {
            setTitulo(<h1>Cadastrar Coleta</h1>)

            setColetaState(InitialColetaState);
        };
    };

    const handleSubmit = async event => {
        event.preventDefault();

        if (coletaState.id !== 0) {
            await HandleUpdateColeta();
        } else {
            await HandleCreateColeta();
        }
    };

    return (
        <>
            <NavBar />
            <div class="container">
                <div class="row justify-content-center">
                    {titulo}
                </div>
                <form onSubmit={handleSubmit}>
                    <label >Valor:</label>
                    <input class="form-control mb-3" placeholder="Valor" type="text"
                        value={coletaState.valor}
                        onChange={(e) => {
                            setColetaState({
                                ...coletaState,
                                valor: e.target.value
                            })
                        }}
                    />
                    <label >Data Coleta:</label>
                    <input class="form-control mb-3" type="date"
                        value={Moment(coletaState.dataColeta).format('YYYY-MM-DD')}
                        onChange={(e) => {
                            setColetaState({
                                ...coletaState,
                                dataColeta: e.target.value
                            })
                        }}
                    />
                    <label >Indicador Mensal:</label>
                    <select name="idsIndicadorMensal" className="browser-default custom-select"
                        value={coletaState.indicadorMensal.id}
                        defaultValue={0}
                        onChange={(e) => {
                            setColetaState({
                                ...coletaState,
                                indicadorMensal: {
                                    id: parseInt([...e.target.selectedOptions].map(o => parseInt(o.value)))
                                }
                            })
                        }}>
                        <option value={0} selected disabled hidden>Indicador Mensal</option>
                        {indicadoresStateList.map((indicadorMensal) => (
                            <option key={indicadorMensal.id} value={indicadorMensal.id} >{indicadorMensal.nome}</option>
                        ))}
                    </select>
                    <br />
                    <br />
                    <div class="row">
                        <div class="col-md-12 bg-light text-right">
                            <button type="button" onClick={() => history.push('/coleta')} class="btn btn-primary">Cancelar</button>
                        &nbsp;&nbsp;
                        <button type="submit" class="btn btn-warning">Salvar</button>
                        </div>
                    </div>
                </form>
            </div>
            <br />
            <br />
            <Footer />
        </>
    );
};