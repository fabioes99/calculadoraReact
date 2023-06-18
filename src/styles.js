import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(330deg, #4661DA 0%, #8A4EC6 100%);
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
`


export const Content = styled.div`
    background-color: #1C172B;
    width: 45%;
    border-radius: 10px;
`

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
