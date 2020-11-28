import { useState } from 'react';
import api from '../../api/api';
import swal from 'sweetalert';

export default function IndicadorMensalHook() {
    const InitialIndicadorMensalState = { id: 0, nome: '', dataInicio: null };
    const [indicadorMensalState, setIndicadorMensalState] = useState(InitialIndicadorMensalState);
    const [indicadoresStateList, setIndicadoresStateList] = useState([{}]);

    const HandleGetIndicadores = async () => await api.get(`/indicadormensal`)
        .then(resp => {
            setIndicadoresStateList(resp.data.data);
        })
        .catch(_error => {
        });

    const HandleGetByIdIndicador = async () => await api.get(`/indicadormensal/${indicadorMensalState.id}`)
        .then(resp => {
            return resp.data.data;
        })
        .catch(_error => {
        });

    const HandleCreateIndicadorMensal = async () => await api.post(`/indicadormensal`, {
        id: indicadorMensalState.id,
        nome: indicadorMensalState.nome,
        dataInicio: indicadorMensalState.dataInicio
    })
        .then(resp => {
            if (resp.data.success) {
                window.location.href = "http://localhost:3000/indicadormensal";
            }
        })
        .catch(error => {
            if (error.response) {
                swal(error.response.data.errors.toString());
            }
        });

    const HandleUpdateIndicadorMensal = async () => await api.put(`/indicadormensal`, {
        id: indicadorMensalState.id,
        nome: indicadorMensalState.nome,
        dataInicio: indicadorMensalState.dataInicio
    })
        .then(resp => {
            if (resp.data.success) {
                window.location.href = "http://localhost:3000/indicadormensal";
            }
        })
        .catch(error => {
            if (error.response) {
                swal(error.response.data.errors.toString());
            }
        });

    const HandleDeleteIndicador = async (id) => await api.delete(`/indicadormensal/${id}`)
        .then(() => {
            HandleGetIndicadores();
        })
        .catch(_error => {
        });

    return {
        HandleGetIndicadores, indicadoresStateList, HandleDeleteIndicador, HandleCreateIndicadorMensal, HandleUpdateIndicadorMensal,
        indicadorMensalState, setIndicadorMensalState, HandleGetByIdIndicador, InitialIndicadorMensalState
    };
};