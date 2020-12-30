import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';

import axios from 'axios';

import './styles.css';

const initialValue = {
    id: '',
    nome: '',
}

const EditarCadastro = () => {
    const [values, setValues] = useState(initialValue);

    const history = useHistory();

    

    function onChange(ev: { target: { name: any; value: any; }; }) {
        const { name, value} = ev.target;

        setValues({...values, [name]: value});
        
    }

    function onSubmit(ev: { preventDefault: () => void; }) {
        ev.preventDefault();

        axios.put(`http://localhost:3333/sessions/${initialValue.id}`, values)
            .then((response) => {
                history.push('/')
            });
    }

    function handleCancelar(e: FormEvent) {
        e.preventDefault();

        history.push('/');
    }

    return (
        <>
            <Header >
                <>
                </>
            </Header>
            <div id="page-edicao">
                <header>
                    <p>EDIÇÃO</p>
                </header>
                <div className="container">
                    <form onSubmit={onSubmit}>
                        <fieldset>
                            <legend>Nome</legend>
                            <input 
                                id="nome"
                                name="nome"
                                type="text"
                                placeholder="Digite o nome do profissional de saúde"
                                onChange={onChange}
                                value={values.nome}
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
        </>
    )
}

export default EditarCadastro;