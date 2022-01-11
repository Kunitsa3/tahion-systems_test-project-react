import { PrimaryParagraph } from '../Paragraph';
import { ReactComponent as RightArrow } from './rightArrow.svg';

const BrandDescription = () => (
  <section className="brand-description">
    <PrimaryParagraph className="brand-description-text">
      Lyle & Scott — шотландский бренд с богатым наследием и неизменным чувством вкуса. Вдохновляющий и выходящий за
      рамки привычного. Свободный и гордый оставаться собой в каждой детали.
    </PrimaryParagraph>
    <div className="d-flex align-items-center">
      <h3 className="jost-500">Познакомиться с брендом</h3>
      <RightArrow />
    </div>
  </section>
);

export default BrandDescription;
