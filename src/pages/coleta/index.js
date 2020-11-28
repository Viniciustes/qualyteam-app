import React, { useEffect, useContext } from 'react';
import NavBar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import { AppContext } from '../../context/appContext';
import { useHistory } from 'react-router-dom';
import Moment from 'moment';
import swal from 'sweetalert';

export default function Coleta() {
    const history = useHistory();
    const { HandleGetColetas, coletasStateList, HandleDeleteColeta, coletaState, setColetaState, InitialColetaState, HandleSearchColeta } = useContext(AppContext);

    useEffect(() => {
        HandleGetColetas();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps 

    function Create() {
        setColetaState(InitialColetaState);

        history.push('/coleta/create');
    };

    function Update(id) {
        setColetaState({
            ...coletaState,
            id: id
        });

        history.push('/coleta/create');
    };

    const handleSubmit = async event => {
        event.preventDefault();

        if (!coletaState.intervaloInicial && coletaState.intervaloFinal)
            swal("Favor preencher intervalo inicial");
        else if (coletaState.intervaloInicial && !coletaState.intervaloFinal)
            swal("Favor preencher intervalo final");
        else if (coletaState.intervaloInicial && coletaState.intervaloFinal)
            HandleSearchColeta();
        else
            HandleGetColetas();
    };

    function Delete(id) {
        swal({
            title: "Tem certeza?",
            text: "Os dados não poderão ser recuperado!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    HandleDeleteColeta(id);
                    swal("Coleta excluída com sucesso!", {
                        icon: "success",
                    });
                };
            });
    };

    return (
        <>
            <NavBar />
            <div class="container">
                <div class="row justify-content-center">
                    <h1>Coleta</h1>
                </div>
                <form onSubmit={handleSubmit} class="form-inline my-2 my-lg-0 float-right">
                    <label >Intervalo Inicial:</label>
                    &nbsp;
                    <input class="form-control mr-sm-2" type="date"
                        value={Moment(coletaState.intervaloInicial).format('YYYY-MM-DD')}
                        onChange={(e) => {
                            setColetaState({
                                ...coletaState,
                                intervaloInicial: e.target.value
                            })
                        }} />
                    <label >Intervalo Final:</label>
                    &nbsp;
                    <input class="form-control mr-sm-2" type="date"
                        value={Moment(coletaState.intervaloFinal).format('YYYY-MM-DD')}
                        onChange={(e) => {
                            setColetaState({
                                ...coletaState,
                                intervaloFinal: e.target.value
                            })
                        }} />
                    &nbsp;&nbsp;
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Filtrar</button>
                    <br />
                    <br />
                </form>
                <table class="table table-bordered table-hover table-striped">
                    <thead align="center">
                        <tr>
                            <th>Valor</th>
                            <th>Data da Coleta</th>
                            <th>Indicador Mensal</th>
                            <th>Data Início Indicador Mensal</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coletasStateList.map((coleta) => (
                            <tr key={coleta.id}>
                                <td>{coleta.valor}</td>
                                <td align="center">{Moment(coleta.dataColeta).format('DD/MM/YYYY')}</td>
                                <td>{coleta.indicadorMensal?.nome}</td>
                                <td align="center">{Moment(coleta.indicadorMensal?.dataInicio).format('DD/MM/YYYY')}</td>
                                <td align="center">
                                    <button class="btn btn-secondary" onClick={() => Delete(coleta.id)}>Excluir</button>
                                &nbsp;
                                    <button class="btn btn-secondary" onClick={() => Update(coleta.id)}>Alterar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div class="row">
                    <div class="col-md-12 bg-light text-right">
                        <button type="button" onClick={Create} class="btn btn-primary">Novo</button>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <Footer />
        </>
    );
};