import { ContainerHeader, HomeNavigate, LinkHeader } from "./styles";

const Header = () => {
    return(
        <ContainerHeader>
            <HomeNavigate> <LinkHeader to={"/users-list"}>Pessoas</LinkHeader> </HomeNavigate>
            <HomeNavigate> <LinkHeader to={"/products"}>Produtos</LinkHeader> </HomeNavigate>
        </ContainerHeader>
    )
}
export default Header;