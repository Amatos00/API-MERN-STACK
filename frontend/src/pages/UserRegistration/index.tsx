import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';

import axios from 'axios';

import './styles.css';

const initialValue = {
    nome: '',
}


const CadastroFrom = () => {
    const [values, setValues] = useState(initialValue);
    
    const history = useHistory();
    
    function onChange(ev: { target: { name: any; value: any; }; }) {
        const { name, value} = ev.target;

        setValues({...values, [name]: value});
        
    }

    function onSubmit(ev: { preventDefault: () => void; }) {
        ev.preventDefault();

        axios.post('http://localhost:3333/sessions', values)
            .then((response) => {
                history.push('/')
            });

    }

    function handleCancelar(e: FormEvent) {
        e.preventDefault();

        history.push('/');
    }

    return (
        <div>
            <Header >
                <>
                </>
            </Header>
            <div id="page-cadastro">
                <header>
                    <p>CADASTRO</p>
                </header>
                <div className="container">
                    <form onSubmit={onSubmit}>
                        <fieldset>
                            <legend>Nome</legend>
                            <input 
                                id="nome"
                                name="nome"
                                type="text"
                                placeholder="Digite o nome"
                                onChange={onChange}
                            />

                        </fieldset>

                        <footer>
                            <button onClick={handleCancelar} className="ButtonCancelar">
                                Cancelar
                            </button>

                            <button type="submit" className="ButtonSalvar">
                                Salvar
                            </button>
                        </footer>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CadastroFrom;