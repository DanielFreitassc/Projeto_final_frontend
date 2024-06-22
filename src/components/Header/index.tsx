import { ContainerHeader, HomeNavigate, LinkHeader } from "./styles";
import { IoHomeOutline } from "react-icons/io5";

const Header = () => {
    return(
        <ContainerHeader>
            <HomeNavigate> <LinkHeader to={"/home"}><IoHomeOutline/> Home</LinkHeader> </HomeNavigate>
            <HomeNavigate> <LinkHeader to={"/users"}>Cadaastro de pessoas</LinkHeader> </HomeNavigate>
            <HomeNavigate> <LinkHeader to={"#"}>Produtos</LinkHeader> </HomeNavigate>
        </ContainerHeader>
    )
}
export default Header;