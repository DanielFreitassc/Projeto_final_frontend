import styled from "styled-components";


export const ContainerUser = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
`

export const FormUser = styled.form`
    display: flex;
    flex-direction: column;
    height: 47vw;
    width: 35vw;
    background-color: white;
    padding: 1vw;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px); 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); 
    border: 1px solid rgba(255, 255, 255, 0.3);
`

export const TitleUser = styled.h1`
    font-size: 2.3vw;
    margin-left: 4vw;
    color: blue;
`
export const ButtonRegister = styled.button`
    margin-top: 2vw;
    height: 5vw;
    width: 100%;
    border-radius: 8px;
    border: none;
    background-color: blue;
    color: white;
    font-size: 1.2vw;
`