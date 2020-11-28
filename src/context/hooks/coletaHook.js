import { useState } from 'react';
import api from '../../api/api';
import swal from 'sweetalert';

export default function ColetaHook() {
    const InitialColetaState =
        { id: 0, valor: '', dataColeta: null, indicadorMensal: { id: 0, nome: '', dataInicio: null }, intervaloInicial: null, intervaloFinal: null, }

    const [coletaState, setColetaState] = useState(InitialColetaState);
    const [coletasStateList, setColetasStateList] = useState([InitialColetaState]);

    const HandleGetColetas = async () => await api.get(`/coleta`)
        .then(resp => {
            setColetasStateList(resp.data.data);
        })
        .catch(_error => {
        });

    const HandleGetByIdColeta = async () => await api.get(`/coleta/${coletaState.id}`)
        .then(resp => {
            return resp.data.data;
        })
        .catch(_error => {
        });

    const HandleSearchColeta = async () => await api.post(`/coleta/search`, {
        dataIntervaloInicio: coletaState.intervaloInicial,
        dataIntervaloFim: coletaState.intervaloFinal,
    })
        .then(resp => {
            setColetasStateList(resp.data.data);
        })
        .catch(_error => {
        });

    const HandleCreateColeta = async () => await api.post(`/coleta`, {
        id: coletaState.id,
        valor: coletaState.valor ? parseFloat(coletaState.valor) : 0,
        idIndicadorMensal: coletaState.indicadorMensal.id,
        dataColeta: coletaState.dataColeta
    })
        .then(resp => {
            if (resp.data.success) {
                window.location.href = "http://localhost:3000/coleta";
            }
        })
        .catch(error => {
            if (error.response) {
                swal(error.response.data.errors.toString());
            }
        });

    const HandleUpdateColeta = async () => await api.put(`/coleta`, {
        id: coletaState.id,
        valor: parseFloat(coletaState.valor),
        idIndicadorMensal: coletaState.indicadorMensal.id,
        dataColeta: coletaState.dataColeta
    })
        .then(resp => {
            if (resp.data.success) {
                window.location.href = "http://localhost:3000/coleta";
            }
        })
        .catch(error => {
            if (error.response) {
                swal(error.response.data.errors.toString());
            }
        });

    const HandleDeleteColeta = async (id) => await api.delete(`/coleta/${id}`)
        .then(() => {
            HandleGetColetas();
        })
        .catch(_error => {
        });

    return {
        HandleGetColetas, coletasStateList, HandleDeleteColeta, coletaState, setColetaState, HandleGetByIdColeta, HandleCreateColeta, HandleUpdateColeta, InitialColetaState, HandleSearchColeta
    };
};