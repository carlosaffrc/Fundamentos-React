import React from "react";
import './App.css';


import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/listaAlunos";
import TabelaProdutos from "./components/repeticao/tabelaProdutos";
import ParOuImpar from "./components/condicional/parOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo"
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai"
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";

export default () => (
    <div className="App">
        <h1>Fundamentos React </h1>
        <div className="Cards">

            <Card titulo="#13 - Mega" color="#B9006E">
                <Mega qtde={8}></Mega>
            </Card>

            <Card titulo="#12 - Contador" color="#424242">
                <Contador numeroInicial={10} passoInicial={5}></Contador>
            </Card>

            <Card titulo="#11 - Componente Controlado" color="#E45F56">
                <Input></Input>
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#8BAd39">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="#59223C">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 - Renderização Condicional" color="#982395">
                <ParOuImpar numero={21}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Fergus' }}/>
            </Card>
            
            <Card titulo="#07 - Desafio Repetição" color="#3A9AD9">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 - Lista de Alunos" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Silva" >
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>
            
            <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio min={1} max={60} />  
            </Card>

            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento /> 
            </Card>
            
            <Card titulo="#02 - Com Parâmetro" color="#E8b71A">
            <ComParametro
                titulo="Situação do Aluno"
                aluno="Pedro Silva"
                nota={8.7} />
            </Card>
            
            <Card titulo="#01 - Primeiro Componente" color="#588C73"B7>
                <Primeiro></Primeiro> 
            </Card>   
        </div>
    </div>
);