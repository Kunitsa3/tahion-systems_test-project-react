import { PrimaryParagraph } from '../Paragraph';
import FooterAccordion from './FooterAccordion';
import { ReactComponent as Location } from './location.svg';
import { ReactComponent as Shop } from './shop.svg';
import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as Instagram } from '../../assets/svg/instagram.svg';
import { ReactComponent as VK } from '../../assets/svg/vk.svg';
import { ReactComponent as Facebook } from '../../assets/svg/facebook.svg';

const Footer = () => (
  <footer className="container black-background white-text-color padding-bottom-40">
    <div className="d-flex location-wrapper">
      <div className="d-flex align-items-center col">
        <Location />
        <PrimaryParagraph>Москва</PrimaryParagraph>
      </div>
      <div className="d-flex align-items-center col">
        <Shop />
        <PrimaryParagraph>Найти магазин</PrimaryParagraph>
      </div>
    </div>
    <FooterAccordion />

    <div className="d-flex justify-content-between align-items-center mt-4">
      <div>
        <Instagram />
        <VK />
        <Facebook />
      </div>
      <Logo />
    </div>
  </footer>
);

export default Footer;
