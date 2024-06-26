import styled from "styled-components";

export const ContainerUsersList = styled.div`
    width: 100%;
    height: 100vh;
`
export const Button = styled.button<{$bgColor?: string, $width?: string}>`
    width:  ${({$width}) => $width || '300px' };
    border: none;
    background-color: ${({$bgColor}) => $bgColor || '#171717'} ;
    color: #fff;
    font-weight: 600;
    height: 40px;
    border-radius: 10px;
    cursor: pointer;

    &:hover{
        cursor: pointer;
        box-shadow: 4px 5px 10px rgba(1, 1, 1, 0.5);
    }

    &:active{
        transform: scale(0.9);
    }
`

export const PessoaButtons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 1rem;
`