import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function ButtonAdicionar() {
    return (
            <Link className="cadastro" to="/cadastro">
                <div>
                    <button>
                        <strong>ADICIONAR NOVO</strong>
                    </button>
                </div>
            </Link>
    )
}

export default ButtonAdicionar;