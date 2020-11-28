import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ImageBlock, Form, Input, ButtonSubmit, Label } from './styles';
import Logo from '../../assets/images/qualyteam-logo.png';
import swal from 'sweetalert';
import { cpf } from 'cpf-cnpj-validator';

export default function Login() {
    const [state, setState] = useState({ cpf: '', password: '' });
    const history = useHistory();

    function Logar() {
        if (cpf.isValid(state.cpf)) {
            history.push('/');
        }
        else {
            swal("CPF inválido!");
        }
    };

    return (
        <>
            <div class="container">
                <div class="justify-content-center">
                    <ImageBlock>
                        <img src={Logo} alt="Logo Qualyteam" />
                    </ImageBlock>
                    <Form>
                        <form>
                            <Input>
                                <input
                                    type="number"
                                    placeholder="CPF"
                                    value={state.cpf}
                                    onChange={(e) => {
                                        setState({
                                            ...state,
                                            cpf: e.target.value
                                        })
                                    }}
                                ></input>
                            </Input>
                            <Input>
                                <input
                                    type="password"
                                    placeholder="Senha"
                                    value={state.password}
                                    onChange={(e) =>
                                        setState({
                                            ...state,
                                            password: e.target.value
                                        })
                                    }
                                ></input>
                            </Input>
                            <ButtonSubmit>
                                <input type="button" value="Login" onClick={Logar} />
                            </ButtonSubmit>
                        </form>
                    </Form>
                    <br />
                    <Label>
                        <label>Coloque um CPF válido e qualquer senha para logar.</label>
                        <br/>
                        Autenticação não está funcionando, foi feito essa tela apenas para exemplificar a realidade.
                    </Label>
                </div>
            </div>
        </>
    )
};