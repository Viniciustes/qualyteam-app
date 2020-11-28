import React, { useContext, useEffect, useState } from 'react';
import NavBar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../context/appContext';
import Moment from 'moment';

export default function CreateIndicadorMensal() {
    const history = useHistory();
    const [titulo, setTitulo] = useState();
    const { HandleCreateIndicadorMensal, HandleUpdateIndicadorMensal, indicadorMensalState, setIndicadorMensalState, HandleGetByIdIndicador, InitialIndicadorMensalState } = useContext(AppContext);

    useEffect(() => {
        CheckUpdateOrCreate();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps 

    async function CheckUpdateOrCreate() {
        if (indicadorMensalState.id !== 0) {
            setTitulo(<h1>Alterar Indicador Mensal</h1>)

            const data = await HandleGetByIdIndicador();

            setIndicadorMensalState(data);
        } else {
            setTitulo(<h1>Cadastrar Indicador Mensal</h1>)

            setIndicadorMensalState(InitialIndicadorMensalState);
        };
    };

    const handleSubmit = async event => {
        event.preventDefault();

        if (indicadorMensalState.id !== 0) {
            await HandleUpdateIndicadorMensal();
        } else {
            await HandleCreateIndicadorMensal();
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
                    <label >Nome:</label>
                    <input class="form-control mb-3" placeholder="Nome" type="text"
                        value={indicadorMensalState.nome}
                        onChange={(e) => {
                            setIndicadorMensalState({
                                ...indicadorMensalState,
                                nome: e.target.value
                            })
                        }}

                    />
                    <label >Data Início:</label>
                    <input class="form-control mb-3" type="date"
                        value={Moment(indicadorMensalState.dataInicio).format('YYYY-MM-DD')}
                        onChange={(e) => {
                            setIndicadorMensalState({
                                ...indicadorMensalState,
                                dataInicio: e.target.value
                            })
                        }}
                    />
                    <div class="row">
                        <div class="col-md-12 bg-light text-right">
                            <button type="button" onClick={() => history.push('/indicadormensal')} class="btn btn-primary">Cancelar</button>
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