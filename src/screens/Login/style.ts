import styled from "styled-components";

export const ContainerLogin = styled.div`
    width: 100%;
    height: 100vh;
`
export const FormContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100vh;
    background-color: blue;
    background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
`
export const ContainerImage = styled.div`
    display: flex;
    justify-content: center;
    height: 45vw;
    width: 50vw;
`
export const ImageContent = styled.img`
    object-fit: contain;
`

export const FormContent = styled.form`
    display: flex;
    padding: 7vw;   
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 45vw;
    background-color: rgba(255, 255, 255, 0.1);
`
export const TitleLogin  = styled.h1`
    color: white;
    margin-left: 4vw;
    font-size: 2.3vw;
`

export const ButtonLogin = styled.button`
    font-size: 1.2vw;
    border-radius: 2px;
    height: 3vw;
    margin-top: 1vw;
    border: none;
    background-color: blue;
    color: white;

    &:hover{
        cursor: pointer;
        box-shadow: 4px 3px 10px rgba(1,1,1,0.4);
    }
`