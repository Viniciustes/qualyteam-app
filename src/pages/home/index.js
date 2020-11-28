import React from 'react';
import NavBar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

export default function Home() {
    return (
        <>
            <NavBar />
            <div class="container">
                <div class="row justify-content-center">
                    <h1>App feito para teste na Qualyteam</h1>
                    <br/>
                    <h2>Para acessar as funcionalidades, acessar a navbar acima clicando nos nomes <b>Indicador Mensal</b> e <b>Coleta</b></h2>
                </div>
            </div>
            <Footer />
        </>
    );
};

