import { PrimaryParagraph } from '../Paragraph';

const brandInformationDetails = [
  [
    {
      title: '1774',
      description: (
        <>
          год создания <br /> марки
        </>
      ),
    },
    {
      title: '800£',
      description: (
        <>
          бюджет <br />
          основателей
        </>
      ),
    },
  ],
  [
    {
      title: '3',
      description: (
        <>
          коллаборации <br />с люкс-брендами
        </>
      ),
    },
    {
      title: '1975',
      description: (
        <>
          получен ордер <br />
          Royal Warrant
        </>
      ),
    },
  ],
];

const BrandInformation = () => (
  <section className="container brand-information">
    {brandInformationDetails.map((rowInformation, index) => (
      <div className="row justify-content-center" key={index}>
        {rowInformation.map(({ title, description }, innerIndex) => (
          <div className="col" key={innerIndex}>
            <p className="big-number">{title}</p>
            <PrimaryParagraph className="gray-text-color">{description}</PrimaryParagraph>
          </div>
        ))}
      </div>
    ))}
  </section>
);

export default BrandInformation;
