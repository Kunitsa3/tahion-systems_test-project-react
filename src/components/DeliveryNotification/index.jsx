import { ReactComponent as LeftArrow } from './leftArrow.svg';
import { ReactComponent as RightArrow } from './rightArrow.svg';
import { ReactComponent as DeliveryCar } from './deliveryCar.svg';
import { SecondaryParagraph } from '../Paragraph';

const DeliveryNotification = () => (
  <section className="d-flex align-items-center justify-content-center light-gray-background delivery-notification">
    <LeftArrow />
    <DeliveryCar />
    <SecondaryParagraph className="me-3">Бесплатная доставка до двери по всей России</SecondaryParagraph>
    <RightArrow />
  </section>
);

export default DeliveryNotification;
