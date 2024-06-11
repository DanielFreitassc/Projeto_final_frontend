import { ContainerHeader, HomeNavigate, LinkHeader } from "./styles";
import { IoHomeOutline } from "react-icons/io5";

const Header = () => {
    return(
        <ContainerHeader>
            <HomeNavigate> <LinkHeader to={"/"}><IoHomeOutline/> Home</LinkHeader> </HomeNavigate>
        </ContainerHeader>
    )
}
export default Header;