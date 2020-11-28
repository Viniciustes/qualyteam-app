import React, { useContext, useEffect } from 'react';
import NavBar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import { AppContext } from '../../context/appContext';
import { useHistory } from 'react-router-dom';
import Moment from 'moment';
import swal from 'sweetalert';

export default function IndicadorMensal() {
    const history = useHistory();
    const { HandleGetIndicadores, indicadoresStateList, HandleDeleteIndicador, indicadorMensalState, setIndicadorMensalState, InitialIndicadorMensalState } = useContext(AppContext);

    useEffect(() => {
        HandleGetIndicadores();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps 

    function Create() {
        setIndicadorMensalState(InitialIndicadorMensalState);

        history.push('/indicadorMensal/create');
    };

    function Update(id) {
        setIndicadorMensalState({
            ...indicadorMensalState,
            id: id
        });

        history.push('/indicadorMensal/create');
    };

    function Delete(id) {
        swal({
            title: "Tem certeza?",
            text: "Os dados não poderão ser recuperado e coletas vinculadas também serão excluídas!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    HandleDeleteIndicador(id);
                    swal("Indicador excluído com sucesso!", {
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
                    <h1>Indicador Mensal</h1>
                </div>
                <table class="table table-bordered table-hover table-striped">
                    <thead align="center">
                        <tr>
                            <th>Nome</th>
                            <th>Data Início</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {indicadoresStateList.map((indicador) => (
                            <tr key={indicador.id}>
                                <td>{indicador.nome}</td>
                                <td align="center">{Moment(indicador.dataInicio).format('DD/MM/YYYY')}</td>
                                <td align="center">
                                    <button class="btn btn-secondary" onClick={() => Delete(indicador.id)}>Excluir</button>
                                &nbsp;
                                    <button class="btn btn-secondary" onClick={() => Update(indicador.id)}>Alterar</button>
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