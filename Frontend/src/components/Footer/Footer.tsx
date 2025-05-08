import { FooterWrapper } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        &copy; 2025 Kamil Konopski -{" "}
        <a target="_blank" href="https://github.com/KamilKonopski">
          Github
        </a>
      </p>
    </FooterWrapper>
  );
};

export default Footer;
