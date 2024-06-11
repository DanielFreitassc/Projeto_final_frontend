import styled from "styled-components";
import Header from ".";
import { Link } from "react-router-dom";

export const ContainerHeader = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #171717;
    height: 130px;
    width: 100%;
    color: white;
    padding: 32px;
`

export const HomeNavigate = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 21px;
    gap: 10px;
    text-decoration: none;
    color: inherit;
`
export const LinkHeader = styled(Link)`
    text-decoration: none;
    color: inherit;

`