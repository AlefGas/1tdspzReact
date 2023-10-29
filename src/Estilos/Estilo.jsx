import styled from "styled-components";
export const lightTheme = {
    corFundo: 'FFFFFF',
    corTexto: 'BLACK',
    corTitulo: 'white'
}

export const darkTheme = {
    corFundo: '#14213D',
    corTexto: 'BLACK',
    corTitulo: '#fffdd0'
}

// Criando uma div
export const Container = styled.div`
    background-color: ${props => props.theme.corFundo};
    color: ${props => props.theme.corTexto};
`
// Criando um botão
export const Button = styled.button`
    padding: 5px;
    border: ridaius;
    background-color: #79C5E7;
    color: white;
    margin: 2px;
`
// Criando um título
export const TitlePage = styled.h1`
    color: #grey11	;
    font-size: 20px;
`
export const InformacoesCep = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
`
// Criando uma div para formulários
export const DivForm = styled.div`
    display: inline;
    background-color: #FFF;
    `