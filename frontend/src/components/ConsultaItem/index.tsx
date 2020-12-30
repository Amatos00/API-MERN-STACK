import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import delet from '../../assets/images/delete.svg';
import edit from '../../assets/images/edit.svg';

import api from '../../services/api';

import './styles.css';

function ConsultasItem() {
    const [consultas, setConsultas] = useState([
        {
            id: '',
            nome: String,
        }
    ]);

    function handleDelete(id: string | undefined) {
        try {
            api.delete(`consultas/${id}`, {
            });

            setConsultas(consultas.filter(consulta => consulta.id !== id));
        } catch (err) {
            alert('Erro ao deletar caso, tente novamente.');
        }
    }

    useEffect(() => {

        async function loadApi(){
            const response = await api.get('http://localhost:3333/consultas?_order=desc&_sort=id');
            setConsultas(response.data);

        }

        loadApi();

    }, []);

    return (
        <div>
            {consultas.map(consulta => (
                <div className="box-list" key={consulta.id}>
                    <ul className="box-text">
                        <li>Nome
                            <p>{consulta.nome}</p>
                        </li>
                    </ul>
                    
                    <footer>
                        <li>Descrição</li>
                        <p>{consulta.descricao}</p>
                        <div className="buttons-container">
                            <button className="delete" type="button" onClick={() => handleDelete(consulta.id)}>
                                <img src={delet} alt="Delete"/>
                            </button>
    
                            <Link to={`/edicao/${consulta.id}`} className="edita">
                                <img src={edit} alt="Editar"/>
                            </Link>
                        </div>
                    </footer>
                </div>
            ))}
        </div>
    )
}

export default ConsultasItem;