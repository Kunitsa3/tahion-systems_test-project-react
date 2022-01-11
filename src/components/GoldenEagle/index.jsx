import GoldenEaglePicture from '../../assets/pictures/Golden eagle.jpg';
import GoldenEagleLogo from '../../assets/pictures/Logo with golden eagle.jpg';
import { PrimaryParagraph } from '../Paragraph';

const goldenEagleHistory = [
  {
    description: `Символ золотого орла — неотъемлемая часть одежды Lyle & Scott. Он олицетворяет наследие и качество, которое
        ценят наши клиенты.`,
    className: 'margin-bottom-12',
  },
  {
    description: `На протяжении веков орёл был символом скорости, свободы, вдохновения и гордости. Золотой орёл сегодня — это
        отражение ценностей Lyle & Scott и дань уважения шотландским корням. Мы с гордостью носим его на груди.`,
    className: 'margin-bottom-12',
  },
  {
    description: `Впервые логотип с орлом появился на вещах из коллекции для гольфа в середине 60-х. Он был вдохновлён полями для
        гольфа в Глениглсе и их местными обитателями — золотыми орлами. В 70-х знак золотого орла быстро набрал
        популярность, а в 80-х стал символом отсутствия выбора между стилем и функциональностью.`,
    className: 'margin-bottom-40',
  },
];

const GoldenEagle = () => (
  <section className="vertical-margin-128">
    <div className="d-flex justify-content-center">
      <img className="mb-3" src={GoldenEaglePicture} alt="Golden Eagle" />
    </div>
    <div className="horizontal-padding-20">
      <h2 className="mt-4 mb-3 jost-500">ЗОЛОТОЙ ОРËЛ</h2>
      {goldenEagleHistory.map(({ className, description }, index) => (
        <PrimaryParagraph className={className} key={index}>
          {description}
        </PrimaryParagraph>
      ))}
    </div>
    <div className="d-flex justify-content-center">
      <img src={GoldenEagleLogo} alt="Golden Eagle on golf clothes" />
    </div>
  </section>
);

export default GoldenEagle;
