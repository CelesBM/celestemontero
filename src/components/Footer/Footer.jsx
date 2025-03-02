import { Container, ContainerInfo, ContainerSocialMedia, SocialMedia } from "./FooterStyles";

const Footer = () => {
    return(
        <>
        <Container>
          <ContainerInfo>
            <h5>Celeste B. Montero</h5>
            <p>Desarrolladora FullStack</p>
          </ContainerInfo>
          <ContainerSocialMedia>
            <SocialMedia>
              <a href="https://wa.link/eowvmb" target="_blank">
                <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-whatsapp-phone-icon-png-image_6315989.png" alt="whatsapp"/>
              </a>
            </SocialMedia>
            <SocialMedia>
              <a href="https://www.linkedin.com/in/celestemontero/" target="_blank">
                <img src="https://c0.klipartz.com/pngpicture/753/965/gratis-png-linkedin.png" alt="linkedin"/>
              </a>
            </SocialMedia>
            <SocialMedia>
              <a href="mailto:celesbmontero@hotmail.com" target="_blank">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/010/056/094/small_2x/email-and-mail-icon-sign-symbol-design-free-png.png" alt="email"/>
              </a>
            </SocialMedia>
          </ContainerSocialMedia>
        </Container>
        </>
    )
}

export default Footer;