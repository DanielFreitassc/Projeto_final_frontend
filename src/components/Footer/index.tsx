import { FooterContainer, CopyContainer, Copy } from "./styles";

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return(
        <FooterContainer>
            <CopyContainer>
                <Copy>SATC©{currentYear}</Copy>
            </CopyContainer>
        </FooterContainer>
    )
}
export default Footer;