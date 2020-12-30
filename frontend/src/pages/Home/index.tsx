import React from 'react';

import Header from '../../components/Header';
import ConsultasItem from '../../components/ConsultaItem';

import './styles.css';
import ButtonAdicionar from '../../components/ButtonAdicionar';


const Home = () => {
    return (
        <>
            <Header >
                <ButtonAdicionar />
            </Header>
            <div className="box">
                <header>
                    <p>CONSULTAS AGENDADAS</p>
                </header>

                <ConsultasItem />

            </div>
        </>
    )
}

export default Home;