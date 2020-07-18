import React, { useState } from "react";
import "./Mega.css"

export default props => {
    function gerarNumerosNaoContidos(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max - min + 1)) + min;
        return array.includes(aleatorio) ?
            gerarNumerosNaoContidos(min, max, array): 
            aleatorio;
    }
    
    function gerarNumeros(qtde) {
        const numeros = Array(qtde)
            .fill(0)
            .reduce(nums => {
                const novoNumero = gerarNumerosNaoContidos(1, 60, nums);
                return [...nums, novoNumero];
            },[])
            .sort((n1, n2) => n1 - n2);
    
    
        return numeros;
    }
    
    const [qtde, setQtde] = useState(props.qtde || 6);
    const numerosInciais = Array(qtde).fill(0);
    const [numeros, setNumeros] =  useState(numerosInciais);
    

    return (
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label>Qtde de Números</label>
                <input 
                    min="6"
                    max = "17"
                    type="number" 
                    value={qtde}
                    onChange={e => {
                        setQtde(+e.target.value)
                        setNumeros(gerarNumeros(+e.target.value))
                    }}
                />
            </div>
            <button onClick={_ => setNumeros(gerarNumeros(qtde))}>
                Gerar Números
            </button>
        </div>
    )
}