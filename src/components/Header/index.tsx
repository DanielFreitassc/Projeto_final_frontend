import { ContainerHeader, HomeNavigate, LinkHeader } from "./styles";
import { IoHomeOutline } from "react-icons/io5";

const Header = () => {
    return(
        <ContainerHeader>
            <HomeNavigate> <LinkHeader to={"/home"}><IoHomeOutline/> Home</LinkHeader> </HomeNavigate>
            <HomeNavigate> <LinkHeader to={"/users"}>Cadaastro de pessoas</LinkHeader> </HomeNavigate>
            <HomeNavigate> <LinkHeader to={"#"}> Cadastro de produtos</LinkHeader> </HomeNavigate>
            <HomeNavigate> <LinkHeader to={"#"}> Listagem de produtos</LinkHeader> </HomeNavigate>
        </ContainerHeader>
    )
}
export default Header;